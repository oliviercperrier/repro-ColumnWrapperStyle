import React from "react";
import { Animated } from "react-native";

import {useLazyRef} from "../useLazyRef";

export const useAnimatedValue = (initialValue: number) => {
  const { current } = useLazyRef(() => new Animated.Value(initialValue));

  return current;
}
