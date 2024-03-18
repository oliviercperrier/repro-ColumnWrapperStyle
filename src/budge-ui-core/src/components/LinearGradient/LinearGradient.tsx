import {
  LinearGradient as ExpoLinearGradient,
  LinearGradientProps as ExpoLinearGradientProps,
} from "expo-linear-gradient";
import React, { PropsWithChildren } from "react";
import {
  TColorToken,
  TDefaultViewProps,
  TViewVariantProps,
  extractViewVariantProps,
  useBudgeTheme,
  viewVariant,
} from "@budgeinc/budge-ui-styling";
import { twMerge } from "tailwind-merge";

export type TLinearGradientProps = TDefaultViewProps<
  Omit<ExpoLinearGradientProps, "colors"> &
    TViewVariantProps & {
      colors: TColorToken[];
    }
>;

const LinearGradient = ({ className, children, colors, ...gradientProps }: PropsWithChildren<TLinearGradientProps>) => {
  const theme = useBudgeTheme();
  const { styleProps, viewVariantProps, rest } = extractViewVariantProps(gradientProps);

  return (
    <ExpoLinearGradient
      style={styleProps}
      className={twMerge(className, viewVariant(viewVariantProps))}
      colors={colors.map(colorToken => theme.fn.themeColor({ colorToken }))}
      {...rest}
    >
      {children}
    </ExpoLinearGradient>
  );
};

export default LinearGradient;
