/* eslint-disable react/no-array-index-key */
import { i18n } from "@budgeinc/budge-ui-utils";
import React, { forwardRef, memo, ReactNode, useEffect, useState } from "react";
import { View } from "react-native";
import { Box } from "../Box";
import { Card } from "../Card";
import { Divider } from "../Divider";
import { Pressable } from "../Pressable";
import { Stack } from "../Stack";
import { Text } from "../Text";

export type TAccordionStepperProps = {
  current: number;
  steps: TAccordionStepProps[];
  onEditStep: (index: number) => void;
};

export type TAccordionStepProps = {
  content: ReactNode;
  title: string;
  extraInfo?: string;
};

const AccordionStepper = forwardRef<View, TAccordionStepperProps>(({ current, steps, onEditStep }, ref) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    let number = current;
    const completed: number[] = [];

    while (number > 1) {
      number -= 1;
      if (!completedSteps.includes(number)) {
        completed.push(number);
      }
    }
    setCompletedSteps([...completedSteps, ...completed]);
  }, [current]);

  return (
    <Card p="xl">
      <Box>
        {steps.map((step, index) => {
          const isActive = current === index + 1;
          const isNotDone = current < index + 1;
          const isCompleted = index + 1 < current || completedSteps.includes(index + 1);
          const isLastStep = completedSteps.length === steps.length - 1;

          return (
            <Box key={index}>
              <Box fdirection="row" alignItems="center" justifyContent="space-between" mb={isActive ? 24 : undefined}>
                <Box f={1} alignItems="center" fdirection="row">
                  <Box
                    w={24}
                    h={24}
                    alignItems="center"
                    justifyContent="center"
                    sx={theme => ({
                      borderRadius: 50,
                      backgroundColor: isNotDone
                        ? theme.fn.alpha(theme.black, 0.25)
                        : isCompleted
                        ? theme.palette.colors.green[7]
                        : theme.fn.primaryColor(),
                    })}
                  >
                    <Text sx={theme => ({ color: theme.white })}>{index + 1}</Text>
                  </Box>
                  <Text ml={8} color="textSecondary">
                    {step.title}
                  </Text>
                </Box>
                {!isActive && (isCompleted || isLastStep) && (
                  <Stack.Horizontal>
                    {step.extraInfo && <Text color="textSecondary">{step.extraInfo}</Text>}
                    <Pressable onPress={() => onEditStep(index + 1)}>
                      <Text sx={theme => ({ color: theme.fn.primaryColor() })}>
                        {i18n.t("edit", { defaultValue: "Edit" })}
                      </Text>
                    </Pressable>
                  </Stack.Horizontal>
                )}
              </Box>
              {isActive && <View>{step.content}</View>}
              {index < steps.length - 1 && <Divider size="xs" spacing="xl" />}
            </Box>
          );
        })}
      </Box>
    </Card>
  );
});

export default memo(AccordionStepper);
