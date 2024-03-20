
import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { EmailSchema, PasswordSchema, yup } from "@budgeinc/budge-ui-utils";
import { View } from "react-native";
import { Collapse } from "../Collapse";
import { Text } from "../Text";
import { TTabsProps } from "./Tabs.types";
import TabsPane from "./Tabs.Pane";
import Tabs from "./Tabs";
import { useTabsPaneContext } from "./TabsPane.context";

import { Button } from "../Button";
import { FormProvider, FormItem } from "../Form";
import { Input, PasswordInput } from "../Input";
import { Stack } from "../Stack";
import { modalManager } from "../ModalManager";
import { Table } from "../Table";

type TTabsPropsKeys = (keyof TTabsProps)[];

const DefaultFields: TTabsPropsKeys = ["size", "activeColor", "borderWidth"];

const TabsMeta: ComponentMeta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  args: {
    size: "default",
    borderWidth: 1,
    activeColor: "primary",
  },
  argTypes: {},
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default TabsMeta;

type TabsStory = ComponentStory<typeof Tabs>;

export const Default: TabsStory = args => {
  const [activeKey, setActiveKey] = useState<string>("1");

  return (
    <Tabs {...args} activeKey={activeKey} defaultActiveKey="1" onChange={setActiveKey}>
      <TabsPane tabKey="1" title="Tab 1">
        <TabContent />
      </TabsPane>
      <TabsPane tabKey="2" title="Tab 2">
        <TabContent2 />
      </TabsPane>
      <TabsPane tabKey="3" title="Tab 3">
        <Text>Tab content 3</Text>
      </TabsPane>
      <TabsPane tabKey="4" title="Tab 4">
        <Table
          columns={[{ id: "name", title: "name", render: record => <Text>{record.name}</Text> }]}
          data={[{ name: "olivier" }, { name: "olivier" }, { name: "olivier" }]}
        />
      </TabsPane>
    </Tabs>
  );
};

const TabContent2 = () => (
  <Collapse initialOpen header={<Text>Allo</Text>} variant="dark">
    <Text>Content</Text>
  </Collapse>
);

const TabContent = () => {
  const navigateRef = useRef<() => void>();
  const context = useTabsPaneContext();
  const [formData, setFormData] = useState({
    email: "olivier.castro-perrier@budge.app",
    password: "",
  });

  const form = useFormik({
    initialValues: formData,
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      email: EmailSchema().required(),
      password: PasswordSchema().required(),
    }),
    onSubmit: async values => {
      setFormData(values);
      navigateRef.current?.();
    },
  });

  React.useImperativeHandle(context.tabRef, () => ({
    canNavigate: async navigateToNextTab => {
      navigateRef.current = navigateToNextTab;

      if (form.dirty) {
        modalManager.openConfirm({
          confirmProps: {
            title: "Save Changes",
          },
          onConfirm: () => {
            form.submitForm();
          },
          children: "You have unsaved change",
        });
        return false;
      }

      return true;
    },
  }));

  return (
    <View style={{ maxWidth: 500 }}>
      <FormProvider value={form}>
        <Stack spacing="md">
          <FormItem name="email">
            <Input label="Email" />
          </FormItem>
          <FormItem name="password">
            <PasswordInput label="Password" showStrengthMeter />
          </FormItem>
          <Button
            mt="lg"
            loading={form.isValidating || form.isSubmitting}
            onPress={() => form.submitForm()}
            title="Submit"
            color="primary"
            disabled={!form.dirty}
          />
        </Stack>
      </FormProvider>
    </View>
  );
};

export const FullWidth: TabsStory = args => {
  const [activeKey, setActiveKey] = useState<string>("1");

  return (
    <Tabs
      {...args}
      activeKey={activeKey}
      defaultActiveKey="1"
      onChange={setActiveKey}
      scrollEnabled={false}
      tabBarItemProps={{
        f: 1,
        alignItems: "center",
      }}
    >
      <TabsPane tabKey="1" title="Tab 1">
        <Text>Tab content 3</Text>
      </TabsPane>
      <TabsPane tabKey="2" title="Tab 2">
        <Text>Tab content 4</Text>
      </TabsPane>
    </Tabs>
  );
};

export const WithExtra: TabsStory = args => {
  const [activeKey, setActiveKey] = useState<string>("1");

  return (
    <Tabs
      {...args}
      activeKey={activeKey}
      defaultActiveKey="1"
      onChange={setActiveKey}
      borderWidth={0}
      tabBarExtra={<Button size="xs" title="Action" color="primary" variant="filled" />}
    >
      <TabsPane tabKey="1" title="Tab 1">
        <Text>Tab content 1</Text>
      </TabsPane>
      <TabsPane tabKey="2" title="Tab 2">
        <Text>Tab content 2</Text>
      </TabsPane>
    </Tabs>
  );
};
