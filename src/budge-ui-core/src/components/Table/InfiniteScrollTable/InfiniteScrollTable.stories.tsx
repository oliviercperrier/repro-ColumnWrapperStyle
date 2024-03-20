import { action } from "@storybook/addon-actions";

import React from "react";
import { Box } from "../../Box";
import { Button } from "../../Button";
import { Text } from "../../Text";
import InfiniteScrollTable, { TInfiniteScrollTableProps } from "./InfiniteScrollTable";
import { Stack } from "../../Stack";
import { useInfiniteScrollList } from "../../List/useInfiniteScrollList";

type TInfiniteScrollTablePropsKeys<T> = (keyof TInfiniteScrollTableProps<T>)[];

const DefaultFields: TInfiniteScrollTablePropsKeys<any> = [];

const InfiniteScrollTableMeta: ComponentMeta<typeof InfiniteScrollTable> = {
  title: "Data Display/Table",
  component: InfiniteScrollTable,
  args: {
    variant: "default",
  },
  parameters: {
    controls: {
      include: DefaultFields,
    },
  },
};

export default InfiniteScrollTableMeta;

type InfiniteScrollTableStory = ComponentStory<typeof InfiniteScrollTable>;

const DarkWrapper = ({ children }: any) => (
  <Box
    m={0}
    p={24}
    f={1}
    sx={theme => ({
      backgroundColor: theme.palette.background.default,
    })}
  >
    {children}
  </Box>
);

type DataType = {
  email: string;
  name: {
    first: string;
    last: string;
  };
};

export const InfiniteScroll: InfiniteScrollTableStory = () => {
  const { requestState, onEndReached, forceRefresh } = useInfiniteScrollList<DataType>({
    onFetch: async ({ page, pageSize }) => {
      action("onFetch")({
        page,
      });
      return fetch(`https://randomuser.me/api/?seed=1&page=${page}&results=${pageSize}`).then(res => res.json());
    },
    onError: action("onError"),
    onLoading: action("onLoading"),
    onDataChange: action("onDataChange"),
  });

  return (
    <Stack mah={500}>
      <Button title="Refresh" onPress={forceRefresh} />
      <DarkWrapper>
        <InfiniteScrollTable<DataType>
          pageSize={20}
          keyExtractor={(item, index) => index + item.email}
          requestState={requestState}
          onEndReached={onEndReached}
          columns={[
            {
              id: "email",
              title: "Email",
              maxWidth: 150,
              render: record => <Text numberOfLines={1}>{record.email}</Text>,
            },
            {
              id: "fn",
              title: "First Name",
              render: record => <Text>{record.name.first}</Text>,
            },
            {
              id: "ln",
              title: "Last Name",
              render: record => <Text>{record.name.last}</Text>,
            },
          ]}
        />
      </DarkWrapper>
    </Stack>
  );
};
