import React, { useEffect, useState } from "react";

import { action } from "@storybook/addon-actions";
import List, { TListProps } from "./List";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { Divider } from "../Divider";
import { Spinner } from "../Loader";
import InfiniteScrollList from "./InfiniteScrollList";
import { useInfiniteScrollList } from "./useInfiniteScrollList";
import { Meta, StoryFn } from "@storybook/react";

const meta = {
  title: "Data Display/List",
  component: List,
  args: {},
}satisfies Meta<typeof List>;

export default meta;

type Story = StoryFn<typeof List>;

export const Default: Story = ({args}) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<DataType[]>([]);

  const makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?results=20`;
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setResults(res.results);
        setLoading(false);
      })
      .catch(error => setLoading(false));
  };

  useEffect(makeRemoteRequest, []);

  return (
    <Box maw={500} mah={450}>
      {loading ? (
        <Spinner size={24} />
      ) : (
        <List
          p="xl"
          bg="gray.0"
          data={results}
          keyExtractor={item => item.email}
          renderItem={({ item }) => (
            <Stack alignItems="flex-start">
              <Text>{`${item.name.first} ${item.name.last}`}</Text>
              <Text>{item.email}</Text>
            </Stack>
          )}
          ItemSeparatorComponent={() => <Divider size="xs" />}
        />
      )}
    </Box>
  );
};

type DataType = {
  email: string;
  name: {
    first: string;
    last: string;
  };
};

export const InfiniteScroll: Story = ({args}) => {
  const { requestState, onEndReached } = useInfiniteScrollList<DataType>({
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
    <InfiniteScrollList<DataType>
      p="xl"
      bg="gray.0"
      maw={450}
      mah={500}
      requestState={requestState}
      onEndReached={onEndReached}
      keyExtractor={item => item.email}
      ItemSeparatorComponent={() => <Divider size="xs" />}
      renderItem={({ item }) => (
        <Stack alignItems="flex-start">
          <Text>{`${item.name.first} ${item.name.last}`}</Text>
          <Text>{item.email}</Text>
        </Stack>
      )}
    />
  );
};
