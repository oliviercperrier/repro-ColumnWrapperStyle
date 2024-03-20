import { Animated } from "react-native";
import React from "react";
import { useTheme } from "@budgeinc/budge-ui-styling";
import { Stack } from "../Stack";
import { Pressable } from "../Pressable";
import { Text } from "../Text";

export type TCarouselPaginationProps = {
  data: any[];
  scrollX: any;
  width: number;
  activeIndex: number;
  scrollToIndex: (index: number) => void;
  showSkip?: boolean;
};

const CarouselIndicators = ({
  data,
  activeIndex,
  scrollX,
  width,
  scrollToIndex,
  showSkip = true,
}: TCarouselPaginationProps) => {
  const theme = useTheme();
  const shadedPrimaryColor = theme.fn.themeColor({ color: "primary", shade: 1 });

  return (
    <Stack.Horizontal spacing="sm" w="100%" alignItems="center" justifyContent="center">
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 24, 10],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [shadedPrimaryColor, theme.fn.themeColor({ color: "primary" }), shadedPrimaryColor],
          extrapolate: "clamp",
        });

        return (
          <Pressable key={idx.toString()} onPress={() => scrollToIndex(idx)}>
            <Animated.View
              style={[
                {
                  width: 10,
                  height: 10,
                  borderRadius: 6,
                  backgroundColor: shadedPrimaryColor,
                },
                { width: dotWidth, backgroundColor },
              ]}
            />
          </Pressable>
        );
      })}
      {showSkip && activeIndex !== data.length - 1 && (
        <Pressable pos="absolute" right={0} onPress={() => scrollToIndex(data.length - 1)}>
          <Text fw="500" color="primary">
            Skip
          </Text>
        </Pressable>
      )}
    </Stack.Horizontal>
  );
};

export default CarouselIndicators;
