import React, { PropsWithChildren, useMemo, useContext } from "react";
import DEFAULT_THEME from "../theme/defaultTheme";
import { TTheme } from "../theme/types/Theme";
import { filterProps } from "../utils/filterProps";
import { mergeTheme } from "../utils/mergeTheme";

export interface ConfigContextProps {
  theme: TTheme;
}

export interface ConfigProviderProps {
  theme?: TTheme;
}

export const Config: ConfigContextProps = {
  theme: DEFAULT_THEME,
};

export const ConfigContext = React.createContext<ConfigContextProps>(Config);

export const ConfigConsumer = ConfigContext.Consumer;

export const useConfig = () => useContext(ConfigContext);

export const useTheme = () => useConfig().theme;

export const useComponentDefaultProps = <T extends Record<string, any>, U extends Partial<T> = {}>(
  component: string,
  defaultProps: U,
  props: T
): T & {
  [Key in Extract<keyof T, keyof U>]-?: U[Key] | NonNullable<T[Key]>;
} => {
  const theme = useTheme();
  const contextPropsPayload = theme.components[component]?.defaultProps;
  const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;

  return { ...defaultProps, ...contextProps, ...filterProps(props) };
};

export const ConfigProvider = ({
  theme = DEFAULT_THEME,
  ...props
}: PropsWithChildren<ConfigProviderProps>): JSX.Element | null => {
  const mergedTheme = useMemo(() => mergeTheme(theme, DEFAULT_THEME), [theme, DEFAULT_THEME]);

  const memoedContext = useMemo<ConfigContextProps>(
    () =>
      ({
        theme: mergedTheme,
        ...props,
      } as any),
    [mergedTheme, props]
  );

  if (!props.children) {
    return null;
  }

  return <ConfigContext.Provider value={memoedContext}>{props.children}</ConfigContext.Provider>;
};
