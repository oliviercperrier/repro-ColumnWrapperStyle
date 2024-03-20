import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Pressable } from "../../components/Pressable";
import { CloseIcon, RoundIcon } from "../../components/Icons";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { DEFAULT_ERROR_MSG } from "../../utils/contants";
import { Logo } from "../../components/Logo";
import { Stack } from "../../components/Stack";
import { Box } from "../../components/Box";
import { i18n } from "@budgeinc/budge-ui-utils";
import { useScreenSize } from "@budgeinc/budge-ui-hooks";

export type TErrorPageCode = 404 | 500;

export type TErrorPageProps = {
  onDismiss: () => void;
  errorCode: TErrorPageCode;
  showButton?: boolean;
  showBigCode?: boolean;
  buttonText?: string;
  description?: string;
};

const DEFAULT_PAGE_TITLE: Record<TErrorPageCode, string> = {
  404: i18n.t("ui-core.pages.404.title"),
  500: i18n.t("ui-core.pages.500.title"),
};

const DEFAULT_PAGE_DESCRIPTION: Record<TErrorPageCode, string> = {
  404: i18n.t("ui-core.pages.404.description"),
  500: DEFAULT_ERROR_MSG,
};

const ErrorPage = ({
  errorCode,
  showButton = false,
  showBigCode = true,
  buttonText = "Go to Dashboard",
  description,
  onDismiss,
}: TErrorPageProps) => {
  const { isSmallerThan } = useScreenSize();

  return (
    <Box style={styles.container}>
      <Box style={styles.headerWrapper}>
        <Box style={styles.header}>
          <Logo />
          <Pressable onPress={onDismiss}>
            <RoundIcon icon={CloseIcon} size="md" />
          </Pressable>
        </Box>
      </Box>
      <Box style={isSmallerThan("md") ? styles.designMobile : styles.design}>
        <Svg width="1452" height="1451" viewBox="0 0 1452 1451" fill="none">
          <Path
            opacity="0.3"
            d="M964.159 894.854C1200.26 862.789 1366.21 649.472 1334.83 418.397C1303.44 187.323 1086.61 25.9941 850.509 58.0596C614.413 90.125 448.459 303.442 479.843 534.517C511.226 765.591 728.062 926.92 964.159 894.854Z"
            fill="#730CB6"
          />
          <Path
            opacity="0.1"
            d="M741.025 518.923L179.553 647.638C117.881 661.776 79.3 722.142 93.3806 782.47L221.573 1331.7C235.654 1392.02 297.064 1429.47 358.736 1415.33L920.208 1286.61C981.88 1272.48 1020.46 1212.11 1006.38 1151.78L878.188 602.556C864.107 542.229 802.697 504.785 741.025 518.923Z"
            fill="#730CB6"
          />
        </Svg>
      </Box>
      <Stack h="100%" justifyContent="center" alignItems="center" spacing={40}>
        <Stack alignItems="center">
          {showBigCode && (
            <Text style={styles.errorCode} fw="700">
              {errorCode}
            </Text>
          )}
          <Text variant="titleH3">{DEFAULT_PAGE_TITLE[errorCode]}</Text>
          <Text color="textSecondary" variant="bodyMedium" style={styles.description}>
            {description || DEFAULT_PAGE_DESCRIPTION[errorCode]}
          </Text>
        </Stack>
        {showButton && <Button title={buttonText} color="primary" size="sm" onPress={onDismiss} />}
      </Stack>
    </Box>
  );
};

const styles = StyleSheet.create({
  errorCode: {
    fontSize: 150,
    lineHeight: 150,
  },
  container: {
    height: "100%",
    overflow: "hidden",
    padding: 24,
  },
  headerWrapper: {
    width: "100%",
    alignItems: "center",
    zIndex: 2,
  },
  header: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    top: 0,
    width: "100%",
    maxWidth: 1200,
    justifyContent: "space-between",
  },
  design: { position: "absolute", right: -700, bottom: -700 },
  designMobile: { position: "absolute", height: 600, right: -700, bottom: -300 },
  description: {
    textAlign: "center",
    maxWidth: 400,
  },
});

export default ErrorPage;
