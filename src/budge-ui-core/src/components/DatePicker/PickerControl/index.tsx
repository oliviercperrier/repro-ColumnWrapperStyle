import { View } from "react-native";
import React, { ReactNode, forwardRef } from "react";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { Button } from "../../Button";
import { TButtonProps } from "../../Button/Button.types";

export type TPickerControlSettings = {
  clickable?: boolean;
};

export type TPickerControlProps = Omit<TButtonProps, "title"> &
  TPickerControlSettings & {
    /**
     * Using a Component here will ignore all predefined text color styling
     */
    title?: ReactNode;
    selected?: boolean;
    highlighted?: boolean;
  };

const PickerControl = forwardRef<View, TPickerControlProps>((props, ref) => {
  const {
    selected = false,
    highlighted = false,
    variant = "ghost",
    hoverColor = "gray.0",
    pl = 0,
    pr = 0,
    disabled = false,
    clickable = true,
    title,
    ...others
  } = useComponentDefaultProps("PickerControl", {}, props);

  const highlightSelectedColor = selected ? "primary" : highlighted ? "primary.3" : null;

  return (
    <Button
      ref={ref}
      title={title as any}
      variant={selected ? "filled" : "white"}
      color={selected && highlightSelectedColor ? highlightSelectedColor : "dark"}
      pl={pl}
      pr={pr}
      disabled={disabled}
      hoverColor={clickable ? highlightSelectedColor || hoverColor : undefined}
      {...others}
    />
  );
});

export default PickerControl;
