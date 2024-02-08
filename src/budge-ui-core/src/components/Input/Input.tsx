import {
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputKeyPressEventData,
} from "react-native";
import React, { useRef } from "react";
import { Box } from "../Box";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Text } from "../Text";
import { useFocus } from "@budgeinc/budge-ui-hooks";
import { extractViewVariantProps } from "@budgeinc/budge-ui-styling";
import { inputVariant } from "./Input.variants";
import { TInputProps } from "./Input.types";

export const LINE_HEIGHT = 18;
export const INPUT_MARGIN_TOP = 30;
export const INPUT_MARGIN_BOTTOM = 11;

const baseLabelAnimatedStyle = {
  top: 17,
  fontSize: 16,
};

const AnimatedText = Animated.createAnimatedComponent(Text);

const Input = ({
  inputRef,
  style,
  className,
  children,
  label,
  showLabel,
  leftSection,
  rightSection,
  variant,
  disabled = false,
  editable = true,
  errored = false,
  ...others
}: TInputProps) => {
  const hasError = false;
  const { isFocused, focusProps } = useFocus();
  const _inputRef = inputRef || useRef<TextInput>(null);

  const { styleProps, viewVariantProps, rest } =
    extractViewVariantProps(others);

  const isTextarea = rest?.multiline || false;
  const nbLines = rest?.numberOfLines || 1;
  const inputRootHeight =
    nbLines * LINE_HEIGHT +
    (isTextarea && !showLabel ? 24 : INPUT_MARGIN_TOP + INPUT_MARGIN_BOTTOM);

  const variantStyles = inputVariant({
    variant,
    disabled,
    editable,
    errored: errored || hasError,
    bc: isFocused ? "primary" : undefined,
    ...viewVariantProps,
  });

  const textTranslateShared = useSharedValue(baseLabelAnimatedStyle);
  const labelAnimatedStyle = useAnimatedStyle(() => textTranslateShared.value);

  const _handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (!editable || disabled) {
      return false;
    }

    focusProps.onFocus();
    rest?.onFocus?.(e);

    textTranslateShared.value = withTiming(
      {
        top: 7,
        fontSize: 12,
      },
      {
        duration: 125,
        easing: Easing.linear,
      }
    );
  };

  const _handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    focusProps.onBlur();
    rest?.onBlur?.(e);

    if (!e.nativeEvent.text) {
      textTranslateShared.value = withTiming(baseLabelAnimatedStyle, {
        duration: 125,
        easing: Easing.linear,
      });
    }
  };

  const _handleChangeText = (text: string) => {
    rest?.onChangeText?.(text);
  };

  const handleOnKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    rest?.onKeyPress?.(e);

    if (e.nativeEvent.key === "Escape") {
      _inputRef.current?.blur();
    }
  };

  return (
    <Box
      h={inputRootHeight}
      style={styleProps}
      className={variantStyles.base({ className })}
    >
      {leftSection && <Box mr="md">{leftSection}</Box>}
      <Box h100 f={1}>
        <AnimatedText
          className={variantStyles.label()}
          style={{
            lineHeight: LINE_HEIGHT,
            ...labelAnimatedStyle,
          }}
          numberOfLines={1}
          accessibilityLabel="label"
        >
          {label}
        </AnimatedText>
        <TextInput
          ref={_inputRef}
          className={variantStyles.input()}
          style={{
            paddingTop: 28,
            paddingBottom: 10,
            fontSize: 16,
          }}
          editable={editable && !disabled}
          focusable={editable && !disabled}
          pointerEvents={editable && !disabled ? "auto" : "none"}
          {...rest}
          onFocus={_handleFocus}
          onBlur={_handleBlur}
          onChangeText={_handleChangeText}
          onKeyPress={handleOnKeyPress}
        />
      </Box>
      {rightSection && <Box ml="md">{rightSection}</Box>}
    </Box>
  );
};

export default Input;
