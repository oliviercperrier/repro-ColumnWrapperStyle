import React from "react";
import { useScreenSize } from "@budgeinc/budge-ui-hooks";
import SelectMobile from "./Select.mobile";
import SelectDefault from "./Select.default";
import { TSelectProps } from "./Select.types";

const Select = (props: TSelectProps) => {
  const { isSmallerThanOrEqual } = useScreenSize();

  if (isSmallerThanOrEqual("sm")) {
    return <SelectMobile {...props} />;
  }

  return <SelectDefault {...props} />;
};

export default Select;
