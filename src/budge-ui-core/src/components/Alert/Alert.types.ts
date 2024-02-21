import { TMemoRefIconProps } from "../SvgIcon";
import { TBoxProps } from "../Box";
import { VariantProps } from "tailwind-variants";
import { alertVariant } from "./Alert.variants";

export type TAlertProps = TBoxProps & Omit<VariantProps<typeof alertVariant>, "disabled"> & {
  title?: string;
  icon?: TMemoRefIconProps;
  onClose?: () => void;
};
