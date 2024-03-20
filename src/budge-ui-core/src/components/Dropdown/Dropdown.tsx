import React from "react";
import { useScreenSize } from "@budgeinc/budge-ui-hooks";
import { TDropdownProps } from "./Dropdown.types";
import DropdownMobile from "./Dropdown.mobile";
import DropdownDefault from "./Dropdown.default";

const Dropdown = (props: TDropdownProps) => {
  const { isSmallerThanOrEqual } = useScreenSize();

  if (isSmallerThanOrEqual("sm")) {
    return <DropdownMobile {...props} />;
  }

  return <DropdownDefault {...props} />;
};

export default Dropdown;
