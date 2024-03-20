import React, { ReactNode, Ref, useRef } from "react";
import { Dimensions, TextInput } from "react-native";
import { composeEventHandlers, useTheme } from "@budgeinc/budge-ui-styling";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheetRef, Sheet, TBottomSheetProps } from "../Sheet";
import { Text } from "../Text";
import { List, TListProps } from "../List";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { UnstyledTextInput } from "../Input";
import { Pressable } from "../Pressable";
import { TSelectOption, TSelectOptionValue } from "../Select/Select.types";
import { Spinner } from "../Loader";
import { CloseButton } from "../CloseButton";

export type TSheetPickerProps<T = any> = Omit<TBottomSheetProps, "children"> & {
  sheetRef: Ref<BottomSheetRef>;
  label: ReactNode;
  loading?: boolean;
  enableSearch?: boolean;
  onSearch?(search: string): void;
  data: TSelectOption[];
  renderItem: (item: TSelectOption) => React.ReactElement | null;
  onSelectItem?(item: TSelectOptionValue): void;
  ListEmptyComponent?: TListProps["ListEmptyComponent"];
};

const SheetPicker = <T,>({
  sheetRef,
  label,
  data,
  loading = false,
  enableSearch = false,
  onSearch,
  renderItem,
  onSelectItem,
  ListEmptyComponent,
  ...props
}: TSheetPickerProps<T>) => {
  const theme = useTheme();
  const inputRef = useRef<TextInput>(null);
  const { bottom } = useSafeAreaInsets();

  const handleOnOpened = () => inputRef.current?.focus();

  return (
    <Sheet ref={sheetRef} {...props} onOpened={composeEventHandlers(props.onOpened, handleOnOpened) as any}>
      {({ hide }) => (
        <Stack h={Math.floor(Dimensions.get("window").height * 0.6)} pt="xl">
          <Stack bg="white" spacing="md" px="xl">
            <Stack.Horizontal alignItems="center" justifyContent="space-between">
              <Text variant="bodyLarge" fw="600">
                {label}
              </Text>
              <CloseButton onPress={hide} size="xs" />
            </Stack.Horizontal>
            {enableSearch && (
              <UnstyledTextInput
                ref={inputRef}
                clearButtonMode="while-editing"
                placeholderTextColor={theme.palette.textColor.secondary}
                bordered
                px={8}
                py={8}
                lh={18}
                placeholder="Search"
                onChangeText={onSearch}
              />
            )}
          </Stack>
          {loading ? (
            <Box alignItems="center" f={1} h={50} mt="md">
              <Spinner size={24} color="primary" />
            </Box>
          ) : (
            <List
              pt="sm"
              f={1}
              contentContainerStyle={{ paddingBottom: bottom || 24, paddingHorizontal: 24 }}
              data={data}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    onSelectItem?.(item.value);
                    hide();
                  }}
                >
                  {renderItem(item)}
                </Pressable>
              )}
              keyExtractor={item => item.optionKey || item.label + item.value}
              keyboardShouldPersistTaps="handled"
              ListEmptyComponent={
                ListEmptyComponent || (
                  <Text ta="center" color="textSecondary">
                    No Results
                  </Text>
                )
              }
              nestedScrollEnabled
              useDefaultItemSeparator
            />
          )}
        </Stack>
      )}
    </Sheet>
  );
};
export default SheetPicker;
