import React, { forwardRef } from "react";
import {
  TDefaultViewProps,
} from "@/budge-ui-styling/src/theme/BudgeBaseVariants";
import { Svg, SvgProps } from "react-native-svg";
import { VariantProps } from "tailwind-variants";
import { extractViewVariantProps } from "@/budge-ui-styling/src/utils/extractVariantProps";
import { svgVariant } from "./SvgIcon.variants";

export type TSvgIconProps = TDefaultViewProps<VariantProps<typeof svgVariant>> &
  Pick<SvgProps, "viewBox" | "title">;

const SvgIcon = forwardRef<Svg, TSvgIconProps>(
  ({ title, viewBox, className, children, color, size, ...others }, ref) => {
    const { styleProps, viewVariantProps, rest } =
      extractViewVariantProps(others);

    return (
      <Svg
        ref={ref}
        title={title}
        viewBox={viewBox}
        style={styleProps}
        className={svgVariant({
          ...viewVariantProps,
          color,
          size,
          className,
        })}
        children={children}
        {...rest}
      />
    );
  }
);

export default SvgIcon;
