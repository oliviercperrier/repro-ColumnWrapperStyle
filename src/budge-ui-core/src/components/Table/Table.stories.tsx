import { action } from "@storybook/addon-actions";

import React, { useState } from "react";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";
import Table from "./Table";
import { TSortState, TTableProps } from "./types";

type TTablePropsKeys = (keyof TTableProps)[];

const DefaultFields: TTablePropsKeys = ["loading"];

const TableMeta: ComponentMeta<typeof Table> = {
  title: "Data Display/Table",
  component: Table,
  args: {
    variant: "default",
    loading: false,
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default TableMeta;

type TableStory = ComponentStory<typeof Table>;

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

export const Default: TableStory = args => (
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

export const Scroll: TableStory = args => (
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

export const Dark: TableStory = args => (
  <LightWrapper>
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
      expandable={record => <Text>{record.value}</Text>}
    />
  </LightWrapper>
);
Dark.args = { variant: "dark" };

export const WithExpandableRows: TableStory = args => (
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
    />
  </DarkWrapper>
);
WithExpandableRows.args = { expandable: (record: any) => <Text>{record.value}</Text> };

export const Empty: TableStory = args => (
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
    />
  </DarkWrapper>
);
Empty.parameters = {
  controls: {
    include: [...DefaultFields, "local"] as TTablePropsKeys,
  },
};
Empty.args = {
  local: {
    empty: {
      title: "No data found",
      description: "Some other use full description",
    },
  },
};

export const WithSort: TableStory = args => {
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
