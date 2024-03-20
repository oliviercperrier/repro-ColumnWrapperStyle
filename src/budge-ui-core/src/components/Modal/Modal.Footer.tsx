import React, { forwardRef, memo } from "react";
import { i18n } from "@budgeinc/budge-ui-utils";
import { View } from "react-native";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { TModalFooterProps } from "./Modal.types";
import { Box } from "../Box";

const ModalFooter = forwardRef<View, TModalFooterProps>(
  ({ onOk, onClose, okButtonProps, cancelButtonProps, footer }, ref) => (
    <Box ref={ref} shouldRender={footer !== null}>
      <Stack.Horizontal mt="xl" px="xl" pb="xl" alignItems="center" justifyContent="flex-end" fwrap="wrap">
        {footer && footer !== true ? (
          footer
        ) : (
          <>
            <Button
              key="cancel"
              title={i18n.t("cancel")}
              variant="default"
              onPress={onClose}
              size="sm"
              {...cancelButtonProps}
            />
            <Button
              key="ok"
              title={i18n.t("ok")}
              color="primary"
              variant="filled"
              onPress={onOk}
              size="sm"
              {...okButtonProps}
            />
          </>
        )}
      </Stack.Horizontal>
    </Box>
  )
);

export default memo(ModalFooter);
