import React, { ForwardRefExoticComponent, MemoExoticComponent, forwardRef, memo } from "react";
import {
  TDefaultViewProps,
  extractViewVariantProps
} from "@budgeinc/budge-ui-styling"
import { Svg, SvgProps } from "react-native-svg";
import { VariantProps } from "tailwind-variants";
import { svgVariant } from "./SvgIcon.variants";

export type TSvgIconProps = TDefaultViewProps<VariantProps<typeof svgVariant>> &
  Pick<SvgProps, "viewBox" | "title">;

export type TMemoRefIconProps = MemoExoticComponent<ForwardRefExoticComponent<TSvgIconProps>>;

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

export default memo(SvgIcon);
