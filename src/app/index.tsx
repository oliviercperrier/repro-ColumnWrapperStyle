import { Link } from "expo-router";
import React from "react";
import { FlatList, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import Text from "@/components/Text";
import { Circle, Path, Svg } from "react-native-svg";
import SvgIcon from "@/components/SvgIcon";
import { Stack } from "@/components/Stack";
import { Box } from "@/components/Box";
import Spinner from "@/components/Spinner/Spinner";

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
    <Box
      h={500}
      alignItems="center"
      justifyContent="center"
      className="disabled"
    >
      <Spinner color="green" />
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
