import React from "react";
import { Text } from "../Text";
import { Stack, TStackProps } from "../Stack";
import { ReactChild } from "../../utils/types";

export type TDescriptionsItemProps = TStackProps & {
  label: ReactChild;
  children: ReactChild;
};

const DescriptionsItem = ({ children, label, ...rest }: TDescriptionsItemProps) => (
  <Stack.Horizontal spacing="xs" {...rest}>
    {typeof label === "string" ? <Text fw="600">{label}:</Text> : label}
    {typeof children === "string" ? <Text f={1}>{children}</Text> : children}
  </Stack.Horizontal>
);

export default DescriptionsItem;
