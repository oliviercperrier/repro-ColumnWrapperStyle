import { ConfigProvider, ConfigProviderProps } from "@budgeinc/budge-ui-styling";
import React, { PropsWithChildren } from "react";
import { BPortalProvider } from "../Portal";
import { PortalHost } from "@gorhom/portal";

export type TBudgeUIProviderProps = PropsWithChildren<ConfigProviderProps>;

const BudgeUIProvider = ({ children, ...providerProps }: TBudgeUIProviderProps) => (
  <ConfigProvider {...providerProps}>
    <BPortalProvider>
      <UIProviderContentWrapper>{children}</UIProviderContentWrapper>
    </BPortalProvider>
  </ConfigProvider>
);

const UIProviderContentWrapper = ({ children }: any) => {
  return (
    <>
      {children}
      <PortalHost name="modals-provider" />
      <PortalHost name="toasts-provider" />
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
