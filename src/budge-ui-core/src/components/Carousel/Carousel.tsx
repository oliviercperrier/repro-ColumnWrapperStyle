import { Animated, FlatList, FlatListProps, StyleSheet } from "react-native";
import React, { ReactNode, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import CarouselIndicators from "./CarouselIndicators";
import { Stack, TStackProps } from "../Stack";
import { Box, TBoxProps } from "../Box";
import { CarouselContextProvider, CarouselContextType } from "./Carousel.context";

export interface CarouselRef {
  next: () => void;
  previous: () => void;
}

export type TCarouselProps = Omit<TStackProps, "onLayout" | "ref"> & {
  data: ReactNode[];
  itemContainerProps?: TBoxProps;
  indicatorContainerProps?: TBoxProps;
  showSkip?: boolean;
  listProps?: Omit<FlatListProps<any>, "data" | "renderItem">;
  onSlideChanged?(slideIndex: number): void;
  footerRenderer?: (
    isFirstPage: boolean,
    isLastPage: boolean,
    activeIndex: number,
    prevHander: () => void,
    nextHandler: () => void
  ) => {};
};

const Carousel = forwardRef<CarouselRef, TCarouselProps>(
  (
    {
      showSkip,
      data,
      itemContainerProps,
      indicatorContainerProps,
      footerRenderer,
      onSlideChanged,
      listProps,
      ...props
    },
    ref
  ) => {
    const flatListRef = useRef<FlatList>(null);
    const [width, setWidth] = useState(0);
    const [activeIndex, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const isFirstPage = activeIndex === 0;
    const isLastPage = activeIndex === data.length - 1;

    useEffect(() => {
      if (activeIndex !== 0) {
        setIndex(0);
        scrollX.setValue(0);
      }
    }, [width]);

    const handleOnScroll = (event: any) => {
      Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        {
          useNativeDriver: false,
        }
      )(event);
    };

    const handleNext = () => scrollToIndex(activeIndex + 1);
    const handlePrevious = () => scrollToIndex(activeIndex - 1);
    const handleOnViewableItemsChanged = useRef(({ viewableItems }: any) => {
      setIndex(viewableItems[0].index);
    }).current;

    useImperativeHandle(ref, () => ({
      next: handleNext,
      previous: handlePrevious,
    }));

    const scrollToIndex = (index: number) => {
      if (index < data.length && index >= 0) {
        onSlideChanged?.(index);
        flatListRef?.current?.scrollToIndex({ index });
      }
    };

    const viewabilityConfig = useRef({
      itemVisiblePercentThreshold: 50,
    }).current;

    const memoedContextValue = useMemo<CarouselContextType>(
      () => ({ next: handleNext, previous: handlePrevious }),
      [handleNext, handlePrevious]
    );

    return (
      <Stack spacing={0} onLayout={e => setWidth(e.nativeEvent.layout.width)} {...props}>
        {width && (
          <>
            <CarouselContextProvider value={memoedContextValue}>
              <FlatList
                ref={flatListRef}
                data={data}
                renderItem={({ item }) => (
                  <Box w={width} alignItems="center" {...itemContainerProps}>
                    {item}
                  </Box>
                )}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                viewabilityConfig={viewabilityConfig}
                onViewableItemsChanged={handleOnViewableItemsChanged}
                getItemLayout={(_, index) => ({ length: width, offset: width * index, index })}
                {...listProps}
              />
            </CarouselContextProvider>
            {footerRenderer ? footerRenderer(isFirstPage, isLastPage, activeIndex, handlePrevious, handleNext) : null}
            <Box mt="xl" {...indicatorContainerProps}>
              <CarouselIndicators
                data={data}
                activeIndex={activeIndex}
                scrollX={scrollX}
                width={width}
                showSkip={showSkip}
                scrollToIndex={scrollToIndex}
              />
            </Box>
          </>
        )}
      </Stack>
    );
  }
);

export const useCarousel = () => {
  const ref = useRef<CarouselRef>(null);

  return {
    ref,
    next: () => ref.current?.next(),
    previous: () => ref.current?.previous(),
  };
};

export default Carousel;

const styles = StyleSheet.create({});
