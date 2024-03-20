import { TColor, TSize } from "@budgeinc/budge-ui-styling";
import React, { forwardRef, ReactNode } from "react";
import { View } from "react-native";
import { ChevronRightIcon, RoundIcon } from "../Icons";
import { Pressable, TPressableProps } from "../Pressable";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { Spinner } from "../Loader";
import { ReactChild } from "../../utils/types";
import { sizes } from "./Button.styles";

export type TButtonBoxProps = TPressableProps & {
  loading?: boolean;
  iconColor?: TColor;
  iconSize?: TSize;
  icon?: ReactNode;
  children: ReactChild;
};

const ButtonBox = forwardRef<View, TButtonBoxProps>(
  (
    {
      children,
      loading = false,
      disabled = false,
      iconColor = "primary",
      icon,
      iconSize = "xs",
      bg,
      h,
      p = "lg",
      px,
      py,
      ...rest
    },
    ref
  ) => (
    <Pressable ref={ref} disabled={disabled || loading} {...rest}>
      <Stack.Horizontal
        justifyContent="space-between"
        alignItems="center"
        px={px}
        py={py}
        p={p}
        h={h}
        bg={bg}
        sx={theme => ({
          backgroundColor: theme.palette.background.default,
          borderRadius: theme.fn.radius(theme.defaultRadius),
        })}
      >
        <Stack.Horizontal alignItems="center" f={1}>
          {typeof children === "string" ? (
            <Text numberOfLines={1} f={1}>
              {children}
            </Text>
          ) : (
            children
          )}
        </Stack.Horizontal>
        {loading ? (
          <Spinner size={sizes[iconSize].height} color={iconColor} />
        ) : (
          icon || <RoundIcon size={iconSize} icon={ChevronRightIcon} color={iconColor} />
        )}
      </Stack.Horizontal>
    </Pressable>
  )
);

export default ButtonBox;
