import React, { useCallback, useEffect, useState } from "react";
import { useComponentDefaultProps } from "@budgeinc/budge-ui-styling";
import { useDebounce } from "@budgeinc/budge-ui-hooks";
import useFormikField from "../Form/useFormikField";
import { TSelectOption, TSelectOptionValue, TSelectProps, EmptyOptionKey, EmptyOption } from "./Select.types";
import { Text } from "../Text";

const useSelect = (props: TSelectProps) => {
  const { field, helpers } = useFormikField();
  const [isLoading, setLoading] = useState(false);
  const [localOptions, setLocalOptions] = useState<TSelectOption[]>([]);
  const [initLocalOptions, setInitLocalOptions] = useState<TSelectOption[]>([]);
  const currentValue = props.value || field?.value;

  const isAsyncSearch = !!props.onSearch;
  const [searchValue, setSearchValue] = useState<string>();
  const debouncedSearchValue = useDebounce({ value: searchValue, delay: 250 });

  const {
    style,
    options,
    initialOptions,
    filterCurrentValue = true,
    includeEmptyOption = false,
    emptyOptionValue,
    onChange,
    onSearch,
  } = useComponentDefaultProps("Select", {}, props);

  useEffect(() => {
    setLocalOptions(options);
    setInitLocalOptions(initialOptions || options);
  }, [options?.length, initialOptions?.length]);

  useEffect(() => {
    const handleOnSearch = async () => {
      if (onSearch) {
        setLoading(true);
        const results = await onSearch(debouncedSearchValue);
        setLocalOptions(results);
        setLoading(false);
      }
    };

    if (debouncedSearchValue !== undefined && isAsyncSearch) {
      handleOnSearch();
    }
  }, [debouncedSearchValue]);

  const getDisplayName = (selectValue: any) => {
    let foundOption: TSelectOption | undefined;

    if (isAsyncSearch) {
      foundOption = localOptions.find(opt => opt.value === selectValue);
    } else {
      foundOption = initLocalOptions.find(opt => opt.value === selectValue);
    }

    return foundOption ? foundOption.label : selectValue || "";
  };

  const handleChange = (newValue: TSelectOptionValue) => {
    if (helpers?.setValue) {
      helpers.setValue(newValue);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleSelect = (item: TSelectOption) => {
    if (currentValue !== item.value) {
      handleChange(item.value);

      if (!isAsyncSearch) {
        // onSelect reset value to initial one if not async search
        setLocalOptions(options);
      }
    }
  };

  const getListData = useCallback(() => {
    const data = localOptions
      .filter(option => (filterCurrentValue ? option.value !== currentValue : true))
      .map((opt, index) => ({ ...opt, key: index }));

    if (includeEmptyOption) {
      return [
        {
          ...EmptyOption,
          value: emptyOptionValue,
        },
        ...data,
      ];
    }

    return data;
  }, [localOptions, currentValue]);

  const renderItemContent = (item: TSelectOption) => (
    <>
      {item.optionKey === EmptyOptionKey ? (
        <Text color="textSecondary">{item.label}</Text>
      ) : (item.customContent && typeof item.customContent === "string") || !item.customContent ? (
        <Text>{item.customContent || item.label}</Text>
      ) : (
        item.customContent
      )}
    </>
  );

  const handleSearch = (search: string, clear: boolean = true) => {
    if (isAsyncSearch) {
      setSearchValue(search);

      if (!search) {
        handleChange(undefined);
      }
    } else if (search) {
      const searchString = lowerAndTrim(search);
      const filteredOptions = options.filter(option => lowerAndTrim(option.label).includes(searchString));
      setLocalOptions(filteredOptions);
    } else {
      if (clear) handleChange(undefined);
      setLocalOptions(options);
    }
  };

  return {
    currentValue,
    isLoading,
    options,
    localOptions,
    style,
    handleChange,
    getDisplayName,
    setLocalOptions,
    renderItemContent,
    handleSelect,
    getListData,
    handleSearch,
    setSearchValue,
  };
};

const lowerAndTrim = (str: string) => str.toLowerCase().trim().replace(/\s/g, "");

export default useSelect;
