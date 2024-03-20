import React from "react";
import { formatPercent } from "@budgeinc/budge-ui-utils";
import { TTagProps, Tag } from "../../Tag";
import { ArrowDownIcon, ArrowUpIcon } from "../../Icons";

export type TKpiVariationTagProps = Omit<TTagProps, "radius" | "color" | "iconPosition" | "icon" | "value"> & {
  variation: number;
};

const KpiVariationTag = ({ variation, ...rest }: TKpiVariationTagProps) => (
  <Tag
    radius="lg"
    color={variation < 0 ? "red" : variation === 0 ? "gray" : "green"}
    iconPosition="left"
    icon={variation < 0 ? ArrowDownIcon : variation > 0 ? ArrowUpIcon : undefined}
    value={formatPercent({
      value: Math.abs(variation),
      minFractionDigits: 0,
    })}
    {...rest}
  />
);

export default KpiVariationTag;
