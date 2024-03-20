import { useComponentDefaultProps, useExtractSx } from "@budgeinc/budge-ui-styling";
import React, { ReactNode, forwardRef, memo } from "react";
import { View, StyleSheet, ViewStyle, Animated } from "react-native";
import { Text } from "../Text";
import { Box, TBoxProps } from "../Box";
import { Pressable } from "../Pressable";
import { useStyles } from "./ToggleGroup.styles";

type ValueType = string | number | boolean;

export type TToggleGroupProps = Omit<TBoxProps, "onLayout"> & {
  value?: ValueType;
  options: {
    label: ReactNode | ((active: boolean) => ReactNode);
    value: ValueType;
    onPress?(): void;
  }[];
  onValueChange: (value: ValueType) => void;
  animated?: boolean;
};

const ToggleGroup = (props: TToggleGroupProps, ref: React.Ref<View>) => {
  const {
    style,
    value,
    options,
    onValueChange,
    sx,
    animated = true,
    ...rest
  } = useComponentDefaultProps("ToggleGroup", {}, props);
  const selectedIndex = options.findIndex(opt => opt.value === value);

  const [segmentWidth, setSegmentWidth] = React.useState(0);
  const animation = React.useRef(new Animated.Value(0)).current;

  const { rootStyle, toggleGroupContainerStyle, clickableAreaStyle, toggleIndicatorStyle } = useStyles({
    nbOptions: options.length,
  });

  React.useEffect(() => {
    if (animated && animation && segmentWidth && selectedIndex > -1) {
      Animated.spring(animation, {
        toValue: segmentWidth * (selectedIndex || 0),
        bounciness: 100,
        useNativeDriver: true,
      }).start();
    }
  }, [animation, segmentWidth, value, selectedIndex]);

  return (
    <Box
      ref={ref}
      sx={[rootStyle, StyleSheet.flatten(style) as ViewStyle, ...useExtractSx(sx)]}
      {...rest}
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => {
        const newSegmentWidth = options.length ? width / options.length : 0;
        if (newSegmentWidth !== segmentWidth) {
          animation.setValue(newSegmentWidth * (selectedIndex || 0));
          setSegmentWidth(newSegmentWidth);
        }
      }}
    >
      <Box style={toggleGroupContainerStyle}>
        {options.map((option, index) => {
          const active = option.value === value;

          return (
            <Pressable
              key={JSON.stringify(option.value) + index}
              onPress={() => {
                onValueChange(option.value);
                option.onPress?.();
              }}
              style={clickableAreaStyle}
            >
              {typeof option.label === "function" ? (
                option.label(active)
              ) : typeof option.label === "string" ? (
                <Text px="sm" selectable={false} numberOfLines={1} color={active ? "default" : "textSecondary"}>
                  {option.label}
                </Text>
              ) : (
                option.label
              )}
            </Pressable>
          );
        })}
      </Box>
      {selectedIndex != null && selectedIndex > -1 && segmentWidth ? (
        <Animated.View
          style={[
            toggleIndicatorStyle,
            {
              width: segmentWidth - 4,
              transform: [{ translateX: animated ? animation : segmentWidth * (selectedIndex || 0) }],
              zIndex: -1,
            },
          ]}
        />
      ) : null}
    </Box>
  );
};

export default memo(forwardRef(ToggleGroup));
