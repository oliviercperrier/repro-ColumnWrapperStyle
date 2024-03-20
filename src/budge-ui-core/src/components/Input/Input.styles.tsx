import { useTheme } from "@budgeinc/budge-ui-styling";
import { Platform, TextStyle, ViewStyle } from "react-native";

export const LINE_HEIGHT = 18;
export const INPUT_MARGIN_TOP = 30;
export const INPUT_MARGIN_BOTTOM = 11;

export type TInputVariant = "default" | "light";

interface IInputStyleParams {
  variant: TInputVariant;
  hasError: boolean;
  disabled: boolean;
  isTextarea: boolean;
  nbLines: number;
  hasLabel: boolean;
  centered: boolean;
}

export const getValue = (formContextValue: any, value: any) => {
  let contextValueEmpty = formContextValue === undefined;

  if (typeof formContextValue === "string") {
    contextValueEmpty = !formContextValue;
  }

  return !contextValueEmpty ? formContextValue : value;
};

export const useInputStyles = ({
  variant,
  hasError,
  disabled,
  isTextarea,
  nbLines,
  hasLabel,
  centered,
}: IInputStyleParams) => {
  const theme = useTheme();

  let backgroundColor = theme.palette.background.default;
  let textColor = theme.palette.textColor.primary;
  let labelColor = theme.palette.textColor.secondary;
  let borderColor = "transparent";

  if (variant === "light") {
    backgroundColor = theme.white;
  }

  if (hasError) {
    const redVariant = theme.fn.variant({ color: "red", variant: "light" });
    backgroundColor = redVariant.background;
    textColor = redVariant.color;
    labelColor = redVariant.color;
    borderColor = redVariant.color;
  }

  if (disabled) {
    backgroundColor = theme.palette.background.disabled;
    textColor = theme.palette.textColor.disabled;
    labelColor = textColor;
  }

  const inputRootHeight =
    nbLines * LINE_HEIGHT + (isTextarea && !hasLabel ? 24 : INPUT_MARGIN_TOP + INPUT_MARGIN_BOTTOM);

  return {
    rootStyle: {
      width: "100%",
      borderRadius: theme.fn.radius(theme.defaultRadius),
      borderColor,
      borderWidth: 1.5,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 12,
      backgroundColor,
      height: inputRootHeight,
      // @ts-ignore
      cursor: disabled ? "not-allowed" : undefined,
    } as ViewStyle,

    labelInputWrapper: {
      width: "100%",
      flexShrink: 1,
      position: "relative",
      alignItems: centered ? "center" : undefined,
    } as ViewStyle,

    labelStyle: {
      color: labelColor,
      position: "absolute",
      fontSize: 16,
      lineHeight: LINE_HEIGHT,
    } as TextStyle,

    inputStyle: {
      width: "100%",
      fontSize: 16,
      lineHeight: LINE_HEIGHT,
      zIndex: 2,
      color: textColor,
      textAlignVertical: "top",
      height: isTextarea ? nbLines * LINE_HEIGHT : undefined,
      textAlign: centered ? "center" : undefined,

      ...(Platform.OS === "web" &&
        ({
          outlineStyle: "none",
        } as any)),

      ...(isTextarea
        ? {
            marginTop: hasLabel ? INPUT_MARGIN_TOP : undefined,
            marginBottom: hasLabel ? INPUT_MARGIN_BOTTOM : undefined,
          }
        : {
            paddingTop: hasLabel ? INPUT_MARGIN_TOP : (inputRootHeight - LINE_HEIGHT) / 2,
            paddingBottom: hasLabel ? INPUT_MARGIN_BOTTOM : (inputRootHeight - LINE_HEIGHT) / 2,
          }),
    } as TextStyle,
  };
};
