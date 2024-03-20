import Checkbox from "./Checkbox";
import { TCheckboxComponent } from "./Checkbox.types";
import CheckboxConfirm from "./Checkbox.Confirm";
import CheckboxGroup from "./Checkbox.Group";

const CheckboxTemp: any = Checkbox;

CheckboxTemp.Confirm = CheckboxConfirm;
CheckboxTemp.Group = CheckboxGroup;

if (process.env.NODE_ENV !== "production") {
  CheckboxTemp.displayName = "Checkbox";
  CheckboxTemp.Confirm.displayName = "Checkbox.Confirm";
  CheckboxTemp.Group.displayName = "Checkbox.Group";
}

const CheckboxMain = CheckboxTemp as TCheckboxComponent;

export * from "./Checkbox.types";
export { CheckboxMain as Checkbox };
