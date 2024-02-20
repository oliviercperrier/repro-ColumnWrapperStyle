import Switch from "./Switch";
import { TSwitchComponent } from "./Switch.types";
//import SwitchConfirm from "./Switch.Confirm";

const SwitchTemp: any = Switch;

//SwitchTemp.Confirm = SwitchConfirm;

if (process.env.NODE_ENV !== "production") {
  SwitchTemp.displayName = "Switch";
  //SwitchTemp.Confirm.displayName = "Switch.Confirm";
}

const SwitchMain = SwitchTemp as TSwitchComponent;

export * from "./Switch.types";
export { SwitchMain as Switch };
