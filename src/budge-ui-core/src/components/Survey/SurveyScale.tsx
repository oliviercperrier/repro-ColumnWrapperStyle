import React from "react";
import { Stack } from "../Stack";
import { Box } from "../Box";
import { Pressable } from "../Pressable";
import { Text } from "../Text";

export type TSurveyScaleProps = {
  value?: number;
  onValueChange?(value: number): void;
  maxValue: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  minValueLabel: string;
  maxValueLabel: string;
  readOnly?: boolean;
};

const SurveyScale = ({ value, readOnly, onValueChange, maxValue, minValueLabel, maxValueLabel }: TSurveyScaleProps) => {
  const handleValueChange = (newValue: number) => {
    if (value !== newValue) {
      onValueChange?.(newValue);
    }
  };

  return (
    <Stack>
      <Stack.Horizontal fwrap="wrap" spacing="xs">
        {Array.from(Array(maxValue)).map((_, index) => (
          <Pressable
            disabled={readOnly}
            opacity={1}
            key={`survey-item-${index}`}
            f={1}
            onPress={() => handleValueChange(index + 1)}
          >
            <Box
              sx={theme => ({
                borderWidth: 1,
                borderRadius: 8,
                height: 32,
                alignItems: "center",
                justifyContent: "center",
                borderColor: value === index + 1 ? theme.fn.primaryColor() : theme.palette.colors.gray[3],
                backgroundColor: value === index + 1 ? theme.fn.primaryColor() : undefined,
              })}
            >
              <Text color={value === index + 1 ? "white" : undefined}>{index + 1}</Text>
            </Box>
          </Pressable>
        ))}
      </Stack.Horizontal>
      <Stack.Horizontal justifyContent="space-between">
        <Text variant="bodySmall" color="textSecondary">
          {minValueLabel}
        </Text>
        <Text variant="bodySmall" color="textSecondary">
          {maxValueLabel}
        </Text>
      </Stack.Horizontal>
    </Stack>
  );
};

export default SurveyScale;
