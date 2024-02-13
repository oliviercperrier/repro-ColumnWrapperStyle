import { TColor } from "./Colors";

export interface VariantInput {
  variant: "filled" | "light" | "outline" | "default" | "white" | "subtle" | "transparent";
  color: TColor;
  primaryFallback?: boolean;
}

export interface VariantOutput {
  border: string;
  background: string;
  color: string;
  hover?: string;
}
