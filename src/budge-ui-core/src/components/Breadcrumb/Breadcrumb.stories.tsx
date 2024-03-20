import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { BreadcrumbRoute } from "./Breadcrumb.types";
import { action } from "@storybook/addon-actions";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Navigation/BreadCrumb",
  component: Breadcrumb,
  args: {},
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryFn<typeof Breadcrumb>;

export const Default: Story = (args) => {
  const [stack, setStack] = useState<BreadcrumbRoute[]>([
    {
      pathname: "/home",
      search: "",
      hash: "",
    },
    {
      pathname: "/employers",
      search: "",
      hash: "",
    },
    {
      pathname: "/employers/76b43b76-e647-4202-bb6e-99de5c4acc22",
      search: "",
      hash: "#details",
      meta: {
        title: "Acme Inc.",
      },
    },
    {
      pathname: "/employers/76b43b76-e647-4202-bb6e-99de5c4acc22/employee/30b869ea-b635-4a6f-a693-6ddafd8b59a1",
      search: "",
      hash: "#details",
      meta: {
        title: "Jane Parker",
      },
    },
  ]);

  return (
    <Stack spacing="xl">
      <Breadcrumb stack={stack} onLinkClick={path => action("onLinkClick")(path)} />
      <Button
        title="Push To Stack"
        alignSelf="flex-start"
        size="sm"
        color="primary"
        onPress={() =>
          setStack(prev => [
            ...prev,
            {
              pathname: "/random" + (prev.length + 1),
              search: "",
              hash: "",
            },
          ])
        }
      />
    </Stack>
  );
};
