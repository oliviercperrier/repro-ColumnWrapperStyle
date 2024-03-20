import { ReactNode } from "react";

export type TConditonalWrapperProps = {
  condition: boolean;
  wrapper: (children: ReactNode) => JSX.Element;
  children: any;
};

const ConditionalWrapper = ({ condition, wrapper, children }: TConditonalWrapperProps) =>
  condition ? wrapper(children) : children;

export default ConditionalWrapper;
