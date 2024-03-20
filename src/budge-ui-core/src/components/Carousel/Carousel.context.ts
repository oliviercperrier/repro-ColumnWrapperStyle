import React, { useContext } from "react";

export type CarouselContextType = {
  next(): void;
  previous(): void;
};

export const CarouselContext = React.createContext<CarouselContextType>(null as any);

export const CarouselContextProvider = CarouselContext.Provider;

export const useCarouselContext = () => useContext(CarouselContext);
