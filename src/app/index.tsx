import { Link } from "expo-router";
import React, { forwardRef, memo } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Path, Svg } from "react-native-svg";
import Stack from "@/budge-ui-core/src/components/Stack/Stack";
import Button from "@/budge-ui-core/src/components/Button/Button";
import SvgIcon, { TSvgIconProps } from "@/budge-ui-core/src/components/SvgIcon/SvgIcon";
import Table from "@/budge-ui-core/src/components/Table/Table";
import { Box } from "@/budge-ui-core/src/components/Box";

export default function Page() {
  return (
    <Box h100>
      <Header />
      <Content />
      <Footer />
    </Box>
  );
}

function Content() {
  return (
    <Box p="xl" h100 className="bg-gray-1">
      <Table />
    </Box>
  );
}

const Icon = memo(
  forwardRef<Svg, TSvgIconProps>((props, ref) => {
    return (
      <SvgIcon ref={ref} viewBox="0 0 24 24" {...props}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.06296 8.29959C4.70713 8.58429 4.5 9.01524 4.5 9.47086V18.5C4.5 18.9142 4.83579 19.25 5.25 19.25H9.75C10.1642 19.25 10.5 18.9142 10.5 18.5V14C10.5 13.5857 10.8358 13.25 11.25 13.25H12.75C13.1642 13.25 13.5 13.5857 13.5 14V18.5C13.5 18.9142 13.8358 19.25 14.25 19.25H18.75C19.1642 19.25 19.5 18.9142 19.5 18.5V9.47086C19.5 9.01524 19.2928 8.58429 18.937 8.29959L12.937 3.4996C12.3892 3.06133 11.6107 3.06133 11.063 3.4996L5.06296 8.29959Z"
        />
      </SvgIcon>
    );
  })
);

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }} className="bg-red">
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
        <Link className="font-bold flex-1 items-center justify-center" href="#">
          ACME
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link className="text-md font-medium hover:underline web:underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-md font-medium hover:underline web:underline-offset-4" href="#">
            Product
          </Link>
          <Link className="text-md font-medium hover:underline web:underline-offset-4" href="#">
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
    <View className="flex shrink-0 bg-gray-100 native:hidden" style={{ paddingBottom: bottom }}>
      <View className="py-6 flex-1 items-start px-4 md:px-6 "></View>
    </View>
  );
}
