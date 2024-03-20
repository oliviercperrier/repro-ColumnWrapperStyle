
import React from "react";
import { View } from "react-native";
import MaintenancePage, { TMaintenancePageProps } from "./MaintenancePage";

type TMaintenancePagePropsKeys = (keyof TMaintenancePageProps)[];

const DefaultFields: TMaintenancePagePropsKeys = ["description"];

const MaintenancePageMeta: ComponentMeta<typeof MaintenancePage> = {
  title: "Misc/Pages/Maintenance Page",
  component: MaintenancePage,
  args: {
    description:
      "The Budge app is currently unavailable due to an ongoing maintenance. The Product & Engineering teams are working hard on making Budge even greater and we can't wait to show you. Please come back soon!",
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
  decorators: [(Story: any) => <View style={{ margin: 0, height: 800 }}>{Story()}</View>],
};

export default MaintenancePageMeta;

type MaintenancePageStory = ComponentStory<typeof MaintenancePage>;

export const Default: MaintenancePageStory = args => <MaintenancePage {...args} />;
