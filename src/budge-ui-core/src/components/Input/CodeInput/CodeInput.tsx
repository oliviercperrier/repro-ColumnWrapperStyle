import React, { useCallback } from "react";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from "react-native-confirmation-code-field";
import { TextInputProps, ViewStyle } from "react-native";
import { Text } from "../../Text";
import useFormikField from "../../Form/useFormikField";
import { isNil } from "../../../utils";

export type TCodeInputProps = Omit<TextInputProps, "value"> & {
  value?: number | null;
  onValueChange?(value: number | null): void;
  cellCount: number;
  rootStyle?: ViewStyle;
};

const CodeInput = ({ value, onValueChange, cellCount, rootStyle = {}, ...textInputProps }: TCodeInputProps) => {
  const { field, helpers } = useFormikField();
  const currentValue: string = (isNil(value) ? (isNil(field?.value) ? "" : field?.value) : value).toString();
  const ref = useBlurOnFulfill({ value: currentValue, cellCount });

  const handleChangeText = useCallback(
    (text: string) => {
      if (text && Number.isNaN(parseInt(text))) {
        return;
      }

      const numberValue = text ? parseFloat(text) : null;

      onValueChange?.(numberValue);
      helpers?.setValue(numberValue);
    },
    [helpers?.setValue]
  );

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: currentValue,
    setValue: handleChangeText,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={currentValue}
      onChangeText={handleChangeText}
      textInputStyle={{
        color: "transparent",
      }}
      rootStyle={{
        gap: 8,
        ...rootStyle,
      }}
      caretHidden
      cellCount={cellCount}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          h={48}
          lh={43}
          f={1}
          ta="center"
          variant="titleH3"
          bc={isFocused ? "primary" : "gray.0"}
          bw={2}
          bg="gray.0"
          sx={{
            borderRadius: 8,
          }}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
      {...textInputProps}
    />
  );
};

export default CodeInput;
