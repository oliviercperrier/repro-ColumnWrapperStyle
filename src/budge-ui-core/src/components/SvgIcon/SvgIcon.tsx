import React, { ForwardRefExoticComponent, MemoExoticComponent, PropsWithChildren, forwardRef, memo } from "react";
import { TBaseCustomStyleProps, extractViewVariantProps } from "@budgeinc/budge-ui-styling";
import { Svg, SvgProps } from "react-native-svg";
import { VariantProps } from "tailwind-variants";
import { svgVariant } from "./SvgIcon.variants";

export type TSvgIconProps = Partial<TBaseCustomStyleProps> &
  VariantProps<typeof svgVariant> &
  Omit<SvgProps, "color" | "height" | "width">;

export type TMemoRefIconProps = MemoExoticComponent<ForwardRefExoticComponent<TSvgIconProps>>;

const SvgIcon = forwardRef<Svg, TSvgIconProps>(
  ({ title, viewBox, className, children, color, size, ...others }, ref) => {
    const { styleProps, viewVariantProps, rest } = extractViewVariantProps(others);

    return (
      <Svg
        ref={ref}
        title={title}
        viewBox={viewBox}
        style={styleProps}
        fill="dark"
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
