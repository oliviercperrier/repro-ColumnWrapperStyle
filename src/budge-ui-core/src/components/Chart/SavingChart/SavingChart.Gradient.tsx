import React from "react";
import { Defs, LinearGradient, Stop } from "react-native-svg";

const Gradient = ({ id, colors }: { id?: string; colors: string[] }) => (
  <Defs>
    <LinearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      {colors.map((color: string, index: number) => (
        <Stop
          key={`${index}-${color}`}
          offset={`${(index * 100) / (colors.length - 1)}%`}
          stopColor={color}
          stopOpacity="0.75"
        />
      ))}
    </LinearGradient>
  </Defs>
);

export default Gradient;
