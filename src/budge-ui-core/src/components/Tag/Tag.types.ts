import { TDefaultViewProps, TViewVariantProps } from "@budgeinc/budge-ui-styling";
import { TMemoRefIconProps } from "../SvgIcon";
import { VariantProps } from "tailwind-variants";
import { tagVariant } from "./Tag.variants";

export type TTagProps = TDefaultViewProps<VariantProps<typeof tagVariant> & TViewVariantProps> & {
  icon?: TMemoRefIconProps;
  value: string;
  closable?: boolean;
  onClose?: () => void;
};
