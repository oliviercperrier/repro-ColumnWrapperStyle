import { View } from "react-native";
import React, { Children, createRef, forwardRef, useEffect, useMemo, useState } from "react";
import { TTabsPaneChildElementType, TTabsPaneRef, TTabsProps } from "./Tabs.types";
import TabsPane from "./Tabs.Pane";
import TabsBar from "./Tabs.Bar";
import { Box } from "../Box";
import { Lazy } from "../Lazy";

const Tabs = forwardRef<View, TTabsProps>(
  (
    {
      size = "default",
      defaultActiveKey,
      activeKey,
      children,
      onChange,
      contentContainerProps,
      tabBarItemProps,
      borderWidth = 1,
      activeBorderWidth = 2,
      scrollEnabled = true,
      activeColor,
      tabBarExtra,
      forceRender = true,
      ...boxProps
    },
    ref
  ) => {
    const [localActiveKey, setActiveKey] = useState(defaultActiveKey);
    const panes = Children.toArray(children);

    const handleChange = (newActiveKey: string) => {
      onChange?.(newActiveKey);
      setActiveKey(newActiveKey);
    };

    const parsedChildren = useMemo(
      () =>
        (panes.filter(pane => React.isValidElement(pane)) as TTabsPaneChildElementType[]).filter(
          pane => pane.type === TabsPane
        ),
      []
    );

    const paneRefs = useMemo(
      () =>
        parsedChildren.reduce<Record<string, React.RefObject<TTabsPaneRef>>>((a, b) => {
          a[b.props.tabKey] = createRef<TTabsPaneRef>();
          return a;
        }, {}),
      []
    );

    useEffect(() => {
      if (activeKey && activeKey !== localActiveKey) {
        if (parsedChildren.find(({ props }) => props.tabKey === activeKey)) {
          setActiveKey(activeKey);
        } else if (parsedChildren.length) {
          setActiveKey(parsedChildren[0].props.tabKey);
        }
      }
    }, [activeKey]);

    return (
      <Box ref={ref} f={1} {...boxProps}>
        <TabsBar
          activeKey={localActiveKey}
          paneRefs={paneRefs}
          parsedChildren={parsedChildren}
          size={size}
          activeColor={activeColor}
          borderWidth={borderWidth}
          activeBorderWidth={activeBorderWidth}
          onChange={handleChange}
          tabBarItemProps={tabBarItemProps}
          scrollEnabled={scrollEnabled}
          extra={tabBarExtra}
        />
        <Box f={1} mt="xl" {...contentContainerProps}>
          {parsedChildren.map(({ props }) => {
            const visible = props.tabKey === localActiveKey;

            if (!visible && forceRender) return null;

            return (
              <Lazy key={props.tabKey} visible={visible}>
                <TabsPane
                  style={{
                    display: visible ? "flex" : "none",
                    ...(props.flex === undefined || props.flex ? { flex: 1 } : undefined),
                  }}
                  tabRef={paneRefs[props.tabKey]}
                  {...props}
                />
              </Lazy>
            );
          })}
        </Box>
      </Box>
    );
  }
);

export default Tabs;
