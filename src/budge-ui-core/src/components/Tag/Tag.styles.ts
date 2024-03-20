import {
  TColor,
  TNumberSize,
  TSize,
  TTheme,
  TTypographyVariant,
  VariantInput,
  VariantOutput,
  useTheme,
} from "@budgeinc/budge-ui-styling";
import { TextStyle, ViewStyle } from "react-native";
import { ReactNode } from "react";
import { DeleteIcon, EditIcon, MoreDotsCircledIcon, SuccessIcon, TMemoRefIconProps } from "../Icons";

export type TTagColor = TColor | "default";

export type TIconPosition = "left" | "right";

interface TagStyleParams {
  size: TSize;
  radius: TNumberSize;
  color?: TTagColor;
  value: ReactNode;
  iconPosition: TIconPosition;
  customIcon: TMemoRefIconProps | undefined | null;
  variant: VariantInput["variant"];
  closable: boolean
}

interface IGetSizeStyles {
  size: TSize;
  withIcon: boolean;
  iconPosition: TIconPosition;
}

interface IGetValueConfig {
  color?: TTagColor;
  value: ReactNode;
  theme: TTheme;
  customIcon: TMemoRefIconProps | undefined | null;
  variant: VariantInput["variant"];
}

interface IValueConfig extends VariantOutput {
  icon: TMemoRefIconProps | null | undefined;
}

interface TagSizes {
  height: number;
  paddingLeft: number;
  paddingRight: number;
  typographyVariant: TTypographyVariant;
  iconSize: number;
}

export const sizes: Record<TSize, TagSizes> = {
  xs: { height: 20, paddingLeft: 6, paddingRight: 6, iconSize: 14, typographyVariant: "bodySmall" },
  sm: { height: 24, paddingLeft: 8, paddingRight: 8, iconSize: 16, typographyVariant: "bodyDefault" },
  md: { height: 26, paddingLeft: 10, paddingRight: 10, iconSize: 18, typographyVariant: "bodyMedium" },
  lg: { height: 28, paddingLeft: 12, paddingRight: 12, iconSize: 18, typographyVariant: "bodyLarge" },
  xl: { height: 36, paddingLeft: 14, paddingRight: 14, iconSize: 24, typographyVariant: "titleH3" },
  xxl: { height: 48, paddingLeft: 18, paddingRight: 18, iconSize: 32, typographyVariant: "titleH2" },
};

const getSizeStyles = ({ size, withIcon, iconPosition }: IGetSizeStyles) => {
  const _sizes = sizes[size];

  return {
    ..._sizes,
    paddingLeft: withIcon && iconPosition === "left" ? _sizes.paddingLeft / 1.5 : _sizes.paddingLeft,
    paddingRight: withIcon && iconPosition === "right" ? _sizes.paddingRight / 1.5 : _sizes.paddingRight,
    typographyVariant: _sizes.typographyVariant,
  };
};

const getSuccessConfig = (theme: TTheme, variant: VariantInput["variant"]): IValueConfig => ({
  ...theme.fn.variant({ variant, color: "green" }),
  icon: SuccessIcon,
});

const getErrorConfig = (theme: TTheme, variant: VariantInput["variant"]): IValueConfig => ({
  ...theme.fn.variant({ variant, color: "red" }),
  icon: DeleteIcon,
});

export const getValueConfig = ({ color, value, theme, variant, customIcon }: IGetValueConfig): IValueConfig => {
  let currentColor: TColor | undefined = color === "default" ? "gray.5" : color;

  if (currentColor) {
    return {
      ...theme.fn.variant({ variant, color: currentColor, primaryFallback: false }),
      icon: customIcon,
    };
  }

  const defaultConfig = {
    icon: null,
    ...theme.fn.variant({ variant, color: "gray" }),
  };

  if (typeof value !== "string") return defaultConfig;

  switch (value.toLowerCase()) {
    case "active":
    case "enabled":
    case "completed":
    case "processed":
      return getSuccessConfig(theme, variant);
    case "hold":
      return {
        ...theme.fn.variant({ variant, color: "yellow" }),
        icon: MoreDotsCircledIcon,
      };
    case "partial_completed":
      return {
        ...theme.fn.variant({ variant, color: "yellow" }),
        icon: SuccessIcon,
      };
    case "disabled":
    case "incomplete":
    case "expired":
    case "inactive":
      return getErrorConfig(theme, variant);
    case "pending":
    case "scheduled":
    case "submitted":
    case "imported":
      return {
        ...theme.fn.variant({ variant, color: "blue" }),
        icon: MoreDotsCircledIcon,
      };
    case "draft":
      return {
        ...theme.fn.variant({ variant, color: "yellow" }),
        icon: EditIcon,
      };
    default:
      return defaultConfig;
  }
};

export const useStyles = ({ color, value, size, variant, radius, iconPosition, customIcon, closable }: TagStyleParams) => {
  const theme = useTheme();

  const valueColorConfig = getValueConfig({ color, value, variant, theme, customIcon });
  const textColor = variant === "filled" ? theme.white : valueColorConfig.color;

  const { typographyVariant, iconSize, ...tagStyle } = getSizeStyles({
    size,
    withIcon: !!valueColorConfig.icon || !!closable,
    iconPosition,
  });

  return {
    rootStyle: {
      ...tagStyle,
      borderWidth: 1,
      maxWidth: "100%",
      alignItems: "center",
      borderColor: valueColorConfig.border,
      backgroundColor: valueColorConfig.background,
      borderRadius: theme.fn.radius(radius),
      zIndex: 2
    } as ViewStyle,
    textStyle: {
      color: textColor,
    } as TextStyle,
    icon: {
      color: textColor,
      size: iconSize,
      component: customIcon || valueColorConfig.icon,
    },
    text: {
      variant: typographyVariant,
    },
  };
};
