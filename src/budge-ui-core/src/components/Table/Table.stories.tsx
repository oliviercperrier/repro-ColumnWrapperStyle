import { action } from "@storybook/addon-actions";

import React, { useState } from "react";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";
import Table from "./Table";
import { TSortState, TTableProps } from "./types";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Data Display/Table",
  component: Table,
  args: {
    variant: "default",
    loading: false,
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryFn<typeof Table>;

const DarkWrapper = ({ children }: any) => (
  <Box
    m={0}
    p={24}
    sx={theme => ({
      backgroundColor: theme.palette.background.default,
    })}
  >
    {children}
  </Box>
);

const LightWrapper = ({ children }: any) => (
  <Box
    m={0}
    p={24}
    sx={theme => ({
      backgroundColor: theme.white,
    })}
  >
    {children}
  </Box>
);

export const Default: Story = (args) => (
  <DarkWrapper>
    <Table
      {...args}
      columns={[
        {
          id: "col1",
          title: "Colum1",
          render: () => <Text>column1</Text>,
        },
        {
          id: "col2",
          title: "Colum2",
          render: () => <Text>column2</Text>,
        },
        {
          id: "col3",
          title: "Colum3",
          render: () => <Text>column3</Text>,
        },
        {
          id: "col4",
          title: "Colum4",
          render: () => <Text>column4</Text>,
        },
        {
          title: "",
          id: "col5",
          align: "flex-end",
          render: () => (
            <Button
              onPress={action("onPress")}
              alignSelf="flex-end"
              variant="filled"
              color="primary"
              size="xs"
              title="Action"
            />
          ),
        },
      ]}
      data={[
        {
          value: "1",
        },
        {
          value: "2",
        },
      ]}
    />
  </DarkWrapper>
);

export const Scroll: Story = (args) => (
  <DarkWrapper>
    <Table
      {...args}
      style={{ maxHeight: 475 }}
      columns={[
        {
          id: "col1",
          title: "Colum1",
          render: () => <Text>column1</Text>,
        },
        {
          id: "col2",
          title: "Colum2",
          render: () => <Text>column2</Text>,
        },
        {
          id: "col3",
          title: "Colum3",
          render: () => <Text>column3</Text>,
        },
        {
          id: "col4",
          title: "Colum4",
          render: () => <Text>column4</Text>,
        },
        {
          title: "",
          id: "col5",
          align: "flex-end",
          render: () => (
            <Button
              onPress={action("onPress")}
              alignSelf="flex-end"
              variant="filled"
              color="primary"
              size="xs"
              title="Action"
            />
          ),
        },
      ]}
      data={[
        {
          value: "1",
        },
        {
          value: "2",
        },
        {
          value: "2",
        },
        {
          value: "2",
        },
        {
          value: "2",
        },
        {
          value: "2",
        },
        {
          value: "2",
        },
        {
          value: "2",
        },
        {
          value: "2",
        },
        {
          value: "2",
        },
        {
          value: "2",
        },
        {
          value: "2",
        },
        {
          value: "2",
        },
        {
          value: "2",
        },
      ]}
    />
  </DarkWrapper>
);

export const Dark: Story = (args) => (
  <LightWrapper>
    <Table
      {...args}
      variant="dark"
      columns={[
        {
          id: "col1",
          title: "Colum1",
          render: () => <Text>column1</Text>,
        },
        {
          id: "col2",
          title: "Colum2",
          render: () => <Text>column2</Text>,
        },
        {
          id: "col3",
          title: "Colum3",
          render: () => <Text>column3</Text>,
        },
        {
          id: "col4",
          title: "Colum4",
          render: () => <Text>column4</Text>,
        },
        {
          title: "",
          id: "col5",
          align: "flex-end",
          render: () => (
            <Button
              onPress={action("onPress")}
              alignSelf="flex-end"
              variant="filled"
              color="primary"
              size="xs"
              title="Action"
            />
          ),
        },
      ]}
      data={[
        {
          value: "1",
        },
        {
          value: "2",
        },
      ]}
      expandable={record => <Text>{record.value}</Text>}
    />
  </LightWrapper>
);

export const WithExpandableRows: Story = (args) => (
  <DarkWrapper>
    <Table
      {...args}
      columns={[
        {
          id: "col1",
          title: "Colum1",
          render: () => <Text>column1</Text>,
        },
        {
          id: "col2",
          title: "Colum2",
          render: () => <Text>column2</Text>,
        },
        {
          id: "col3",
          title: "Colum3",
          render: () => <Text>column3</Text>,
        },
        {
          id: "col4",
          title: "Colum4",
          render: () => <Text>column4</Text>,
        },
        {
          title: "",
          id: "col5",
          align: "flex-end",
          render: () => (
            <Button
              onPress={action("onPress")}
              alignSelf="flex-end"
              variant="filled"
              color="primary"
              size="xs"
              title="Action"
            />
          ),
        },
      ]}
      data={[
        {
          id: '"',
          value: "Expandable content 1",
        },
        {
          id: '"',
          value: "Expandable content 2",
        },
      ]}
      expandable={(record: any) => <Text>{record.value}</Text>}
    />
  </DarkWrapper>
);

export const Empty: Story = (args) => (
  <DarkWrapper>
    <Table
      {...args}
      columns={[
        {
          id: "col1",
          title: "Colum1",
          render: () => <Text>column1</Text>,
        },
        {
          id: "col2",
          title: "Colum2",
          render: () => <Text>column2</Text>,
        },
        {
          id: "col3",
          title: "Colum3",
          render: () => <Text>column3</Text>,
        },
        {
          id: "col4",
          title: "Colum4",
          render: () => <Text>column4</Text>,
        },
      ]}
      data={[]}
      local={{
        empty: {
          title: "No data found",
          description: "Some other use full description",
        },
      }}
    />
  </DarkWrapper>
);

export const WithSort: Story = (args) => {
  const [sort, setSort] = useState<TSortState | null>({
    columnId: "col1",
    direction: "asc",
  });

  return (
    <DarkWrapper>
      <Table
        {...args}
        sort={sort}
        onSort={s => {
          setSort(s);
          action("onSort")(s);
        }}
        columns={[
          {
            id: "col1",
            title: "Colum1",
            maxWidth: 100,
            render: () => <Text>column1</Text>,
            sortable: true,
          },
          {
            id: "col2",
            title: "Colum2",
            render: () => <Text>column2</Text>,
            sortable: true,
          },
          {
            id: "col3",
            title: "Colum3",
            render: () => <Text>column3</Text>,
          },
          {
            id: "col4",
            title: "Colum4",
            render: () => <Text>column4</Text>,
          },
        ]}
        data={[
          {
            value: "1",
          },
          {
            value: "2",
          },
        ]}
      />
    </DarkWrapper>
  );
};
