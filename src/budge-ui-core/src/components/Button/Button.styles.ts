import { TColor, TSize, TSizes, useTheme, TTypographyVariant, VariantInput, TTheme } from "@budgeinc/budge-ui-styling";

export type TButtonVariant = VariantInput["variant"] | "defaultBordered";

interface IButtonStyleParams {
  variant: TButtonVariant;
  color: TColor;
  hoverColor?: TColor;
  size: TSize;
  isHovered: boolean;
  withLeftIcon: boolean;
  withRightIcon: boolean;
}

interface ButtonSizes {
  height: number;
  paddingLeft: number;
  paddingRight: number;
  typographyVariant: TTypographyVariant;
  iconSize: number;
}

interface IGetSizeStyles {
  size: TSize;
  withLeftIcon: boolean;
  withRightIcon: boolean;
}

interface IGetButtonVariantColors {
  theme: TTheme;
  variant: TButtonVariant;
  color: TColor;
}

export const BUTTON_SIZES: TSizes = {
  xs: 30,
  sm: 36,
  md: 42,
  lg: 50,
  xl: 60,
  xxl: 70,
};

export const sizes: Record<TSize, ButtonSizes> = {
  xs: { height: BUTTON_SIZES.xs, paddingLeft: 14, paddingRight: 14, iconSize: 14, typographyVariant: "bodyDefault" },
  sm: { height: BUTTON_SIZES.sm, paddingLeft: 18, paddingRight: 18, iconSize: 16, typographyVariant: "bodyDefault" },
  md: { height: BUTTON_SIZES.md, paddingLeft: 22, paddingRight: 22, iconSize: 18, typographyVariant: "bodyMedium" },
  lg: { height: BUTTON_SIZES.lg, paddingLeft: 26, paddingRight: 26, iconSize: 22, typographyVariant: "bodyLarge" },
  xl: { height: BUTTON_SIZES.xl, paddingLeft: 32, paddingRight: 32, iconSize: 24, typographyVariant: "titleH3" },
  xxl: { height: BUTTON_SIZES.xxl, paddingLeft: 48, paddingRight: 48, iconSize: 32, typographyVariant: "titleH2" },
};

const getSizeStyles = ({ size, withLeftIcon, withRightIcon }: IGetSizeStyles) => {
  const _sizes = sizes[size];

  return {
    ..._sizes,
    paddingLeft: withLeftIcon ? _sizes.paddingLeft / 1.2 : _sizes.paddingLeft,
    paddingRight: withRightIcon ? _sizes.paddingRight / 1.2 : _sizes.paddingRight,
    typographyVariant: _sizes.typographyVariant,
  };
};

export const getButtonVariantColors = ({ theme, variant, color }: IGetButtonVariantColors) =>
  variant === "default"
    ? {
        border: "transparent",
        background: theme.colorScheme === "dark" ? theme.palette.colors.dark[6] : theme.palette.colors.gray[2],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        hover: theme.colorScheme === "dark" ? theme.palette.colors.dark[5] : theme.palette.colors.gray[3],
      }
    : theme.fn.variant({ variant: variant === "defaultBordered" ? "default" : variant, color, primaryFallback: false });

export const useButtonStyles = ({
  variant,
  color,
  hoverColor,
  size,
  isHovered,
  withLeftIcon,
  withRightIcon,
}: IButtonStyleParams) => {
  const theme = useTheme();

  const variantColors = getButtonVariantColors({
    color,
    variant,
    theme,
  });

  const buttonSize = getSizeStyles({ size, withLeftIcon, withRightIcon });

  const buttonHoverColor = hoverColor
    ? theme.fn.variant({ variant: "filled", color: hoverColor, primaryFallback: true }).background
    : variantColors.hover;

  const buttonBgColor = isHovered ? buttonHoverColor : variantColors.background;

  return {
    baseStyle: {
      borderWidth: 1,
      backgroundColor: buttonBgColor,
      borderColor: variantColors.border,
      minHeight: buttonSize.height,
      height: buttonSize.height,
      paddingLeft: buttonSize.paddingLeft,
      paddingRight: buttonSize.paddingRight,
    },
    contentColor: variant === "filled" ? "white" : variantColors.color,
    typoVariant: buttonSize.typographyVariant,
    iconSize: buttonSize.iconSize,
  };
};
