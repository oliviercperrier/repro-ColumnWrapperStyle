import React, { PropsWithChildren, useEffect, useState } from "react";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { TTextProps, Text } from "../Text";
import { Stack } from "../Stack";

export type TAnimatedNumberProps = {
  animate?: boolean;
  value: `${number}`;
  // In order to be centered properly on all devices,
  // fontSize and fontWeight needs to be well set.
  // Bug ref: https://github.com/facebook/react-native/issues/29507
  textProps?: TTextProps;
};

const NUMBERS = [...Array.from(Array(10).keys()), ...Array.from(Array(10).keys()), ...Array.from(Array(10).keys())];

const AnimatedNumber = ({ animate = true, value, textProps }: TAnimatedNumberProps) => {
  const [refreshIndex, setRefreshIndex] = useState(0);
  const animateToNumbersArr = Array.from(value, Number);
  const [numberHeight, setNumberHeight] = React.useState(0);

  useEffect(() => {
    setRefreshIndex(prev => prev + 1);
  }, [value]);

  if (!animate) {
    return (
      <Stack.Horizontal spacing={0} overflow="hidden">
        {animateToNumbersArr.map((n, index) => (
          <Text key={index} {...textProps}>
            {n}
          </Text>
        ))}
      </Stack.Horizontal>
    );
  }

  return (
    <>
      {numberHeight !== 0 && (
        <Stack.Horizontal spacing={0} h={numberHeight} overflow="hidden">
          {animateToNumbersArr.map((n, index) => (
            <AnimatedNumberItem key={index} index={index} number={n} numberHeight={numberHeight} restart={refreshIndex}>
              {NUMBERS.map((number, i) => (
                <Text key={i} {...textProps}>
                  {number}
                </Text>
              ))}
            </AnimatedNumberItem>
          ))}
        </Stack.Horizontal>
      )}
      <Text
        {...textProps}
        style={{ position: "absolute", top: -999999 }}
        onLayout={e => {
          setNumberHeight(Math.round(e.nativeEvent.layout.height));
        }}
      >
        {0}
      </Text>
    </>
  );
};

const AnimatedNumberItem = ({
  number,
  numberHeight,
  children,
  index,
  restart,
}: PropsWithChildren<{ number: number; numberHeight: number; index: number; restart: any }>) => {
  const textTranslateShared = useSharedValue(1);
  const style = useAnimatedStyle(
    () => ({
      transform: [{ translateY: textTranslateShared.value }],
    }),
    []
  );

  useEffect(() => {
    textTranslateShared.value = 1;
    textTranslateShared.value = withDelay(
      125 * index,
      withTiming(-1 * (numberHeight * (number + (NUMBERS.length - 10))), {
        duration: 1400,
        easing: Easing.elastic(0.25),
      })
    );
  }, [number, restart]);

  return <Animated.View style={[style]}>{children}</Animated.View>;
};

export default AnimatedNumber;
