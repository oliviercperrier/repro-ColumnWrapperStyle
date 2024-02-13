import { css } from "@emotion/native";
import { useTheme } from "../provider/ConfigProvider";
import { getSystemStyles, getTextSystemStyles } from "../system/getSystemStyles";
import { TTheme } from "../theme/types/Theme";
import { Sx } from "../types/DefaultProps";
import { TStyleSystemProps, TTypographyStyleSystemProps } from "../types/StyleSystem";

const extractSx = (sx: Sx, theme: TTheme) => {
  return typeof sx === "function" ? sx(theme) : sx;
};

export const useExtractSx = (sx: Sx | Sx[] | undefined) => {
  const theme = useTheme();

  if (!sx) {
    return []
  }

  if (Array.isArray(sx)) {
    return [...sx.map(partial => css(extractSx(partial, theme)))];
  }

  return [css(extractSx(sx, theme))];
};

export const useSx = (sx: Sx | Sx[], systemProps: TStyleSystemProps) => {
  const theme = useTheme();

  if (Array.isArray(sx)) {
    return [...sx.map(partial => css(extractSx(partial, theme))), css(getSystemStyles(systemProps, theme))];
  }

  return [css(extractSx(sx, theme)), css(getSystemStyles(systemProps, theme))];
};

export const useTextSx = (sx: Sx | Sx[], systemProps: TTypographyStyleSystemProps) => {
  const theme = useTheme();

  if (Array.isArray(sx)) {
    return [...sx.map(partial => css(extractSx(partial, theme))), css(getTextSystemStyles(systemProps, theme))];
  }

  return [css(extractSx(sx, theme)), css(getTextSystemStyles(systemProps, theme))];
};
