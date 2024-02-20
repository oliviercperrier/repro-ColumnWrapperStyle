import { View } from "react-native";
import React, { forwardRef, useCallback } from "react";
import { TSwitchProps } from "./Switch.types";
import { Box } from "../Box";
import { switchVariant } from "./Switch.variants";
import { Pressable } from "../Pressable";
import { extractViewVariantProps } from "@budgeinc/budge-ui-styling";

const Switch = forwardRef<View, TSwitchProps>(({ checked, size, disabled, onChange, ...others }, ref) => {
  const { styleProps, viewVariantProps, rest } = extractViewVariantProps(others);

  const variantStyles = switchVariant({
    checked,
    size,
    disabled,
    ...viewVariantProps,
  });

  const handleChange = useCallback(() => onChange?.(!checked), [checked]);

  return (
    <Pressable
      ref={ref}
      style={styleProps}
      onPress={handleChange}
      className={variantStyles.base()}
      disabled={disabled}
      {...rest}
    >
      <Box className={variantStyles.thumb()}></Box>
    </Pressable>
  );
});

export default Switch;
