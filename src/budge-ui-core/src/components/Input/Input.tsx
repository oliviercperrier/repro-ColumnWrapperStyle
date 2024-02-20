import { TextInput, NativeSyntheticEvent, TextInputFocusEventData, TextInputKeyPressEventData } from "react-native";
import React, { useEffect, useRef } from "react";
import { Box } from "../Box";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Text } from "../Text";
import { useFocus } from "@budgeinc/budge-ui-hooks";
import { extractViewVariantProps } from "@budgeinc/budge-ui-styling";
import { inputVariant } from "./Input.variants";
import { TInputProps } from "./Input.types";

export const LINE_HEIGHT = 18;
export const INPUT_MARGIN_TOP = 30;
export const INPUT_MARGIN_BOTTOM = 11;

const bluredLabelStyle = {
  top: 19,
  fontSize: 16,
};

const focusedLabelStyle = {
  top: 9,
  fontSize: 12,
};

const AnimatedText = Animated.createAnimatedComponent(Text);

const Input = ({
  inputRef,
  className,
  children,
  label,
  leftSection,
  rightSection,
  variant,
  disabled = false,
  editable = true,
  errored = false,
  value,
  ...others
}: TInputProps) => {
  const hasError = false;
  const { isFocused, focusProps } = useFocus();
  const _inputRef = inputRef || useRef<TextInput>(null);

  const { styleProps, viewVariantProps, rest } = extractViewVariantProps(others);

  const isTextarea = rest?.multiline || false;
  const nbLines = rest?.numberOfLines || 1;
  const inputRootHeight = nbLines * LINE_HEIGHT + (isTextarea && !label ? 24 : INPUT_MARGIN_TOP + INPUT_MARGIN_BOTTOM);

  const variantStyles = inputVariant({
    variant,
    disabled,
    editable,
    focused: isFocused,
    errored: errored || hasError,
  });

  const focusSv = useSharedValue(value ? true : false);
  const labelAnimatedStyle = useAnimatedStyle(() => ({
    top: withTiming(focusSv.value ? focusedLabelStyle.top : bluredLabelStyle.top, {
      duration: 125,
      easing: Easing.linear,
    }),
    fontSize: withTiming(focusSv.value ? focusedLabelStyle.fontSize : bluredLabelStyle.fontSize, {
      duration: 125,
      easing: Easing.linear,
    }),
  }));

  useEffect(() => {
    // Focus animation with autoFocus dont work without this
    if (isFocused) {
      focusSv.value = true;
    }
  }, [isFocused]);

  const _handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (!editable || disabled) {
      return false;
    }

    focusProps.onFocus();
    rest?.onFocus?.(e);
  };

  const _handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    focusProps.onBlur();
    rest?.onBlur?.(e);

    if (!e.nativeEvent.text) {
      focusSv.value = false;
    }
  };

  const _handleChangeText = (text: string) => {
    rest?.onChangeText?.(text);
  };

  const handleOnKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    rest?.onKeyPress?.(e);

    if (e.nativeEvent.key === "Escape") {
      _inputRef.current?.blur();
    }
  };

  return (
    <Box h={inputRootHeight} style={styleProps} className={variantStyles.base({ className })} {...viewVariantProps}>
      {leftSection && <Box mr="md">{leftSection}</Box>}
      <Box f={1}>
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
          value={value}
          className={variantStyles.input()}
          style={{
            fontSize: 16,
            height: isTextarea ? nbLines * LINE_HEIGHT : undefined,
            ...(isTextarea
              ? {
                  marginTop: !!label ? INPUT_MARGIN_TOP : undefined,
                  marginBottom: !!label ? INPUT_MARGIN_BOTTOM : undefined,
                }
              : {
                  paddingTop: !!label ? INPUT_MARGIN_TOP : (inputRootHeight - LINE_HEIGHT) / 2,
                  paddingBottom: !!label ? INPUT_MARGIN_BOTTOM : (inputRootHeight - LINE_HEIGHT) / 2,
                }),
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
