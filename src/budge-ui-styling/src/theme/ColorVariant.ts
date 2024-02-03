import { bgColorVariants } from "@/budge-ui-styling/src/theme/BudgeBaseVariants";

export type TViewColorVariant = "filled" | "light" | "outlined" | "subtle" | "default" | "defaultBordered";

export const viewColorVariant: {
  variants: {
    variant: Record<TViewColorVariant, string>;
    color: typeof bgColorVariants;
    hoverEffect: {
      true: "";
    };
  };
  compoundVariants: {
    variant: TViewColorVariant[] | TViewColorVariant;
    color?: (keyof typeof bgColorVariants)[] | keyof typeof bgColorVariants;
    hoverEffect?: boolean;
    className: {
      base?: string;
      text?: string;
      icon?: string;
    };
  }[];
} = {
  variants: {
    variant: {
      filled: "",
      light: "",
      outlined: "",
      subtle: "",
      default: "",
      defaultBordered: "",
    },
    color: bgColorVariants,
    hoverEffect: {
      true: "",
    },
  },
  compoundVariants: [
    // Default
    {
      variant: "default",
      className: {
        base: "bg-gray-2 border border-transparent",
        text: "text-default",
        icon: "fill-dark",
      },
    },
    {
      variant: "default",
      hoverEffect: true,
      className: {
        base: "active:bg-gray-3 hover:bg-gray-3",
      },
    },
    {
      variant: "defaultBordered",
      className: {
        base: "bg-white border border-dark-2",
        text: "text-dark",
        icon: "fill-dark",
      },
    },
    {
      variant: "defaultBordered",
      hoverEffect: true,
      className: {
        base: "active:bg-gray-1 hover:bg-gray-0",
      },
    },
    // Primary
    {
      variant: "filled",
      color: ["primary", "purple"],
      className: {
        base: "bg-primary border border-transparent",
        text: "text-white",
        icon: "fill-white",
      },
    },
    {
      variant: "filled",
      color: ["primary", "purple"],
      hoverEffect: true,
      className: {
        base: "active:bg-primary-7 hover:bg-primary-6",
      },
    },
    {
      variant: "light",
      color: ["primary", "purple"],
      className: {
        base: "bg-primary-1 border border-transparent",
        text: "text-primary",
        icon: "fill-primary",
      },
    },
    {
      variant: "light",
      color: ["primary", "purple"],
      hoverEffect: true,
      className: {
        base: "active:bg-primary-2 hover:bg-primary-1",
      },
    },
    {
      variant: "outlined",
      color: ["primary", "purple"],
      className: {
        base: "bg-transparent border border-primary",
        text: "text-primary",
        icon: "fill-primary",
      },
    },
    {
      variant: "outlined",
      color: ["primary", "purple"],
      hoverEffect: true,
      className: {
        base: "active:bg-primary-1/50 hover:bg-primary-0/35",
      },
    },
    {
      variant: "subtle",
      color: ["primary", "purple"],
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-primary",
        icon: "fill-primary",
      },
    },
    {
      variant: "subtle",
      color: ["primary", "purple"],
      hoverEffect: true,
      className: {
        base: "active:bg-primary-1 hover:bg-primary-0",
      },
    },
    // Red
    {
      variant: "filled",
      color: ["red", "error"],
      className: {
        base: "bg-red border border-transparent",
        text: "text-white",
        icon: "fill-white",
      },
    },
    {
      variant: "filled",
      color: ["red", "error"],
      hoverEffect: true,
      className: {
        base: "active:bg-red-7 hover:bg-red-6",
      },
    },
    {
      variant: "light",
      color: ["red", "error"],
      className: {
        base: "bg-red-1 border border-transparent",
        text: "text-red",
        icon: "fill-red",
      },
    },
    {
      variant: "light",
      color: ["red", "error"],
      hoverEffect: true,
      className: {
        base: "active:bg-red-2 hover:bg-red-1",
      },
    },
    {
      variant: "outlined",
      color: ["red", "error"],
      className: {
        base: "bg-transparent border border-red",
        text: "text-red",
        icon: "fill-red",
      },
    },
    {
      variant: "outlined",
      color: ["red", "error"],
      hoverEffect: true,
      className: {
        base: "active:bg-red-1/50 hover:bg-red-0/35",
      },
    },
    {
      variant: "subtle",
      color: ["red", "error"],
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-red",
        icon: "fill-red",
      },
    },
    {
      variant: "subtle",
      color: ["red", "error"],
      hoverEffect: true,
      className: {
        base: "active:bg-red-1 hover:bg-red-0",
      },
    },
    // green
    {
      variant: "filled",
      color: ["green", "success"],
      className: {
        base: "bg-green border border-transparent",
        text: "text-white",
        icon: "fill-white",
      },
    },
    {
      variant: "filled",
      color: ["green", "success"],
      hoverEffect: true,
      className: {
        base: "active:bg-green-7 hover:bg-green-6",
      },
    },
    {
      variant: "light",
      color: ["green", "success"],
      className: {
        base: "bg-green-1 border border-transparent",
        text: "text-green",
        icon: "fill-green",
      },
    },
    {
      variant: "light",
      color: ["green", "success"],
      hoverEffect: true,
      className: {
        base: "active:bg-green-2 hover:bg-green-1",
      },
    },
    {
      variant: "outlined",
      color: ["green", "success"],
      className: {
        base: "bg-transparent border border-green",
        text: "text-green",
        icon: "fill-green",
      },
    },
    {
      variant: "outlined",
      color: ["green", "success"],
      hoverEffect: true,
      className: {
        base: "active:bg-green-1/50 hover:bg-green-0/35",
      },
    },
    {
      variant: "subtle",
      color: ["green", "success"],
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-green",
        icon: "fill-green",
      },
    },
    {
      variant: "subtle",
      color: ["green", "success"],
      hoverEffect: true,
      className: {
        base: "active:bg-green-1 hover:bg-green-0",
      },
    },
    // blue
    {
      variant: "filled",
      color: ["blue", "info"],
      className: {
        base: "bg-blue border border-transparent",
        text: "text-white",
        icon: "fill-white",
      },
    },
    {
      variant: "filled",
      color: ["blue", "info"],
      hoverEffect: true,
      className: {
        base: "active:bg-blue-7 hover:bg-blue-6",
      },
    },
    {
      variant: "light",
      color: ["blue", "info"],
      className: {
        base: "bg-blue-1 border border-transparent",
        text: "text-blue",
        icon: "fill-blue",
      },
    },
    {
      variant: "light",
      color: ["blue", "info"],
      hoverEffect: true,
      className: {
        base: "active:bg-blue-2 hover:bg-blue-1",
      },
    },
    {
      variant: "outlined",
      color: ["blue", "info"],
      className: {
        base: "bg-transparent border border-blue",
        text: "text-blue",
        icon: "fill-blue",
      },
    },
    {
      variant: "outlined",
      color: ["blue", "info"],
      hoverEffect: true,
      className: {
        base: "active:bg-blue-1/50 hover:bg-blue-0/35",
      },
    },
    {
      variant: "subtle",
      color: ["blue", "info"],
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-blue",
        icon: "fill-blue",
      },
    },
    {
      variant: "subtle",
      color: ["blue", "info"],
      hoverEffect: true,
      className: {
        base: "active:bg-blue-1 hover:bg-blue-0",
      },
    },
    // orange
    {
      variant: "filled",
      color: "orange",
      className: {
        base: "bg-orange border border-transparent",
        text: "text-white",
        icon: "fill-white",
      },
    },
    {
      variant: "filled",
      color: "orange",
      hoverEffect: true,
      className: {
        base: "active:bg-orange-7 hover:bg-orange-6",
      },
    },
    {
      variant: "light",
      color: "orange",
      className: {
        base: "bg-orange-1 border border-transparent",
        text: "text-orange",
        icon: "fill-orange",
      },
    },
    {
      variant: "light",
      color: "orange",
      hoverEffect: true,
      className: {
        base: "active:bg-orange-2 hover:bg-orange-1",
      },
    },
    {
      variant: "outlined",
      color: "orange",
      className: {
        base: "bg-transparent border border-orange",
        text: "text-orange",
        icon: "fill-orange",
      },
    },
    {
      variant: "outlined",
      color: "orange",
      hoverEffect: true,
      className: {
        base: "active:bg-orange-1/50 hover:bg-orange-0/35",
      },
    },
    {
      variant: "subtle",
      color: "orange",
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-orange",
        icon: "fill-orange",
      },
    },
    {
      variant: "subtle",
      color: "orange",
      hoverEffect: true,
      className: {
        base: "active:bg-orange-1 hover:bg-orange-0",
      },
    },
    // black
    {
      variant: "filled",
      color: "black",
      className: {
        base: "bg-black border border-transparent",
        text: "text-white",
        icon: "fill-white",
      },
    },
    {
      variant: "filled",
      color: "black",
      hoverEffect: true,
      className: {
        base: "active:bg-black-7 hover:bg-black-6",
      },
    },
    {
      variant: "light",
      color: "black",
      className: {
        base: "bg-black-1 border border-transparent",
        text: "text-black",
        icon: "fill-black",
      },
    },
    {
      variant: "light",
      color: "black",
      hoverEffect: true,
      className: {
        base: "active:bg-black-2 hover:bg-black-1/65",
      },
    },
    {
      variant: "outlined",
      color: "black",
      className: {
        base: "bg-transparent border border-black",
        text: "text-black",
        icon: "fill-black",
      },
    },
    {
      variant: "outlined",
      color: "black",
      hoverEffect: true,
      className: {
        base: "active:bg-black-1/50 hover:bg-black-0/35",
      },
    },
    {
      variant: "subtle",
      color: "black",
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-black",
        icon: "fill-black",
      },
    },
    {
      variant: "subtle",
      color: "black",
      hoverEffect: true,
      className: {
        base: "active:bg-black-1 hover:bg-black-0",
      },
    },
    // yellow
    {
      variant: "filled",
      color: ["yellow", "warning"],
      className: {
        base: "bg-yellow border border-transparent",
        text: "text-white",
        icon: "fill-white",
      },
    },
    {
      variant: "filled",
      color: ["yellow", "warning"],
      hoverEffect: true,
      className: {
        base: "active:bg-yellow-7 hover:bg-yellow-6",
      },
    },
    {
      variant: "light",
      color: ["yellow", "warning"],
      className: {
        base: "bg-yellow-1 border border-transparent",
        text: "text-yellow",
        icon: "fill-yellow",
      },
    },
    {
      variant: "light",
      color: ["yellow", "warning"],
      hoverEffect: true,
      className: {
        base: "active:bg-yellow-2 hover:bg-yellow-1",
      },
    },
    {
      variant: "outlined",
      color: ["yellow", "warning"],
      className: {
        base: "bg-transparent border border-yellow",
        text: "text-yellow",
        icon: "fill-yellow",
      },
    },
    {
      variant: "outlined",
      color: ["yellow", "warning"],
      hoverEffect: true,
      className: {
        base: "active:bg-yellow-1 hover:bg-yellow-0/35",
      },
    },
    {
      variant: "subtle",
      color: ["yellow", "warning"],
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-yellow",
        icon: "fill-yellow",
      },
    },
    {
      variant: "subtle",
      color: ["yellow", "warning"],
      hoverEffect: true,
      className: {
        base: "active:bg-yellow-1 hover:bg-yellow-0",
      },
    },
    // water
    {
      variant: "filled",
      color: "water",
      className: {
        base: "bg-water border border-transparent",
        text: "text-white",
        icon: "fill-white",
      },
    },
    {
      variant: "filled",
      color: "water",
      hoverEffect: true,
      className: {
        base: "active:bg-water-7 hover:bg-water-6",
      },
    },
    {
      variant: "light",
      color: "water",
      className: {
        base: "bg-water-1 border border-transparent",
        text: "text-water",
        icon: "fill-water",
      },
    },
    {
      variant: "light",
      color: "water",
      hoverEffect: true,
      className: {
        base: "active:bg-water-2 hover:bg-water-1",
      },
    },
    {
      variant: "outlined",
      color: "water",
      className: {
        base: "bg-transparent border border-water",
        text: "text-water",
        icon: "fill-water",
      },
    },
    {
      variant: "outlined",
      color: "water",
      hoverEffect: true,
      className: {
        base: "active:bg-water-1 hover:bg-water-0/35",
      },
    },
    {
      variant: "subtle",
      color: "water",
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-water",
        icon: "fill-water",
      },
    },
    {
      variant: "subtle",
      color: "water",
      hoverEffect: true,
      className: {
        base: "active:bg-water-1 hover:bg-water-0",
      },
    },
    // gray
    {
      variant: "filled",
      color: "gray",
      className: {
        base: "bg-gray border border-transparent",
        text: "text-white",
        icon: "fill-white",
      },
    },
    {
      variant: "filled",
      color: "gray",
      hoverEffect: true,
      className: {
        base: "active:bg-gray-7 hover:bg-gray-6",
      },
    },
    {
      variant: "light",
      color: "gray",
      className: {
        base: "bg-gray-1 border border-transparent",
        text: "text-gray",
        icon: "fill-gray",
      },
    },
    {
      variant: "light",
      color: "gray",
      hoverEffect: true,
      className: {
        base: "active:bg-gray-2 hover:bg-gray-1",
      },
    },
    {
      variant: "outlined",
      color: "gray",
      className: {
        base: "bg-transparent border border-gray",
        text: "text-gray",
        icon: "fill-gray",
      },
    },
    {
      variant: "outlined",
      color: "gray",
      hoverEffect: true,
      className: {
        base: "active:bg-gray-1 hover:bg-gray-0/35",
      },
    },
    {
      variant: "subtle",
      color: "gray",
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-gray",
        icon: "fill-gray",
      },
    },
    {
      variant: "subtle",
      color: "gray",
      hoverEffect: true,
      className: {
        base: "active:bg-gray-1 hover:bg-gray-0",
      },
    },
    // dark
    {
      variant: "filled",
      color: "dark",
      className: {
        base: "bg-dark border border-transparent",
        text: "text-white",
        icon: "fill-white",
      },
    },
    {
      variant: "filled",
      color: "dark",
      hoverEffect: true,
      className: {
        base: "active:bg-dark-7 hover:bg-dark-6",
      },
    },
    {
      variant: "light",
      color: "dark",
      className: {
        base: "bg-dark-1 border border-transparent",
        text: "text-dark",
        icon: "fill-dark",
      },
    },
    {
      variant: "light",
      color: "dark",
      hoverEffect: true,
      className: {
        base: "active:bg-dark-2 hover:bg-dark-1",
      },
    },
    {
      variant: "outlined",
      color: "dark",
      className: {
        base: "bg-transparent border border-dark",
        text: "text-dark",
        icon: "fill-dark",
      },
    },
    {
      variant: "outlined",
      color: "dark",
      hoverEffect: true,
      className: {
        base: "active:bg-dark-1 hover:bg-dark-0/35",
      },
    },
    {
      variant: "subtle",
      color: "dark",
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-dark",
        icon: "fill-dark",
      },
    },
    {
      variant: "subtle",
      color: "dark",
      hoverEffect: true,
      className: {
        base: "active:bg-dark-1 hover:bg-dark-0",
      },
    },
  ],
};
