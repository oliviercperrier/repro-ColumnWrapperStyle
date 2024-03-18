import React from "react";
import { Image as ExpoImage, ImageProps as ExpoImageProps, ImageStyle } from "expo-image";
import { TDefaultViewProps, extractViewVariantProps, viewVariant } from "@budgeinc/budge-ui-styling";
import { StyleProp } from "react-native";
import { twMerge } from "tailwind-merge";

export type TImageProps = TDefaultViewProps<
  Omit<ExpoImageProps, "style"> & {
    style?: StyleProp<ImageStyle>;
  }
>;

const Image = ({ className, children, style, ...imageProps }: TImageProps) => {
  const { styleProps, viewVariantProps, rest } = extractViewVariantProps(imageProps);

  return (
    <ExpoImage
      style={styleProps as StyleProp<ImageStyle>}
      className={twMerge(className, viewVariant(viewVariantProps))}
      {...rest}
    />
  );
};

export default Image;
