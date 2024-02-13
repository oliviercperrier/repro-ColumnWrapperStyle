import { TShadow } from "../../types/Shadow";
import { TSize, TThemeBase } from "../../types";

export function shadow(theme: TThemeBase) {
  return (size: TSize): TShadow => theme.shadow[size];
}
