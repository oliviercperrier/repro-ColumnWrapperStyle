import React, { useEffect, useState } from "react";
import { TColor, composeEventHandlers, extractSystemStyles } from "@budgeinc/budge-ui-styling";
import { PasswordStrength, getPasswordStrength, i18n } from "@budgeinc/budge-ui-utils";
import Input, { TInputProps } from "../Input";
import { Stack } from "../../Stack";
import { Progress } from "../../Progress";
import { EyeCloseIcon, EyeIcon } from "../../Icons";
import { Text } from "../../Text";
import useFormikField from "../../Form/useFormikField";
import { ActionIcon } from "../../ActionIcon";

export type TPasswordInputProps = Omit<
  TInputProps,
  "secureTextEntry" | "autoComplete" | "autoCapitalize" | "autoCorrect" | "spellCheck" | "textContentType"
> & {
  showSuggestions?: boolean;
  showStrengthLabel?: boolean;
  showStrengthMeter?: boolean;
  autoComplete?: "off" | "new-password" | "current-password";
};

const RequiredPasswordLength = 12;

const PasswordInput = ({
  showSuggestions = false,
  showStrengthLabel = false,
  showStrengthMeter = false,
  autoComplete = "off",
  ...props
}: TPasswordInputProps) => {
  const { field, helpers } = useFormikField();
  const [visible, setVisible] = useState(false);
  const initialValue = field?.value || props.value || "";
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength & { value: string }>({
    score: 0,
    warning: null,
    suggestions: [],
    value: initialValue,
  });
  const minPasswordLengthReached = passwordStrength.value.length >= RequiredPasswordLength;

  useEffect(() => {
    if (showStrengthMeter) {
      setPasswordStrength({
        ...getPasswordStrength(initialValue),
        value: initialValue,
      });
    }
  }, []);

  const {
    systemStyles,
    rest: { style, ...inputProps },
  } = extractSystemStyles(props);

  const handleOnChangeText = async (value: string) => {
    if (showStrengthMeter) {
      helpers?.setError(undefined);

      setPasswordStrength({
        ...getPasswordStrength(value),
        value,
      });
    }
  };

  const strengthColor = getPasswordStrengthColor(passwordStrength, minPasswordLengthReached);

  return (
    <Stack style={style} {...systemStyles}>
      <Input
        {...inputProps}
        onChangeText={composeEventHandlers(props.onChangeText, handleOnChangeText)}
        secureTextEntry={!visible}
        autoComplete={autoComplete}
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        rightSection={
          <ActionIcon
            color="primary"
            variant="light"
            radius="xxl"
            size="sm"
            icon={visible ? EyeCloseIcon : EyeIcon}
            onPress={() => setVisible(prev => !prev)}
          />
        }
        // ref: https://github.com/facebook/react-native/issues/21911
        textContentType="oneTimeCode"
      />
      {showStrengthMeter && (
        <>
          {!!passwordStrength.value && (
            <Stack.Horizontal alignItems="center" mx="lg" spacing="sm">
              <Progress fshrink={1} w="100%" size="sm" value={100} color={strengthColor} />
              <Progress
                fshrink={1}
                w="100%"
                size="sm"
                value={passwordStrength?.score > 1 ? 100 : 0}
                color={passwordStrength.score > 1 ? strengthColor : "gray.4"}
              />
              <Progress
                fshrink={1}
                w="100%"
                size="sm"
                value={passwordStrength.score > 2 && minPasswordLengthReached ? 100 : 0}
                color={passwordStrength.score > 2 && minPasswordLengthReached ? strengthColor : "gray.4"}
              />
              <Progress
                fshrink={1}
                w="100%"
                size="sm"
                value={passwordStrength.score > 3 && minPasswordLengthReached ? 100 : 0}
                color={passwordStrength.score > 3 && minPasswordLengthReached ? strengthColor : "gray.4"}
              />
              {showStrengthLabel && (
                <Text
                  lh={14}
                  variant="bodySmall"
                  color={getPasswordStrengthColor(passwordStrength, minPasswordLengthReached)}
                >
                  {getPasswordStrengthLabel(passwordStrength, minPasswordLengthReached)}
                </Text>
              )}
            </Stack.Horizontal>
          )}
          {showSuggestions && (passwordStrength.suggestions.length > 0 || !minPasswordLengthReached) && (
            <Stack mx="lg" spacing={0}>
              {passwordStrength.suggestions.map(suggestion => (
                <Text key={suggestion} variant="bodySmall" color="textSecondary">
                  - {suggestion}
                </Text>
              ))}
              {!minPasswordLengthReached && (
                <Text key="more-char" variant="bodySmall" color="textSecondary">
                  -{" "}
                  {passwordStrength.value.length === 0
                    ? `Add ${RequiredPasswordLength} characters minimum`
                    : i18n.t("ui-core.passwordStrength.minLengthSuggestion", {
                        count: RequiredPasswordLength - passwordStrength.value.length,
                      })}
                </Text>
              )}
            </Stack>
          )}
        </>
      )}
    </Stack>
  );
};

const getPasswordStrengthColor = (result: PasswordStrength, minPasswordLengthReached: boolean): TColor => {
  switch (result.score) {
    case 0:
      return "red";
    case 1:
      return "red";
    case 2:
      return "yellow";
    case 3:
      return minPasswordLengthReached ? "green" : "yellow";
    case 4:
      return minPasswordLengthReached ? "green.9" : "yellow";
    default:
      return "red";
  }
};

export const getPasswordStrengthLabel = (result: PasswordStrength, minPasswordLengthReached: boolean): string => {
  switch (result.score) {
    case 0:
      return i18n.t("ui-core.passwordStrength.weak");
    case 1:
      return i18n.t("ui-core.passwordStrength.weak");
    case 2:
      return i18n.t("ui-core.passwordStrength.fair");
    case 3:
      return minPasswordLengthReached
        ? i18n.t("ui-core.passwordStrength.good")
        : i18n.t("ui-core.passwordStrength.fair");
    case 4:
      return minPasswordLengthReached
        ? i18n.t("ui-core.passwordStrength.strong")
        : i18n.t("ui-core.passwordStrength.fair");
    default:
      return i18n.t("ui-core.passwordStrength.weak");
  }
};

export default PasswordInput;
