import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { i18n } from "@budgeinc/budge-ui-utils";
import React, { forwardRef, memo, ReactNode } from "react";
import { View } from "react-native";
import { Box } from "../Box";
import { Stack, TStackProps } from "../Stack";
import { Text } from "../Text";
import { useStyles } from "./Empty.styles";
import { ReactChild } from "../../utils/types";

export type TEmptyProps = TStackProps & {
  icon?: ReactNode;
  title?: ReactChild;
  description?: ReactChild;
  action?: ReactNode;
};

const Empty = forwardRef<View, TEmptyProps>((props, ref) => {
  const {
    icon,
    title = i18n.t("ui-core.empty.title"),
    description,
    action,
    ...rest
  } = useComponentDefaultProps("Empty", {}, props);
  const { rootStyle } = useStyles();

  return (
    <Stack ref={ref} sx={rootStyle} {...rest}>
      <Box shouldRender={!!icon}>{icon}</Box>
      <Stack spacing="sm" alignItems="center">
        {title ? typeof title === "string" ? <Text variant="bodyLarge">{title}</Text> : <>{title}</> : null}
        {description ? (
          typeof description === "string" ? (
            <Text color="textSecondary" variant="bodyDefault">
              {description}
            </Text>
          ) : (
            description
          )
        ) : null}
      </Stack>
      {action && <Box mt={24}>{action}</Box>}
    </Stack>
  );
});

export default memo(Empty);
