import { useState } from "react";

export const usePress = () => {
  const [isPressed, setPressed] = useState(false);
  return {
    pressProps: {
      onPressIn: () => setPressed(true),
      onPressOut: () => setPressed(false),
    },
    isPressed,
  };
};