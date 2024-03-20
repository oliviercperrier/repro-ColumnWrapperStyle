import React, { forwardRef, useState } from "react";
import { composeEventHandlers, useExtractSx, extractRadiusStyles } from "@budgeinc/budge-ui-styling";
import { StyleSheet, View } from "react-native";
import { Box } from "../Box";
import { useButtonStyles } from "./Button.styles";
import { Text } from "../Text";
import Pressable from "../Pressable/Pressable";
import { TButtonProps } from "./Button.types";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";

const Button = forwardRef<View, TButtonProps>(
  (
    {
      title,
      titleTextProps,
      size = "md",
      hoverColor,
      color = "dark",
      variant = "default",
      radius = "default",
      disabled = false,
      loading = false,
      fullWidth = false,
      withDisabledOpacity = true,
      withHoverEffect = true,
      style,
      sx,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      alignSelf,
      onHoverIn,
      onHoverOut,
      extra,
      ...pressableProps
    },
    ref
  ) => {
    const [isHovered, setHovered] = useState(false);

    const { baseStyle, contentColor, iconSize, typoVariant } = useButtonStyles({
      variant,
      color,
      hoverColor,
      size,
      isHovered: withHoverEffect && isHovered,
      withLeftIcon: !!LeftIcon,
      withRightIcon: !!RightIcon,
    });

    const contentOpacity = loading || (disabled && withDisabledOpacity) ? 0.3 : undefined;
    const borderRadiusStyles = extractRadiusStyles({ style, sx });

    return (
      <Pressable
        ref={ref}
        style={[{ alignSelf }, fullWidth ? { width: "100%" } : undefined]}
        disabled={disabled || loading}
        onHoverIn={composeEventHandlers(onHoverIn, () => setHovered(!(disabled || loading)))}
        onHoverOut={composeEventHandlers(onHoverOut, () => setHovered(false))}
        alignItems="center"
        justifyContent="center"
        fdirection="row"
        gap="xs"
        radius={radius}
        sx={[baseStyle, StyleSheet.flatten(style), ...useExtractSx(sx)]}
        withPressEffect
        {...pressableProps}
      >
        <Box shouldRender={!!LeftIcon}>
          {LeftIcon && <LeftIcon color={contentColor} size={iconSize} opacity={contentOpacity} />}
        </Box>
        {!!title && (
          <Text
            opacity={contentOpacity}
            selectable={false}
            variant={typoVariant}
            numberOfLines={1}
            {...titleTextProps}
            color={titleTextProps?.color || contentColor}
          >
            {title}
          </Text>
        )}
        <Box shouldRender={!!RightIcon}>
          {RightIcon && <RightIcon color={contentColor} size={iconSize} opacity={contentOpacity} />}
        </Box>

        {extra || null}

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
            spinnerSize={iconSize}
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

export default Button;
