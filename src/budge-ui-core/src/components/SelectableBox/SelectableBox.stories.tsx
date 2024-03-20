
import React, { useEffect, useState } from "react";

import { CardIcon, RoundIcon } from "../Icons";
import { Stack } from "../Stack";
import { Text } from "../Text";
import SelectableBox, { TSelectableBoxProps } from "./SelectableBox";

type TSelectableBoxPropsKeys = (keyof TSelectableBoxProps)[];

const DefaultFields: TSelectableBoxPropsKeys = ["isSelected", "withPressEffect", "disabled", "variant"];

const EditSaveToggleButtonsMeta: ComponentMeta<typeof SelectableBox> = {
  title: "Misc/Selectable Box",
  component: SelectableBox,
  args: {
    isSelected: false,
    disabled: false,
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default EditSaveToggleButtonsMeta;

type SelectableBoxStory = ComponentStory<typeof SelectableBox>;

export const Default: SelectableBoxStory = args => {
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(args.isSelected);
  }, [args.isSelected]);

  return (
    <SelectableBox
      {...args}
      style={{ maxWidth: 350 }}
      selectedColor="primary"
      isSelected={isSelected}
      onPress={() => setSelected(!isSelected)}
    >
      <Stack.Horizontal alignItems="center">
        <RoundIcon icon={CardIcon} color={isSelected ? "primary" : undefined} />
        <Text selectable={false}>Mastercard **** **** **** 4444</Text>
      </Stack.Horizontal>
    </SelectableBox>
  );
};
