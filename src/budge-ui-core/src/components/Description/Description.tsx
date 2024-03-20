import { DefaultProps } from "@budgeinc/budge-ui-styling";
import React, { ReactElement } from "react";
import { ViewStyle } from "react-native";
import { Box } from "../Box";

import DescriptionsItem, { TDescriptionsItemProps } from "./DescriptionItem";

export type TDescriptionProps = DefaultProps<ViewStyle> & {
  children: ReactElement<TDescriptionsItemProps> | ReactElement<TDescriptionsItemProps>[];
};

const Description = ({ children, style, ...rest }: TDescriptionProps) => (
  <Box style={style} {...rest}>
    {children}
  </Box>
);

Description.Item = DescriptionsItem;

export default Description;
