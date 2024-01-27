import { Link } from "expo-router";
import React from "react";
import { FlatList, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import Text from "@/components/Text";
import Box from "@/components/Box";
import { Circle, Path, Svg } from "react-native-svg";
import SvgIcon from "@/components/SvgIcon";

export default function Page() {
  return (
    <View>
      <Header />
      <Content />
      <Footer />
    </View>
  );
}

const button = tv({
  slots: {
    root: "translate-y-0 active:translate-y-px rounded-md",
    text: "",
  },
  variants: {
    size: {
      xs: {
        root: "px-2 py-1",
        text: "text-xs",
      },
      sm: {
        root: "px-3 py-2",
        text: "text-sm",
      },
      md: {
        root: "px-4 py-3",
        text: "text-base",
      },
    },
    variant: {
      filled: "",
      outlined: "",
      subtle: "",
    },
    color: {
      primary: "",
      secondary: "",
      success: "",
    },
  },
  compoundVariants: [
    {
      variant: "filled",
      color: "primary",
      className: {
        root: "bg-blue border border-blue hover:bg-blue-600 hover:border-blue-600",
        text: "text-white",
      },
    },
    {
      variant: "outlined",
      color: "primary",
      className: {
        root: "bg-white border border-[#5314c7] active:bg-[#d6a2131a]",
        text: "text-blue",
      },
    },
    {
      variant: "subtle",
      color: "primary",
      className: {
        root: "bg-white border border-white hover:bg-blue/15",
        text: "text-blue",
      },
    },
  ],
});

function Content() {
  return (
    <Box bg="water" w={500} className="disabled">
      <Text size="2xl" ml="2xl" color="white" tdl="underline">
        Allo
      </Text>
      <Pressable disabled>
        <SvgIcon
          className="animate-spin text-white"
          fill="red"
          viewBox="0 0 24 24"
          size="2xl"
        >
          <Circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
            opacity={0.25}
          ></Circle>
          <Path
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            opacity={0.75}
          ></Path>
        </SvgIcon>
      </Pressable>
    </Box>
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }} className="bg-red">
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
        <Link className="font-bold flex-1 items-center justify-center" href="#">
          ACME
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="#"
          >
            Product
          </Link>
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
        </View>
      </View>
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex shrink-0 bg-gray-100 native:hidden"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 flex-1 items-start px-4 md:px-6 "></View>
    </View>
  );
}
