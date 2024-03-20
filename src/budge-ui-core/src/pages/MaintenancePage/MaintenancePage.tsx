import React, { forwardRef } from "react";
import { Text } from "../../components/Text";
import { Logo } from "../../components/Logo";
import { Stack } from "../../components/Stack";
import { View } from "react-native";
import { i18n } from "@budgeinc/budge-ui-utils";

export type TMaintenancePageCode = 404 | 500;

export type TMaintenancePageProps = {
  title?: string;
  description: string;
};

export interface MaintenanceConfig {
  enabled: boolean;
  message: string;
}

const MaintenancePage = forwardRef<View, TMaintenancePageProps>(
  ({ title = i18n.t("ui-core.pages.maintenance.title"), description }, ref) => (
    <Stack ref={ref} p={24} spacing={100}>
      <Stack.Horizontal justifyContent="center">
        <Logo width={150} />
      </Stack.Horizontal>
      <Stack alignItems="center" spacing="xl">
        <Text variant="titleH1" fw="700" ta="center">
          {title}
        </Text>
        <Text color="textSecondary" variant="bodyMedium" ta="center" maw={600}>
          {description}
        </Text>
      </Stack>
    </Stack>
  )
);

export default MaintenancePage;
