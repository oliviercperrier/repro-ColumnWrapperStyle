/* eslint-disable no-console */
import { ConfigProvider, ConfigProviderProps, useTheme } from "@budgeinc/budge-ui-styling";
import React, { PropsWithChildren } from "react";
import { PortalHost } from "@gorhom/portal";
import { BPortalProvider } from "../Portal";

export type TBudgeUIProviderProps = PropsWithChildren<ConfigProviderProps>;

const BudgeUIProvider = ({ children, ...providerProps }: TBudgeUIProviderProps) => (
  <ConfigProvider {...providerProps}>
    <BPortalProvider>
      <UIProviderContentWrapper>{children}</UIProviderContentWrapper>
    </BPortalProvider>
  </ConfigProvider>
);

const UIProviderContentWrapper = ({ children }: any) => {
  const theme = useTheme();

  return (
    <>
      {children}
      <PortalHost name={theme.portalProviderNames.modals} />
      <PortalHost name={theme.portalProviderNames.toasts} />
    </>
  );
};

const nativeWarn = console.warn;
console.warn = (message: string) => {
  // Ignore some warnings
  if (message.includes("Formik context is undefined")) {
    return false;
  }
  nativeWarn(message);
};

export default BudgeUIProvider;
