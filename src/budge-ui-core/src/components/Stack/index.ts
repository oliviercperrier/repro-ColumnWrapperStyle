import Stack from "./Stack";
import { TStackComponent } from "./Stack.types";
import StackHorizontal from "./StackHorizontal";

const StackTemp: any = Stack;

StackTemp.Horizontal = StackHorizontal;

if (process.env.NODE_ENV !== "production") {
  StackTemp.displayName = "Stack";
  StackTemp.Horizontal.displayName = "Stack.Horizontal";
}

const StackMain = StackTemp as TStackComponent;

export * from "./Stack.types";
export { StackMain as Stack };
