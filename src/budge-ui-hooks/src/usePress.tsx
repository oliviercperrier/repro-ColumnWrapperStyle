import { useState } from "react";

const usePress = () => {
  const [isPressed, setPressed] = useState(false);
  return {
    pressProps: {
      onPressIn: () => setPressed(true),
      onPressOut: () => setPressed(false),
    },
    isPressed,
  };
};

export default usePress;
