import { BaseComponentProps, useExtractSx } from "@budgeinc/budge-ui-styling";
import React, { useEffect, useState } from "react";
import { ViewStyle } from "react-native";
import { Box } from "../Box";
import { Divider } from "../Divider";
import { Dropdown } from "../Dropdown";
import { ChevronRightIcon, MoreDotsIcon } from "../Icons";
import { Pressable } from "../Pressable";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { BreadcrumbRoute, TBreadcrumbProps } from "./Breadcrumb.types";
import { List } from "../List";

type BreadcrumbRouteWithChild = BreadcrumbRoute & {
  children?: BreadcrumbRoute[];
};

interface BreadcrumbItemProps extends BaseComponentProps<ViewStyle> {
  isCurrent: boolean;
  onPress: () => void;
  route: BreadcrumbRoute;
}

const BREADCRUMB_ITEM_LIMIT = 4;

const getLinkTitle = (route: BreadcrumbRoute) =>
  route.meta?.title ? route.meta.title : route.pathname.replaceAll("/", " ").replaceAll("-", " ").trim();

const Breadcrumb = ({ stack = [], onLinkClick, ...rest }: TBreadcrumbProps) => {
  const [open, setOpen] = useState(false);
  const [localStack, setLocalStack] = useState<BreadcrumbRouteWithChild[]>(stack);

  useEffect(() => {
    let routeStack: BreadcrumbRouteWithChild[] = JSON.parse(JSON.stringify(stack));
    const overLimitCount = stack.length - BREADCRUMB_ITEM_LIMIT;

    if (overLimitCount > 0) {
      const children = routeStack.slice(1, overLimitCount + 2);

      routeStack.splice(1, children.length, {
        pathname: "",
        children,
      });
    }

    setLocalStack(routeStack);
  }, [stack]);

  if (!stack.length) {
    return null;
  }

  return (
    <Stack.Horizontal {...rest} sx={[{ alignItems: "center" }, ...useExtractSx(rest.sx)]}>
      {localStack.map((route, index) => {
        const isCurrent = index === localStack.length - 1;

        return (
          <Stack.Horizontal alignItems="center" key={`${index}-${route.pathname}`}>
            {route.children?.length ? (
              <Dropdown
                visible={open}
                hoverEffect
                onVisibleChange={setOpen}
                anchor={
                  <Box>
                    <MoreDotsIcon color="gray.6" size={20} />
                  </Box>
                }
                overlay={
                  <List
                    data={route.children}
                    p="md"
                    renderItem={({ item }) => (
                      <BreadcrumbItem
                        route={item}
                        isCurrent={isCurrent}
                        onPress={() => {
                          setOpen(false);
                          onLinkClick(item.pathname + item.hash);
                        }}
                      />
                    )}
                    ItemSeparatorComponent={() => <Divider spacing="md" />}
                  />
                }
              />
            ) : (
              <BreadcrumbItem
                route={route}
                isCurrent={isCurrent}
                onPress={() => onLinkClick(route.pathname + route.hash)}
              />
            )}
            {!isCurrent && <ChevronRightIcon color="gray.4" size={20} />}
          </Stack.Horizontal>
        );
      })}
    </Stack.Horizontal>
  );
};

const BreadcrumbItem = ({ isCurrent, route, onPress, style }: BreadcrumbItemProps) => (
  <Pressable withPressEffect={isCurrent} noCursor={isCurrent} onPress={isCurrent ? undefined : onPress} style={style}>
    <Text tt="capitalize" selectable={false} color={isCurrent ? "textSecondary" : "dark.4"}>
      {getLinkTitle(route)}
    </Text>
  </Pressable>
);

export default Breadcrumb;
