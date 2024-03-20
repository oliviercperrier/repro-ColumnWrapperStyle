import Tabs from "./Tabs";
import TabsPane from "./Tabs.Pane";
import { TTabsComponent } from "./Tabs.types";

const TabsTemps: any = Tabs;

TabsTemps.Pane = TabsPane;

if (process.env.NODE_ENV !== "production") {
  TabsTemps.displayName = "Tabs";
  TabsTemps.Pane.displayName = "Tabs.Pane";
}

const TabsMain = TabsTemps as TTabsComponent;

export * from "./Tabs.types";
export * from "./TabsPane.context";
export { TabsMain as Tabs };
