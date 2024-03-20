import React, { ReactNode, memo, useEffect, useRef, useState } from "react";
import { useDebounce, useDisclosure } from "@budgeinc/budge-ui-hooks";
import { useTheme } from "@budgeinc/budge-ui-styling";
import { Animated, TextInput } from "react-native";
import { Box } from "../Box";
import { Tag } from "../Tag";
import { Stack } from "../Stack";
import { Dropdown, TDropdownProps } from "../Dropdown";
import { List, TListProps } from "../List";
import { Pressable } from "../Pressable";
import { SuccessIcon } from "../Icons";
import AnimatedChevronUpDownIcon from "../Animated/AnimatedChevronUpDownIcon";
import { useFormikField } from "../Form";
import { Text } from "../Text";
import { TInputVariant, useInputStyles } from "../Input/Input.styles";
import { UnstyledTextInput } from "../Input";
import { Spinner } from "../Loader";

export type TMultiSelectOption = { value: string; label: string; customOptionLabel?: ReactNode };
export type TSearchableMultiSelectOption = TMultiSelectOption & { searchValue: string };

export type TMultiSelectProps = Pick<TDropdownProps, "overlayFitAnchor" | "overlayMaxWidth" | "overlayMinWidth"> & {
  label?: string;
  value?: string[];
  onValueChange?(value: string[]): void;
  disabled?: boolean;
  variant?: TInputVariant;
  maxValueToShow?: number;
  ListEmptyComponent?: TListProps["ListEmptyComponent"];
  onSearch?: (value: string | undefined) => Promise<TSearchableMultiSelectOption[]>;
} & (
    | {
        enableSearch: true;
        options: TSearchableMultiSelectOption[];
      }
    | {
        enableSearch?: false;
        options: TMultiSelectOption[];
      }
  );

const MultiSelect = ({
  label = "Pick value",
  value = [],
  onValueChange,
  options,
  overlayFitAnchor = true,
  overlayMaxWidth,
  overlayMinWidth,
  disabled = false,
  enableSearch = false,
  variant = "default",
  maxValueToShow = 3,
  ListEmptyComponent,
  onSearch,
}: TMultiSelectProps) => {
  const theme = useTheme();
  const searchInputRef = useRef<TextInput>(null);
  const [open, handlers] = useDisclosure();
  const { field, helpers, hasError } = useFormikField();
  const [localOptions, setLocalOptions] = useState(options);
  const localValue = (field?.value || value) as string[];
  const position = useRef(new Animated.Value(localValue.length ? 1 : 0));

  const isAsyncSearch = !!onSearch;
  const [searchValue, setSearchValue] = useState<string>();
  const [searchLoading, setSearchLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<typeof options>([]);
  const debouncedSearchValue = useDebounce({ value: searchValue, delay: 250 });

  const {
    rootStyle: { height: _, ...baseRootStyle },
    labelStyle,
  } = useInputStyles({
    disabled,
    hasError,
    variant,
    isTextarea: false,
    nbLines: 1,
    hasLabel: !!label,
    centered: false,
  });

  const handleSelect = (newValue: string) => {
    const newValues = [...localValue, newValue];
    onValueChange?.(newValues);
    helpers?.setValue?.(newValues);

    const newOption = localOptions.find(o => o.value === newValue);

    if (newOption) {
      setSelectedOptions(prev => [...prev, newOption]);
    }
  };

  const handleRemove = (valueToRemove: string) => {
    const newValues = localValue.filter(val => val !== valueToRemove);
    onValueChange?.(newValues);
    helpers?.setValue?.(newValues);
  };

  useEffect(() => {
    setLocalOptions(options);
  }, [options?.length]);

  useEffect(() => {
    if (localValue.length) {
      Animated.timing(position.current, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(position.current, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
        delay: 100,
      }).start();
    }
  }, [localValue]);

  const selectValueLabel = localValue.map(v => ({
    label: selectedOptions.find(opt => opt.value === v)?.label || v,
    value: v,
  }));

  const _returnAnimatedTitleStyles = () => ({
    top: position.current.interpolate({
      inputRange: [0, 2],
      outputRange: [19, 0],
    }),
    fontSize: position.current.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
  });

  const resetOptions = () => {
    setLocalOptions(options);
    searchInputRef.current?.clear();
  };

  useEffect(() => {
    const handleOnSearch = async () => {
      if (onSearch) {
        setSearchLoading(true);
        const results = await onSearch(debouncedSearchValue);
        setLocalOptions(results);
        setSearchLoading(false);
      }
    };

    if (debouncedSearchValue !== undefined && isAsyncSearch) {
      handleOnSearch();
    }
  }, [debouncedSearchValue]);

  const handleSearch = (search: string) => {
    if (isAsyncSearch) {
      setSearchValue(search);
    } else if (search) {
      setLocalOptions(prev =>
        (prev as TSearchableMultiSelectOption[]).filter(o => o.searchValue.toLowerCase().includes(search.toLowerCase()))
      );
    } else {
      resetOptions();
    }
  };

  return (
    <Dropdown
      visible={open}
      onVisibleChange={v => {
        if (v) {
          handlers.open();
          if (enableSearch) {
            setTimeout(() => searchInputRef.current?.focus(), 250);
          }
        } else {
          handlers.close();
          setTimeout(() => resetOptions(), 250);
        }
      }}
      overlayFitAnchor={overlayFitAnchor}
      overlayMaxWidth={overlayMaxWidth}
      overlayMinWidth={overlayMinWidth}
      disabled={disabled}
      anchor={
        <Box px="md" py="md" mih={59} radius="default" sx={[baseRootStyle]}>
          <Animated.Text
            style={[labelStyle, _returnAnimatedTitleStyles()]}
            numberOfLines={1}
            accessibilityLabel={label}
          >
            {label}
          </Animated.Text>
          <Stack.Horizontal f={1} alignItems="center">
            <Stack.Horizontal pt={label ? 22 : 0} f={1} alignItems="center" fwrap="wrap">
              {selectValueLabel.slice(0, maxValueToShow).map(val => (
                <Tag
                  key={val.value}
                  value={<Text>{val.label}</Text>}
                  variant="default"
                  opacity={disabled ? 0.35 : 1}
                  closable={!disabled}
                  onClose={() => handleRemove(val.value)}
                />
              ))}
              {selectValueLabel.length > maxValueToShow && (
                <Tag variant="default" value={`+${selectValueLabel.length - maxValueToShow}`} />
              )}
            </Stack.Horizontal>
            <AnimatedChevronUpDownIcon color={disabled ? "gray.4" : "primary"} isDown={open} />
          </Stack.Horizontal>
        </Box>
      }
      overlay={
        <Box>
          {enableSearch && (
            <Box px="lg" pt="lg">
              <UnstyledTextInput
                ref={searchInputRef}
                clearButtonMode="while-editing"
                placeholderTextColor={theme.palette.textColor.secondary}
                bordered
                px={8}
                py={8}
                lh={18}
                placeholder="Search"
                onChangeText={handleSearch}
              />
            </Box>
          )}
          {searchLoading ? (
            <Box alignItems="center" f={1} p="lg">
              <Spinner size="md" color="primary" />
            </Box>
          ) : (
            <List
              data={localOptions}
              p="lg"
              mih={200}
              mah={300}
              keyExtractor={item => item.value}
              renderItem={({ item }) => {
                const selected = localValue.includes(item.value);

                return (
                  <Pressable
                    onPress={() => {
                      selected ? handleRemove(item.value) : handleSelect(item.value);
                    }}
                  >
                    <Stack.Horizontal alignItems="center" justifyContent="space-between">
                      {item.customOptionLabel ? item.customOptionLabel : <Text>{item.label}</Text>}
                      {selected && <SuccessIcon size="sm" color="primary" />}
                    </Stack.Horizontal>
                  </Pressable>
                );
              }}
              ListEmptyComponent={
                ListEmptyComponent || (
                  <Text ta="center" color="textSecondary">
                    No Results
                  </Text>
                )
              }
              useDefaultItemSeparator
            />
          )}
        </Box>
      }
    />
  );
};

export default memo(MultiSelect);
