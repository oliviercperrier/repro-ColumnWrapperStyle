import React, { memo, useCallback, useState } from "react";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import AnimatedChevronUpDownIcon from "../Animated/AnimatedChevronUpDownIcon";
import { Dropdown } from "../Dropdown";
import { Input, TInputOnBlur } from "../Input";
import { Pressable } from "../Pressable";
import { SelectContextProvider } from "./Select.context";
import { Text } from "../Text";
import { List } from "../List";
import { Spinner } from "../Loader";
import { Box } from "../Box";
import { TSelectOption, TSelectProps } from "./Select.types";
import useSelect from "./useSelect";

const SelectDefault = (props: TSelectProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
    style,
    options,
    initialOptions,
    filterCurrentValue = true,
    enableSearch = false,
    includeEmptyOption = false,
    showValueTooltip = false,
    emptyOptionValue,
    onChange,
    onSearch,
    value,
    overlayFitAnchor = true,
    overlayMaxWidth,
    overlayMinWidth,
    onBlur,
    onChangeText,
    ...inputProps
  } = useComponentDefaultProps("Select", {}, props);

  const {
    currentValue,
    handleChange,
    getDisplayName,
    renderItemContent,
    handleSelect,
    isLoading,
    localOptions,
    setLocalOptions,
    getListData,
    handleSearch,
  } = useSelect(props);

  const handleOnBlur: TInputOnBlur = useCallback(
    (_, inputValue, setInputValue) => {
      onBlur?.(_, inputValue, setInputValue);

      if (!inputValue) {
        handleChange(undefined as any);
      } else if (currentValue) {
        setInputValue(getDisplayName(currentValue));
      }

      if (!localOptions.length) {
        setTimeout(() => setLocalOptions(options), 300);
      }
    },
    [localOptions, currentValue]
  );

  const handleChangeText = (text: string) => {
    onChangeText?.(text);
    handleSearch(text);
  };

  const handleSelectItem = (item: TSelectOption) => {
    handleSelect(item);
    setIsDropdownOpen(false);
  };

  const renderOption = ({ item }: { item: TSelectOption }) => (
    <Pressable onPress={() => handleSelectItem(item)}>{renderItemContent(item)}</Pressable>
  );

  return (
    <SelectContextProvider
      value={{
        getDisplayName,
      }}
    >
      <Dropdown
        visible={isDropdownOpen}
        disabled={inputProps.disabled}
        onVisibleChange={setIsDropdownOpen}
        overlayFitAnchor={overlayFitAnchor}
        overlayMaxWidth={overlayMaxWidth}
        overlayMinWidth={overlayMinWidth}
        style={style}
        tooltipValue={showValueTooltip && getDisplayName(currentValue)}
        anchor={
          <Input
            value={value as any}
            editable={inputProps.disabled ? false : enableSearch}
            pointerEvents={enableSearch ? "auto" : "none"}
            rightSection={
              <AnimatedChevronUpDownIcon color={inputProps.disabled ? "gray.4" : "primary"} isDown={isDropdownOpen} />
            }
            numberOfLines={1}
            {...inputProps}
            getDisplayValue={getDisplayName}
            onBlur={handleOnBlur}
            onChangeText={handleChangeText}
          />
        }
        overlay={
          isLoading ? (
            <Box alignItems="center" f={1} p="lg">
              <Spinner size={24} color="primary" />
            </Box>
          ) : (
            <List
              p="lg"
              data={getListData()}
              accessibilityRole="list"
              keyExtractor={item => item.optionKey || item.label + item.value}
              renderItem={renderOption}
              useDefaultItemSeparator
              ListEmptyComponent={<Text color="textSecondary">No results</Text>}
            />
          )
        }
      />
    </SelectContextProvider>
  );
};

export default memo(SelectDefault);
