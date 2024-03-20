import React, { forwardRef, useState } from "react";
import { composeEventHandlers, extractRadiusStyles, useExtractSx } from "@budgeinc/budge-ui-styling";
import { StyleSheet, View } from "react-native";
import { BUTTON_SIZES, useButtonStyles } from "../Button/Button.styles";
import Pressable from "../Pressable/Pressable";
import { TActionIconProps } from "./ActionIcon.types";
import { LoadingOverlay } from "../LoadingOverlay";
import { Box } from "../Box";

const ActionIcon = forwardRef<View, TActionIconProps>(
  (
    {
      icon: Icon,
      size = "md",
      hoverColor,
      color = "dark",
      iconColor,
      iconSize,
      variant = "default",
      radius = "default",
      disabled = false,
      loading = false,
      withDisabledOpacity = true,
      withHoverEffect = true,
      style,
      sx,
      alignSelf,
      onHoverIn,
      onHoverOut,
      ...pressableProps
    },
    ref
  ) => {
    const [isHovered, setHovered] = useState(false);

    const { baseStyle, contentColor } = useButtonStyles({
      variant,
      color,
      hoverColor,
      size,
      isHovered: withHoverEffect && isHovered,
      withLeftIcon: false,
      withRightIcon: false,
    });

    const { borderWidth, backgroundColor, borderColor } = baseStyle;
    const finalIconSize =
      iconSize || (typeof baseStyle.minHeight === "number" ? baseStyle.minHeight : BUTTON_SIZES[size]) * 0.6;
    const buttonRadius = radius === "xxl" ? 100 : radius;
    const borderRadiusStyles = extractRadiusStyles({ style, sx });

    return (
      <Pressable
        ref={ref}
        style={[{ alignSelf: alignSelf || "flex-start" }]}
        disabled={disabled || loading}
        onHoverIn={composeEventHandlers(onHoverIn, () => setHovered(!(disabled || loading)))}
        onHoverOut={composeEventHandlers(onHoverOut, () => setHovered(false))}
        alignItems="center"
        justifyContent="center"
        fdirection="row"
        gap="xs"
        radius={buttonRadius}
        bw={borderWidth}
        bc={borderColor}
        bg={backgroundColor}
        h={baseStyle.minHeight}
        w={baseStyle.minHeight}
        sx={[StyleSheet.flatten(style), ...useExtractSx(sx)]}
        withPressEffect
        {...pressableProps}
      >
        {!loading && <Icon color={iconColor || contentColor} size={finalIconSize} />}

        {disabled && withDisabledOpacity && !loading && (
          <Box pos="absolute" left={-1} right={-1} bottom={-1} top={-1}>
            <Box
              opacity={0.65}
              w="100%"
              h="100%"
              pos="absolute"
              bg="white"
              radius={radius}
              style={borderRadiusStyles}
            />
          </Box>
        )}

        {loading && (
          <LoadingOverlay
            radius={radius}
            spinnerSize={finalIconSize}
            spinnerColor={contentColor}
            style={borderRadiusStyles}
            left={-1}
            right={-1}
            bottom={-1}
            top={-1}
          />
        )}
      </Pressable>
    );
  }
);

export default ActionIcon;
