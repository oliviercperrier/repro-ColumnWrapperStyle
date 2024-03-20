import React, { useState } from "react";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { StyleSheet, ViewStyle } from "react-native";
import { Input } from "../Input";
import AnimatedChevronUpDown from "../Animated/AnimatedChevronUpDownIcon";
import { Pressable } from "../Pressable";
import { SheetPicker } from "../SheetPicker";
import { useSheet } from "../Sheet";
import { Text } from "../Text";
import { TSelectProps } from "./Select.types";
import useSelect from "./useSelect";
import { ConditionalWrapper } from "../ConditionalWrapper";
import { Box } from "../Box";

const SelectMobile = (props: TSelectProps) => {
  const { ref, show } = useSheet();
  const [opened, setOpened] = useState(false);

  const {
    style,
    options,
    initialOptions,
    filterCurrentValue = true,
    enableSearch = false,
    includeEmptyOption = false,
    emptyOptionValue,
    onChange,
    onSearch,
    value,
    onBlur,
    onChangeText,
    ...inputProps
  } = useComponentDefaultProps("Select", {}, props);

  const { handleChange, getDisplayName, renderItemContent, isLoading, getListData, handleSearch } = useSelect(props);

  const handleOpen = () => {
    show();
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  const handleChangeText = (text: string) => {
    onChangeText?.(text);
    handleSearch(text, false);
  };

  const getAnchorWrapper = (children: any) => <Pressable onPress={handleOpen}>{children}</Pressable>;

  return (
    <Box sx={StyleSheet.flatten(style) as ViewStyle}>
      <ConditionalWrapper condition={!inputProps.disabled} wrapper={getAnchorWrapper}>
        <Input
          value={value as any}
          editable={false}
          pointerEvents="none"
          rightSection={<AnimatedChevronUpDown color={inputProps.disabled ? "gray.4" : "primary"} isDown={!!opened} />}
          getDisplayValue={getDisplayName}
          {...inputProps}
        />
      </ConditionalWrapper>
      <SheetPicker
        onClose={handleClose}
        enableSearch={enableSearch}
        label={inputProps.label}
        sheetRef={ref}
        data={getListData()}
        renderItem={renderItemContent}
        onSelectItem={handleChange}
        onSearch={handleChangeText}
        loading={isLoading}
        ListEmptyComponent={<Text color="textSecondary">No results</Text>}
      />
    </Box>
  );
};

export default SelectMobile;
