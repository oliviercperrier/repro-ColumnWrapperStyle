import React from "react";
import CreditScore from "./CreditScore";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "General/Credit Score",
  component: CreditScore,
} satisfies Meta<typeof CreditScore>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 350,
    score: 765,
    scoreGrade: "Excellent",
    variation: -2,
    animationDelay: 0,
  },
};
