import React, { forwardRef, memo } from "react";
import { View } from "react-native";
import { Box, TBoxProps } from "../Box";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { TModalHeaderProps } from "./Modal.types";

const ModalHeader = forwardRef<View, TModalHeaderProps & TBoxProps>(
  ({ title, titleDescription, withCloseButton, handleClose, ...props }, ref) => (
    <Box
      ref={ref}
      shouldRender={!!title || !!titleDescription || withCloseButton}
      fdir="row"
      alignItems="center"
      justifyContent="between"
      px="xl"
      pt="xl"
      mb="lg"
      {...props}
    >
      <Stack spacing={0} f={1}>
        {typeof title === "string" ? (
          <Text size="lg" fw={600} numberOfLines={2} f={1}>
            {title}
          </Text>
        ) : (
          title
        )}
        {typeof titleDescription === "string" ? <Text numberOfLines={1}>{titleDescription}</Text> : titleDescription}
      </Stack>
      {/**
       * {withCloseButton && <CloseButton size="xs" onPress={handleClose} />}
       */}
    </Box>
  )
);

export default memo(ModalHeader);
