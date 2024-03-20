import React, { useMemo, useState } from "react";

import { action } from "@storybook/addon-actions";
import SheetPicker, { TSheetPickerProps } from "./SheetPicker";
import { useSheet } from "../Sheet";
import { Button } from "../Button";
import { Text } from "../Text";
import { Box } from "../Box";
import { BPortal } from "../Portal";
import { TSelectOption } from "../Select/Select.types";

type TListPropsKeys = (keyof TSheetPickerProps)[];

const DefaultFields: TListPropsKeys = [];

const ListMeta: ComponentMeta<typeof SheetPicker> = {
  title: "Combobox/Sheet Picker",
  component: SheetPicker,
  args: {},
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default ListMeta;

type ListStory = ComponentStory<typeof SheetPicker>;

const users = [
  {
    label: "Olivier",
    value: "olivier",
  },
  {
    label: "John",
    value: "john",
  },
  {
    label: "Yan",
    value: "yan",
  },
  {
    label: "Hussein",
    value: "hussein",
  },
  {
    label: "Jack",
    value: "jack",
  },
];

export const Default: ListStory = args => {
  const { ref, show } = useSheet();
  const [query, setQuery] = useState("");
  const [data, setData] = useState<TSelectOption[]>(users);

  const filteredData = useMemo(
    () => data.filter(item => item.label.toLocaleLowerCase("en").includes(query.toLocaleLowerCase("en"))),
    [data, query]
  );

  const onSearch = (text: string) => {
    setQuery(text);
  };

  return (
    <Box>
      <Button title="Open sheet picker" onPress={show} />
      <SheetPicker
        sheetRef={ref}
        data={filteredData}
        label="Select a country"
        enableSearch
        onSearch={onSearch}
        onClosed={() => setQuery("")}
        onSelectItem={action("onSelectItem")}
        renderItem={item => <Text>{item.label}</Text>}
      />
    </Box>
  );
};
