/* eslint-disable react/no-array-index-key */
import { TNumberSize, useComponentDefaultProps, TScreenSize, useExtractSx } from "@budgeinc/budge-ui-styling";
import React, { Children, ReactElement, forwardRef, memo, useMemo } from "react";
import { View } from "react-native";
import { useScreenSize } from "@budgeinc/budge-ui-hooks";
import { Box, TBoxProps } from "../Box";
import { useStyles } from "./Grid.styles";

export type TGridProps = TBoxProps & {
  gutter?: TNumberSize;
  column: number;
  responsive?: Partial<Record<TScreenSize, number>>;
  grow?: boolean;
  bordered?: boolean;
};

const Grid = forwardRef<View, TGridProps>((props, ref) => {
  const { screenSize } = useScreenSize();
  const {
    gutter = "md",
    grow = false,
    responsive,
    column,
    children,
    sx,
    bordered = false,
    ...rest
  } = useComponentDefaultProps("Gird", {}, props);
  const { nbColumns, childWidth, rootStyle, gutterSize } = useStyles({
    screenSize,
    column,
    gutter,
    responsive,
    bordered,
  });

  const childList = useMemo(() => Children.toArray(children) as ReactElement[], [children]).filter(Boolean);

  const childChunks = useMemo(() => {
    const nbCols = responsive && responsive[screenSize] ? responsive[screenSize] || column : column;

    return chunkArray(childList, nbCols);
  }, [screenSize, nbColumns, childList]);

  return (
    <Box ref={ref} sx={[rootStyle, ...useExtractSx(sx)]} radius="default" {...rest}>
      {childChunks.map((childs, chunkIndex) => (
        <Box
          key={`chunk-${chunkIndex}`}
          fdirection="row"
          sx={theme =>
            bordered
              ? {
                  borderBottomWidth: chunkIndex < childChunks.length - 1 ? 1 : 0,
                  borderColor: theme.palette.border.default,
                }
              : {}
          }
          mb={chunkIndex < childChunks.length - 1 ? gutterSize : 0}
        >
          {childs.map((child, index) => (
            <Box
              key={index}
              w={childWidth}
              maw={child.props?.maw}
              fgrow={grow ? 1 : 0}
              sx={theme =>
                bordered
                  ? {
                      borderLeftWidth: index === 0 ? 0 : 1,
                      borderColor: theme.palette.border.default,
                    }
                  : {}
              }
            >
              <Box mx={gutterSize / 2} f={1}>
                {child}
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
});

const chunkArray = (arr: any[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

export default memo(Grid);
