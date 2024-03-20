import { action } from "@storybook/addon-actions";
import CloseButton from "./CloseButton";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/Close Button",
  component: CloseButton,
  args: {
    variant: "default",
    color: "dark",
  },
  decorators: [(Story: any) => Story()],
} satisfies Meta<typeof CloseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    radius: "default",
    size: "md",
    disabled: false,
    onPress: action("onPress"),
  },
};
