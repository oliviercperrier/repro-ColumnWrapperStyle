import React, { useState } from "react";

import MultiSelect, { TMultiSelectProps, TSearchableMultiSelectOption } from "./MultiSelect";
import { Box } from "../Box";
import Stack from "../Stack/Stack";
import { Text } from "../Text";

type TMultiSelectPropsKeys = (keyof TMultiSelectProps)[];

const DefaultFields: TMultiSelectPropsKeys = ["disabled", "label", "variant"];

const MultiSelectMeta: ComponentMeta<typeof MultiSelect> = {
  title: "Combobox/MultiSelect",
  component: MultiSelect,
  args: {
    label: "Frontend Framekwork",
    options: [
      {
        label: "React",
        value: "react",
        customOptionLabel: (
          <Stack spacing={0} f={1}>
            <Text>React</Text>
            <Text variant="bodySmall" color="textSecondary">
              A UI Framework to build beautiful web app.
            </Text>
          </Stack>
        ),
      },
      {
        label: "Vite",
        value: "vite",
        customOptionLabel: (
          <Stack spacing={0} f={1}>
            <Text>Vite</Text>
            <Text variant="bodySmall" color="textSecondary">
              Create and manage frontend app in no time!
            </Text>
          </Stack>
        ),
      },
      {
        label: "VueJS",
        value: "vue",
      },
      {
        label: "Angular",
        value: "angular",
      },
      {
        label: "NativeBase",
        value: "nativebase",
      },
    ],
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
  decorators: [(Story: any) => Story()],
};

export default MultiSelectMeta;

type MultiSelectStory = ComponentStory<typeof MultiSelect>;

export const Default: MultiSelectStory = args => {
  const [value, setValue] = useState<string[]>(["react"]);

  return (
    <Box maw={350}>
      <MultiSelect value={value} onValueChange={setValue} {...args} />
    </Box>
  );
};
Default.args = {};

export const Search: MultiSelectStory = args => {
  const [value, setValue] = useState<string[]>(["react"]);

  return (
    <Box maw={350}>
      <MultiSelect
        value={value}
        enableSearch
        onValueChange={setValue}
        {...args}
        options={args.options.map(o => ({
          ...o,
          searchValue: o.label + o.value,
        }))}
      />
    </Box>
  );
};
Search.args = {};

export const AsyncSearch: MultiSelectStory = args => {
  const [value, setValue] = useState<string[]>(["react"]);

  const onSearch = async (searchValue: string | undefined) =>
    new Promise<TSearchableMultiSelectOption[]>(resolve => {
      setTimeout(() => {
        resolve(
          args.options
            .filter(o => (o.label + o.value).toLowerCase().includes(searchValue || ""))
            .map(o => ({
              ...o,
              searchValue: o.label + o.value,
            }))
        );
      }, 2000); // Delay of 2 seconds
    });

  return (
    <Box maw={350}>
      <MultiSelect
        value={value}
        enableSearch
        onValueChange={setValue}
        {...args}
        onSearch={onSearch}
        options={args.options.map(o => ({
          ...o,
          searchValue: o.label + o.value,
        }))}
      />
    </Box>
  );
};
AsyncSearch.args = {};
