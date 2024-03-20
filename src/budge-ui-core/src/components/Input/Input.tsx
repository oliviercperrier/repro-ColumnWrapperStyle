import { TColor, useComponentDefaultProps, useExtractSx, useTheme } from "@budgeinc/budge-ui-styling";
import React, { forwardRef, memo, ReactNode, RefObject, useEffect, useRef, useState } from "react";
import {
  Animated,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputKeyPressEventData,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Box, TBoxProps } from "../Box";
import { Dropdown } from "../Dropdown";
import useFormikField from "../Form/useFormikField";
import { InfoIcon } from "../Icons";
import { Pressable } from "../Pressable";
import { Text } from "../Text";
import { getValue, TInputVariant, useInputStyles } from "./Input.styles";

export type TInputOnKeyPress = (
  e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  inputValue: string | undefined,
  setInputValue: (value: string | undefined) => void
) => void;

export type TInputOnBlur = (
  e: NativeSyntheticEvent<TextInputFocusEventData>,
  inputValue: string | undefined,
  setInputValue: (value: string | undefined) => void
) => void;

export type TInputOnFocus = TInputOnBlur;

export type TBaseInputProps = TBoxProps & {
  inputRef?: RefObject<TextInput>;
  value?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  variant?: TInputVariant;
  label?: string;
  placeholder?: string;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  disabled?: boolean;
  multiline?: boolean;
  ignoreFormContext?: boolean;
  infoPopover?: {
    text: string;
    iconColor?: TColor;
    overlayMaxWidth?: number;
  };
  centered?: boolean;
  onBlur?: TInputOnBlur | undefined;
  onKeyPress?: TInputOnKeyPress | undefined;
  onFocus?: TInputOnFocus;
  onChangeText?: (text: string) => false | void;
  getDisplayValue?: (value: any) => any;
};

export type TInputProps = TBaseInputProps &
  Omit<TextInputProps, "onBlur" | "onFocus" | "onKeyPress" | "onChangeText" | "style">;

const Input = forwardRef<TextInput, TInputProps>((props, ref) => {
  const theme = useTheme();

  const {
    style,
    textStyle,
    label,
    placeholder,
    variant = "default",
    disabled = false,
    ignoreFormContext = false,
    centered = false,
    leftSection,
    rightSection,
    value,
    infoPopover,
    inputRef,
    sx,
    onBlur,
    onFocus,
    onChangeText,
    onKeyPress,
    getDisplayValue = (valueToDisplay: any) => valueToDisplay,
    ...rest
  } = useComponentDefaultProps("Input", {}, props);

  const localInputRef = inputRef || useRef<TextInput>(null);

  const { field, hasError, helpers } = useFormikField();

  const isTextarea = rest.multiline || false;
  const nbLines = rest.numberOfLines || 1;

  const { rootStyle, inputStyle, labelStyle, labelInputWrapper } = useInputStyles({
    hasError,
    disabled,
    variant,
    isTextarea,
    nbLines,
    hasLabel: !!label,
    centered,
  });

  const foundValue = ignoreFormContext ? value : getValue(field?.value, value);
  const inputValue = getDisplayValue(foundValue) || "";

  const position = useRef(new Animated.Value(inputValue ? 1 : 0));

  const [isFocused, setIsFocused] = useState(false);
  const [isFieldActive, setIsFieldActive] = useState(false);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);

  const [localValue, setLocalValue] = useState<any>(inputValue);

  useEffect(() => {
    if (!isFocused && localValue) {
      _handleFocus();
    }

    if (!localValue && !isFocused) {
      _handleBlur();
    }
  }, [localValue]);

  useEffect(() => {
    if (inputValue !== localValue) {
      setLocalValue(inputValue);
    }
  }, [inputValue]);

  const _handleFocus = () => {
    setIsFocused(true);
    if (!isFieldActive && !(disabled && !localValue)) {
      setIsFieldActive(true);
      Animated.timing(position.current, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const _handleBlur = () => {
    setIsFocused(false);
    if (isFieldActive && !localValue) {
      setIsFieldActive(false);
      Animated.timing(position.current, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
        delay: 100,
      }).start();
    }
  };

  const _returnAnimatedTitleStyles = () => ({
    top: position.current.interpolate({
      inputRange: [0, 2],
      outputRange: [20, 0],
    }),
    fontSize: position.current.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
  });

  const getPlaceHolderIfNeeded = (): Partial<TextInputProps> => ({
    placeholder: !isFocused && !!label ? "" : placeholder || undefined,
    placeholderTextColor: theme.palette.textColor.secondary,
  });

  const handleOnChangeText = (text: string) => {
    if (onChangeText?.(text) === false) {
      return;
    }

    setLocalValue(text);

    if (!ignoreFormContext) {
      helpers?.setValue(text);
    }
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    _handleBlur();

    // deliberately don't ignore this callback egardless of whether
    // ignoreFormContext is true or false to keep validation working
    if (field?.onBlur) {
      field.onBlur(field.name)(e);
    }

    onBlur?.(e, localValue, setLocalValue);
  };

  const handleOnKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (e.nativeEvent.key === "Escape") {
      localInputRef.current?.blur();
    }

    onKeyPress?.(e, localValue, setLocalValue);
  };

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    _handleFocus();
    onFocus?.(e, localValue, setLocalValue);
  };

  return (
    <Box ref={ref} sx={[rootStyle, StyleSheet.flatten(style as StyleProp<ViewStyle>), ...useExtractSx(sx)]} {...rest}>
      <Box shouldRender={!!leftSection} mr="md">
        {leftSection}
      </Box>
      <Box style={labelInputWrapper}>
        <Animated.Text style={[labelStyle, _returnAnimatedTitleStyles()]} numberOfLines={1} accessibilityLabel={label}>
          {label}
        </Animated.Text>
        <TextInput
          ref={localInputRef}
          style={[inputStyle, textStyle]}
          editable={!disabled}
          pointerEvents={rest.editable === false || disabled ? "none" : "auto"}
          onChangeText={handleOnChangeText}
          onBlur={handleOnBlur}
          onKeyPress={handleOnKeyPress}
          onFocus={handleOnFocus}
          value={localValue ? localValue.toString() : ""}
          {...getPlaceHolderIfNeeded()}
          {...rest}
        />
      </Box>
      <Box shouldRender={!!rightSection} ml="md">
        {rightSection}
      </Box>
      {infoPopover && (
        <Dropdown
          visible={isInfoModalOpen}
          onVisibleChange={setInfoModalOpen}
          placement="bottom right"
          anchor={
            <Pressable ml="md" onPress={() => setInfoModalOpen(true)}>
              <InfoIcon color={infoPopover.iconColor || "gray"} />
            </Pressable>
          }
          overlayMaxWidth={infoPopover.overlayMaxWidth || 250}
          overlay={
            <Box p="lg">
              <Text>{infoPopover.text}</Text>
            </Box>
          }
        />
      )}
    </Box>
  );
});

export default memo(Input);
