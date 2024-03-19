import { View } from "react-native";
import React, { forwardRef, useCallback } from "react";
import { TSwitchProps } from "./Switch.types";
import { Box } from "../Box";
import { switchVariant } from "./Switch.variants";
import { Pressable } from "../Pressable";

const Switch = forwardRef<View, TSwitchProps>(({ checked, size, disabled, onChange, ...others }, ref) => {
  const variantStyles = switchVariant({
    checked,
    size,
    disabled,
  });

  const handleChange = () => {
    onChange?.(!checked)
  };

  return (
    <Pressable
      ref={ref}
      onPress={handleChange}
      className={variantStyles.base()}
      disabled={disabled}
      {...others}
    >
      <Box className={variantStyles.thumb()}></Box>
    </Pressable>
  );
});

export default Switch;
