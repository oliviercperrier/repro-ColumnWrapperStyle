import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import Text from "../Text/Text";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { ScrollView } from "react-native";
import Button from "../Button/Button";

const data = [
  {
    firstName: "Olivier",
    lastName: "Perrier",
    birthdate: "16 mai",
    age: 28,
  },
  {
    firstName: "David",
    lastName: "Perrier",
    birthdate: "11 juin",
    age: 30,
  },
  {
    firstName: "Lucie",
    lastName: "Perrier",
    birthdate: "24 mai",
    age: 61,
  },
  {
    firstName: "Lucie",
    lastName: "Perrier",
    birthdate: "24 mai",
    age: 61,
  },
  {
    firstName: "Lucie",
    lastName: "Perrier",
    birthdate: "24 mai",
    age: 61,
  },
  {
    firstName: "Lucie",
    lastName: "Perrier",
    birthdate: "24 mai",
    age: 61,
  },
  {
    firstName: "Lucie",
    lastName: "Perrier",
    birthdate: "24 mai",
    age: 61,
  },
  {
    firstName: "Lucie",
    lastName: "Perrier",
    birthdate: "24 mai",
    age: 61,
  },
  {
    firstName: "Lucie",
    lastName: "Perrier",
    birthdate: "24 mai",
    age: 61,
  },
  {
    firstName: "Lucie",
    lastName: "Perrier",
    birthdate: "24 mai",
    age: 61,
  },
  {
    firstName: "Lucie",
    lastName: "Perrier",
    birthdate: "24 mai",
    age: 61,
  },
  {
    firstName: "Lucie",
    lastName: "Perrier",
    birthdate: "24 mai",
    age: 61,
  },
  {
    firstName: "Lucie",
    lastName: "Perrier asdjajsdn amsd aksdjka sdaksj daskd k",
    birthdate: "24 mai",
    age: 61,
  },
];

const Table = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    state: { sorting },
    columns: [
      {
        accessorKey: "firstName",
        header: "First Name",
        cell: cell => <Text>{cell.getValue()}</Text>,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        cell: cell => <Text>{cell.getValue()}</Text>,
      },
      {
        accessorKey: "birthdate",
        header: "Birthdate",
        cell: cell => <Text>{cell.getValue()}</Text>,
      },
      {
        accessorKey: "age",
        header: "Age",
        cell: cell => <Text>{cell.getValue()}</Text>,
      },
    ],
    manualSorting: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: e => {
      console.log("old", sorting);
      if (typeof e === "function") {
        const a = e(sorting);
        setSorting(a);
        console.log(a);
      }
    },
    defaultColumn: {
      minSize: 0,
      size: 0,
    },
  });

  return (
    <Box className="max-w-full overflow-x-scroll overflow-y-hidden">
      <Box radius="md" overflow="hidden" w100>
        {table.getHeaderGroups().map(headerGroup => (
          <Stack.Horizontal key={headerGroup.id} px="lg">
            {headerGroup.headers.map(header => (
              <Box
                key={header.id}
                w={header.column.columnDef.size}
                miw={header.column.columnDef.minSize}
                maw={header.column.columnDef.maxSize}
                py="md"
                f={1}
              >
                <Text color="secondary" size="xs">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getCanSort() ? (
                    <Button title="sort" onPress={header.column.getToggleSortingHandler()} />
                  ) : null}
                </Text>
              </Box>
            ))}
          </Stack.Horizontal>
        ))}
        <Stack spacing="sm">
          {table.getRowModel().rows.map(row => (
            <Stack.Horizontal key={row.id} bg="white" radius="lg" px="lg">
              {row.getVisibleCells().map(cell => {
                return (
                  <Box
                    key={cell.id}
                    py="lg"
                    f={1}
                    w={cell.column.columnDef.size}
                    miw={cell.column.columnDef.minSize}
                    maw={cell.column.columnDef.maxSize}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Box>
                );
              })}
            </Stack.Horizontal>
          ))}
        </Stack>
      </Box>
      <Text>{table.getState().pagination.pageIndex + 1}</Text>
      <Text>{table.getState().pagination.pageSize}</Text>
      <Button title="Next" onPress={table.nextPage} />
    </Box>
  );
};

export default Table;
