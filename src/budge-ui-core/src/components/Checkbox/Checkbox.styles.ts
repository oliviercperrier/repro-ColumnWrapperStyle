import { useTheme } from "@budgeinc/budge-ui-styling";

export interface CheckboxStylesParams {
  disabled: boolean;
  hasError: boolean;
  isChecked: boolean;
}

export const useStyles = ({ disabled, hasError, isChecked }: CheckboxStylesParams) => {
  const theme = useTheme();

  const defaultIconColor = theme.fn.primaryColor();
  const errorIconColor = theme.fn.themeColor({ color: "red" });

  let color;
  let iconColor = isChecked ? defaultIconColor : theme.palette.colors.gray[3];

  if (disabled) {
    color = theme.palette.textColor.disabled;
    iconColor = theme.palette.colors.gray[3];
  } else if (hasError) {
    iconColor = errorIconColor;
  }

  return {
    color,
    iconColor,
  };
};
