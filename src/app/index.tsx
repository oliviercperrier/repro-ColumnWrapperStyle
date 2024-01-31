import { Link } from "expo-router";
import React from "react";
import { FlatList, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import Text from "@/components/Text";
import { Circle, Path, Svg } from "react-native-svg";
import { Stack } from "@/components/Stack";
import { Box } from "@/components/Box";
import Spinner from "@/components/Spinner/Spinner";
import Input from "@/components/Input/Input";
import SvgIcon from "@/components/SvgIcon/SvgIcon";

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
    <Stack p="md">
      <Input label="Account Id" />
      <Input label="Not Editable" editable={false} />
      <Input label="Disabled" disabled />
      <Input label="Errored" errored />
      <SvgIcon color="blue">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.06296 8.29959C4.70713 8.58429 4.5 9.01524 4.5 9.47086V18.5C4.5 18.9142 4.83579 19.25 5.25 19.25H9.75C10.1642 19.25 10.5 18.9142 10.5 18.5V14C10.5 13.5857 10.8358 13.25 11.25 13.25H12.75C13.1642 13.25 13.5 13.5857 13.5 14V18.5C13.5 18.9142 13.8358 19.25 14.25 19.25H18.75C19.1642 19.25 19.5 18.9142 19.5 18.5V9.47086C19.5 9.01524 19.2928 8.58429 18.937 8.29959L12.937 3.4996C12.3892 3.06133 11.6107 3.06133 11.063 3.4996L5.06296 8.29959Z"
        />
      </SvgIcon>
    </Stack>
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
