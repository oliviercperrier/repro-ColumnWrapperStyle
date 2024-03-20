/* eslint-disable react/no-array-index-key */
import { TColor, TNumberSize, useExtractSx } from "@budgeinc/budge-ui-styling";
import React, { forwardRef, memo, ReactNode, useEffect, useState } from "react";
import { View } from "react-native";
import { Box, TBoxProps } from "../Box";
import { ConditionalWrapper } from "../ConditionalWrapper";
import SuccessIcon from "../Icons/Success";
import { Pressable } from "../Pressable";
import { Progress } from "../Progress";
import { Stack } from "../Stack";
import { Text, TTextProps } from "../Text";

export type TStepProps = {
  content: ReactNode;
  title?: string;
};

export type TStepperProps = TBoxProps & {
  current: number;
  steps: TStepProps[];
  size?: TNumberSize;
  color?: TColor;
  showPreviousAsComplete?: boolean;
  showCompleteIcon?: boolean;
  completeIconColor?: TColor;
  titleActiveProps?: TTextProps;
  titleProps?: TTextProps;
  enableNavigation?: boolean;
  initialCompletedSteps?: number[];
  contentProps?: TBoxProps;
  onCurrentChange?: (current: number) => void;
};

const validateStepIndex = (steps: TStepProps[], current: number) =>
  current >= steps.length || current < 0 ? steps.length - 1 : current;

const getFloor = (step: number) => Math.floor(step);

const Stepper = forwardRef<View, TStepperProps>(
  (
    {
      current,
      steps,
      size = "md",
      color = "primary",
      initialCompletedSteps = [],
      showPreviousAsComplete = false,
      showCompleteIcon = false,
      completeIconColor = "green",
      titleActiveProps,
      titleProps,
      enableNavigation = false,
      onCurrentChange,
      contentProps,
      ...rest
    }: TStepperProps,
    ref
  ) => {
    const [completedSteps, setCompletedSteps] = useState<number[]>(initialCompletedSteps);

    const getStepIndicatorWidth = (index: number) => {
      if (!showPreviousAsComplete) {
        return index === getFloor(current) - 1 ? 100 : 0;
      }

      if (getFloor(current) + current === index || current === index) {
        return 0;
      }

      return index <= getFloor(current) ? 100 : 0;
    };

    useEffect(() => {
      let number = current;
      const completed: number[] = [];

      while (number > 1) {
        number -= 1;
        completed.push(number);
      }

      setCompletedSteps([...completedSteps, ...completed]);
    }, [current]);

    return (
      <Box ref={ref} {...rest}>
        <Stack.Horizontal spacing={size}>
          {steps.map((step, index) => {
            const currentIndex = index + 1;
            const isCompleted = currentIndex < current || completedSteps.includes(currentIndex);
            const isPreviousCompleted = !index || completedSteps.includes(index);
            const isClickable = enableNavigation && isPreviousCompleted && current !== currentIndex;

            return (
              <Box key={index} fgrow={1} f={1}>
                <Progress size={size} color={color} value={getStepIndicatorWidth(index)} />
                {step.title && (
                  <ConditionalWrapper
                    condition={isClickable}
                    wrapper={children => (
                      <Pressable
                        onPress={() => {
                          if (onCurrentChange) {
                            onCurrentChange(currentIndex);
                          }
                        }}
                      >
                        {children}
                      </Pressable>
                    )}
                  >
                    <Stack.Horizontal alignItems="center" spacing={4} mt={8}>
                      {isCompleted && showCompleteIcon && <SuccessIcon size={16} color={completeIconColor} />}
                      <Text {...(Math.round(current) - 1 === index ? titleActiveProps : titleProps)}>{step.title}</Text>
                    </Stack.Horizontal>
                  </ConditionalWrapper>
                )}
              </Box>
            );
          })}
        </Stack.Horizontal>
        <Box
          {...contentProps}
          sx={[
            {
              marginTop: 16,
            },
            ...useExtractSx(contentProps?.sx),
          ]}
        >
          {steps[validateStepIndex(steps, getFloor(current) - 1)].content}
        </Box>
      </Box>
    );
  }
);

export default memo(Stepper);
