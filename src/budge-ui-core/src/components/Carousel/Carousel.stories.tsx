import React from "react";
import { Image } from "react-native";
import Carousel, { useCarousel } from "./Carousel";
import { Button } from "../Button";
import { Stack } from "../Stack";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Data Display/Carousel",
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = () => {
  const { ref, next, previous } = useCarousel();

  return (
    <Stack spacing="xl">
      <Carousel
        ref={ref}
        data={[
          <Image source={{ uri: "https://picsum.photos/300" }} style={{ width: 300, height: 300 }} />,
          <Image source={{ uri: "https://picsum.photos/300" }} style={{ width: 300, height: 300 }} />,
          <Image source={{ uri: "https://picsum.photos/300" }} style={{ width: 300, height: 300 }} />,
          <Image source={{ uri: "https://picsum.photos/300" }} style={{ width: 300, height: 300 }} />,
        ]}
      />
      <Stack.Horizontal justifyContent="center">
        <Button size="sm" color="primary" title="Previous" onPress={previous} />
        <Button size="sm" color="primary" title="Next" onPress={next} />
      </Stack.Horizontal>
    </Stack>
  );
};
