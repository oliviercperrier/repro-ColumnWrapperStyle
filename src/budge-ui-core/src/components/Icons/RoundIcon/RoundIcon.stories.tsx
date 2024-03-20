import { action } from "@storybook/addon-actions";
import React from "react";
import { Text } from "../../Text";
import { Stack } from "../../Stack";
import {
  AddNewGoalIcon,
  CardGoalIcon,
  HearthGoalIcon,
  HomeGoalIcon,
  InsightGoalIcon,
  NotebookGoalIcon,
  StudentGoalIcon,
  SunGoalIcon,
  WalletGoalIcon,
} from "./Goals";
import { Box } from "../../Box";
import RoundIcon from "./RoundIcon";
import { ArrowLeftIcon, BudgeRoundIcon, CarIcon, CloseIcon, SuccessIcon } from "..";
import { Pressable } from "../../Pressable";
import { AccountTypeIconMapping } from "../../../utils/mappings/accountTypeMappings";

const RoundIconMeta = {
  title: "General/Round Icon",
  args: {},
};

export default RoundIconMeta;

export const All = () => (
  <>
    <Box mb={12}>
      <Text variant="bodyLarge">Goal icons</Text>
    </Box>
    <Stack.Horizontal mb={12} fwrap="wrap">
      <CardGoalIcon />
      <NotebookGoalIcon />
      <StudentGoalIcon />
      <InsightGoalIcon />
      <HearthGoalIcon />
      <HomeGoalIcon />
      <SunGoalIcon />
      <AddNewGoalIcon />
      <WalletGoalIcon />
    </Stack.Horizontal>
    <Box mb={12}>
      <Text variant="bodyLarge">Account type icons</Text>
    </Box>
    <Stack.Horizontal mb={12} fwrap="wrap">
      {Object.values(AccountTypeIconMapping).map(Icon => (
        <Icon />
      ))}
    </Stack.Horizontal>
    <Box mb={12}>
      <Text variant="bodyLarge">Round icon buttons</Text>
    </Box>
    <Stack.Horizontal mb={24}>
      <Pressable onPress={action("onPress")}>
        <RoundIcon icon={ArrowLeftIcon} color="primary" size="xs" />
      </Pressable>
      <Pressable onPress={action("onPress")}>
        <RoundIcon icon={ArrowLeftIcon} color="primary" size="sm" />
      </Pressable>
      <Pressable onPress={action("onPress")}>
        <RoundIcon icon={ArrowLeftIcon} color="primary" size="md" />
      </Pressable>
      <Pressable onPress={action("onPress")}>
        <RoundIcon icon={ArrowLeftIcon} color="primary" size="lg" />
      </Pressable>
      <Pressable onPress={action("onPress")}>
        <RoundIcon icon={ArrowLeftIcon} color="primary" size="xl" />
      </Pressable>
    </Stack.Horizontal>
    <Box mb={12}>
      <Text variant="bodyLarge">Round icon buttons disabled</Text>
    </Box>
    <Stack.Horizontal mb={24}>
      <Pressable disabled>
        <RoundIcon icon={ArrowLeftIcon} color="primary" />
      </Pressable>
      <Pressable disabled>
        <RoundIcon icon={ArrowLeftIcon} color="red" />
      </Pressable>
      <Pressable disabled>
        <RoundIcon icon={ArrowLeftIcon} color="green" />
      </Pressable>
      <Pressable disabled>
        <RoundIcon icon={ArrowLeftIcon} color="yellow" />
      </Pressable>
      <Pressable disabled>
        <RoundIcon icon={ArrowLeftIcon} color="gray" />
      </Pressable>
    </Stack.Horizontal>
    <Box mb={12}>
      <Text variant="bodyLarge">Budge icons</Text>
    </Box>
    <Stack.Horizontal mb={24}>
      <BudgeRoundIcon size="xs" />
      <BudgeRoundIcon size="sm" />
      <BudgeRoundIcon size="md" />
      <BudgeRoundIcon size="lg" />
      <BudgeRoundIcon size="xl" />
    </Stack.Horizontal>
    <Box mb={12}>
      <Text variant="bodyLarge">Round icon styling with custom icons and sizing</Text>
    </Box>
    <Stack.Horizontal mb={12}>
      <RoundIcon icon={ArrowLeftIcon} color="primary" size="xs" />
      <RoundIcon icon={ArrowLeftIcon} color="primary" size="sm" />
      <RoundIcon icon={ArrowLeftIcon} color="primary" size="md" />
      <RoundIcon icon={ArrowLeftIcon} color="primary" size="lg" />
      <RoundIcon icon={ArrowLeftIcon} color="primary" size="xl" />
    </Stack.Horizontal>
    <Stack.Horizontal mb={12}>
      <RoundIcon icon={SuccessIcon} color="green" size="xs" />
      <RoundIcon icon={SuccessIcon} color="green" size="sm" />
      <RoundIcon icon={SuccessIcon} color="green" size="md" />
      <RoundIcon icon={SuccessIcon} color="green" size="lg" />
      <RoundIcon icon={SuccessIcon} color="green" size="xl" />
    </Stack.Horizontal>
    <Stack.Horizontal mb={12}>
      <RoundIcon icon={CloseIcon} size="xs" />
      <RoundIcon icon={CloseIcon} size="sm" />
      <RoundIcon icon={CloseIcon} size="md" />
      <RoundIcon icon={CloseIcon} size="lg" />
      <RoundIcon icon={CloseIcon} size="xl" />
    </Stack.Horizontal>
    <Stack.Horizontal>
      <RoundIcon icon={CarIcon} color="red" size="xs" />
      <RoundIcon icon={CarIcon} color="red" size="sm" />
      <RoundIcon icon={CarIcon} color="red" size="md" />
      <RoundIcon icon={CarIcon} color="red" size="lg" />
      <RoundIcon icon={CarIcon} color="red" size="xl" />
    </Stack.Horizontal>
  </>
);
