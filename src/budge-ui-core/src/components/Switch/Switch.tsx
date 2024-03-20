import React, { forwardRef, memo } from "react";
import { useComponentDefaultProps, useExtractSx } from "@budgeinc/budge-ui-styling";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Stack } from "../Stack";
import { Box, MotifiedBox } from "../Box";
import { Pressable } from "../Pressable";
import { Text } from "../Text";
import { useStyles } from "./Switch.styles";
import { useFormikField } from "../Form";
import { TSwitchProps } from "./Switch.types";

const Switch = forwardRef<View, TSwitchProps>((props, ref) => {
  const { field, helpers } = useFormikField();
  const {
    label,
    sx,
    style,
    size = "md",
    color = "primary",
    disabled = false,
    checked = false,
    onValueChange,
    ...rest
  } = useComponentDefaultProps("Switch", {}, props);
  const isChecked = checked || field?.value;
  const { rootStyle, switchStyle, handleStyle, translateX, textColor } = useStyles({
    size,
    color,
    disabled,
    isChecked,
  });

  const handlePress = () => {
    const newValue = !isChecked;

    if (helpers?.setValue) {
      helpers.setValue(newValue);
    }

    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <Stack.Horizontal ref={ref} sx={[rootStyle, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)]} {...rest}>
      <Pressable onPress={handlePress} disabled={disabled}>
        <Box style={switchStyle}>
          <MotifiedBox
            from={{
              translateX: isChecked ? translateX : 0,
            }}
            animate={{
              translateX: isChecked ? translateX : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 100,
            }}
            style={handleStyle}
          />
        </Box>
      </Pressable>
      {label && (
        <Text color={textColor} fshrink={1}>
          {label}
        </Text>
      )}
    </Stack.Horizontal>
  );
});

export default memo(Switch);
