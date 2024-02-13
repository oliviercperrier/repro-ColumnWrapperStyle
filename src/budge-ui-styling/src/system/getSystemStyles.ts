import {
  TStyleSystemProps,
  TStyleSystemProp,
  TTypographyStyleSystemProp,
  TTypographyStyleSystemProps,
} from "../types/StyleSystem";
import { TTheme } from "../theme/types/Theme";
import {
  BASE_SYSTEM_PROPS,
  TYPOGRAPHY_SYSTEM_PROPS,
} from "../system/systemProps";
import { valueGetters } from "../system/getter";

export const getSystemStyles = (
  systemStyles: TStyleSystemProps,
  theme: TTheme,
  systemProps = BASE_SYSTEM_PROPS
) =>
  (Object.keys(systemProps) as TStyleSystemProp[]).reduce<Record<any, any>>(
    (acc, systemProp) => {
      if (
        systemProp in systemStyles &&
        systemStyles[systemProp] !== undefined
      ) {
        const value = systemStyles[systemProp];
        const parsedValue = valueGetters[systemProps[systemProp].type](
          value,
          theme
        );

        acc.push({ [systemProps[systemProp].property]: parsedValue });
      }

      return acc;
    },
    []
  );

export const getTextSystemStyles = (
  systemStyles: TTypographyStyleSystemProps,
  theme: TTheme,
  systemProps = TYPOGRAPHY_SYSTEM_PROPS
) =>
  (Object.keys(systemProps) as TTypographyStyleSystemProp[]).reduce<
    Record<any, any>
  >((acc, systemProp) => {
    if (systemProp in systemStyles && systemStyles[systemProp] !== undefined) {
      const value = systemStyles[systemProp];
      const parsedValue = valueGetters[systemProps[systemProp].type](
        value,
        theme
      );

      acc.push({ [systemProps[systemProp].property]: parsedValue });
    }

    return acc;
  }, []);
