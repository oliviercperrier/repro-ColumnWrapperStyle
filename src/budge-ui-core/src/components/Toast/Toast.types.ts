import { TColor } from "@budgeinc/budge-ui-styling";
import { ReactChild } from "../../utils/types";
import { TMemoRefIconProps } from "../Icons";

export type TToastTypes = "info" | "warning" | "success" | "error";

export type TToast = {
  id: number | string;
  color?: TColor;
  title?: string;
  message?: ((close: () => void) => ReactChild) | string;
  icon?: TMemoRefIconProps;
  duration?: number;
};

export type TExternalToast = Omit<TToast, "id" | "color" | "icon"> & {
  id?: number | string;
};

export interface TToastToDismiss {
  id: number | string;
  dismiss: boolean;
}
