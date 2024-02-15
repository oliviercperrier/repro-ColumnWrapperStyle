import { backgroundColorVariants } from "./color-variants";

export type TButtonStyleVariant = "filled" | "light" | "outlined" | "subtle" | "default" | "defaultBordered";

export const buttonColorVariant: {
  variants: {
    variant: Record<TButtonStyleVariant, string>;
    color: typeof backgroundColorVariants;
    hoverEffect: {
      true: "";
    };
    disabled: {
      true: "";
    };
  };
  compoundVariants: {
    disabled: boolean;
    variant?: TButtonStyleVariant[] | TButtonStyleVariant;
    color?: (keyof typeof backgroundColorVariants)[] | keyof typeof backgroundColorVariants;
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
    color: backgroundColorVariants,
    hoverEffect: {
      true: "",
    },
    disabled: {
      true: "",
    },
  },
  compoundVariants: [
    {
      disabled: true,
      className: {
        base: "bg-disabled border border-gray-2",
        text: "text-white",
        icon: "text-white",
      },
    },
    // Default
    {
      variant: "default",
      disabled: false,
      className: {
        base: "bg-gray-2 border border-transparent",
        text: "text-default",
        icon: "text-dark",
      },
    },
    {
      variant: "default",
      hoverEffect: true,
      disabled: false,
      className: {
        base: "active:bg-gray-3 hover:bg-gray-3",
      },
    },
    {
      variant: "defaultBordered",
      disabled: false,
      className: {
        base: "bg-white border border-dark-2",
        text: "text-dark",
        icon: "text-dark",
      },
    },
    {
      variant: "defaultBordered",
      hoverEffect: true,
      disabled: false,
      className: {
        base: "active:bg-gray-1 hover:bg-gray-0",
      },
    },
    // Primary
    {
      variant: "filled",
      color: ["primary", "purple"],
      disabled: false,
      className: {
        base: "bg-primary border border-transparent",
        text: "text-white",
        icon: "text-white",
      },
    },
    {
      variant: "filled",
      color: ["primary", "purple"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-primary-7 hover:bg-primary-6",
      },
    },
    {
      variant: "light",
      color: ["primary", "purple"],
      disabled: false,
      className: {
        base: "bg-primary-1 border border-transparent",
        text: "text-primary",
        icon: "text-primary",
      },
    },
    {
      variant: "light",
      color: ["primary", "purple"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-primary-2 hover:bg-primary-1",
      },
    },
    {
      variant: "outlined",
      color: ["primary", "purple"],
      disabled: false,
      className: {
        base: "bg-transparent border border-primary",
        text: "text-primary",
        icon: "text-primary",
      },
    },
    {
      variant: "outlined",
      color: ["primary", "purple"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-primary-1/50 hover:bg-primary-0/35",
      },
    },
    {
      variant: "subtle",
      color: ["primary", "purple"],
      disabled: false,
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-primary",
        icon: "text-primary",
      },
    },
    {
      variant: "subtle",
      color: ["primary", "purple"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-primary-1 hover:bg-primary-0",
      },
    },
    // Red
    {
      variant: "filled",
      color: ["red", "error"],
      disabled: false,
      className: {
        base: "bg-red border border-transparent",
        text: "text-white",
        icon: "text-white",
      },
    },
    {
      variant: "filled",
      color: ["red", "error"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-red-7 hover:bg-red-6",
      },
    },
    {
      variant: "light",
      color: ["red", "error"],
      disabled: false,

      className: {
        base: "bg-red-1 border border-transparent",
        text: "text-red",
        icon: "text-red",
      },
    },
    {
      variant: "light",
      color: ["red", "error"],
      hoverEffect: true,
      disabled: false,
      className: {
        base: "active:bg-red-2 hover:bg-red-1",
      },
    },
    {
      variant: "outlined",
      color: ["red", "error"],
      disabled: false,
      className: {
        base: "bg-transparent border border-red",
        text: "text-red",
        icon: "text-red",
      },
    },
    {
      variant: "outlined",
      color: ["red", "error"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-red-1/50 hover:bg-red-0/35",
      },
    },
    {
      variant: "subtle",
      color: ["red", "error"],
      disabled: false,
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-red",
        icon: "text-red",
      },
    },
    {
      variant: "subtle",
      color: ["red", "error"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-red-1 hover:bg-red-0",
      },
    },
    // green
    {
      variant: "filled",
      color: ["green", "success"],
      disabled: false,
      className: {
        base: "bg-green border border-transparent",
        text: "text-white",
        icon: "text-white",
      },
    },
    {
      variant: "filled",
      color: ["green", "success"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-green-7 hover:bg-green-6",
      },
    },
    {
      variant: "light",
      color: ["green", "success"],
      disabled: false,
      className: {
        base: "bg-green-1 border border-transparent",
        text: "text-green",
        icon: "text-green",
      },
    },
    {
      variant: "light",
      color: ["green", "success"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-green-2 hover:bg-green-1",
      },
    },
    {
      variant: "outlined",
      color: ["green", "success"],
      disabled: false,
      className: {
        base: "bg-transparent border border-green",
        text: "text-green",
        icon: "text-green",
      },
    },
    {
      variant: "outlined",
      color: ["green", "success"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-green-1/50 hover:bg-green-0/35",
      },
    },
    {
      variant: "subtle",
      color: ["green", "success"],
      disabled: false,
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-green",
        icon: "text-green",
      },
    },
    {
      variant: "subtle",
      color: ["green", "success"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-green-1 hover:bg-green-0",
      },
    },
    // blue
    {
      variant: "filled",
      color: ["blue", "info"],
      disabled: false,
      className: {
        base: "bg-blue border border-transparent",
        text: "text-white",
        icon: "text-white",
      },
    },
    {
      variant: "filled",
      color: ["blue", "info"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-blue-7 hover:bg-blue-6",
      },
    },
    {
      variant: "light",
      color: ["blue", "info"],
      disabled: false,
      className: {
        base: "bg-blue-1 border border-transparent",
        text: "text-blue",
        icon: "text-blue",
      },
    },
    {
      variant: "light",
      color: ["blue", "info"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-blue-2 hover:bg-blue-1",
      },
    },
    {
      variant: "outlined",
      color: ["blue", "info"],
      disabled: false,
      className: {
        base: "bg-transparent border border-blue",
        text: "text-blue",
        icon: "text-blue",
      },
    },
    {
      variant: "outlined",
      color: ["blue", "info"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-blue-1/50 hover:bg-blue-0/35",
      },
    },
    {
      variant: "subtle",
      color: ["blue", "info"],
      disabled: false,
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-blue",
        icon: "text-blue",
      },
    },
    {
      variant: "subtle",
      color: ["blue", "info"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-blue-1 hover:bg-blue-0",
      },
    },
    // orange
    {
      variant: "filled",
      color: "orange",
      disabled: false,
      className: {
        base: "bg-orange border border-transparent",
        text: "text-white",
        icon: "text-white",
      },
    },
    {
      variant: "filled",
      color: "orange",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-orange-7 hover:bg-orange-6",
      },
    },
    {
      variant: "light",
      color: "orange",
      disabled: false,
      className: {
        base: "bg-orange-1 border border-transparent",
        text: "text-orange",
        icon: "text-orange",
      },
    },
    {
      variant: "light",
      color: "orange",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-orange-2 hover:bg-orange-1",
      },
    },
    {
      variant: "outlined",
      color: "orange",
      disabled: false,
      className: {
        base: "bg-transparent border border-orange",
        text: "text-orange",
        icon: "text-orange",
      },
    },
    {
      variant: "outlined",
      color: "orange",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-orange-1/50 hover:bg-orange-0/35",
      },
    },
    {
      variant: "subtle",
      color: "orange",
      disabled: false,
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-orange",
        icon: "text-orange",
      },
    },
    {
      variant: "subtle",
      color: "orange",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-orange-1 hover:bg-orange-0",
      },
    },
    // black
    {
      variant: "filled",
      color: "black",
      disabled: false,
      className: {
        base: "bg-black border border-transparent",
        text: "text-white",
        icon: "text-white",
      },
    },
    {
      variant: "filled",
      color: "black",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-black-7 hover:bg-black-6",
      },
    },
    {
      variant: "light",
      color: "black",
      disabled: false,
      className: {
        base: "bg-black-1 border border-transparent",
        text: "text-black",
        icon: "text-black",
      },
    },
    {
      variant: "light",
      color: "black",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-black-2 hover:bg-black-1/65",
      },
    },
    {
      variant: "outlined",
      color: "black",
      disabled: false,
      className: {
        base: "bg-transparent border border-black",
        text: "text-black",
        icon: "text-black",
      },
    },
    {
      variant: "outlined",
      color: "black",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-black-1/50 hover:bg-black-0/35",
      },
    },
    {
      variant: "subtle",
      color: "black",
      disabled: false,
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-black",
        icon: "text-black",
      },
    },
    {
      variant: "subtle",
      color: "black",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-black-1 hover:bg-black-0",
      },
    },
    // yellow
    {
      variant: "filled",
      color: ["yellow", "warning"],
      disabled: false,
      className: {
        base: "bg-yellow border border-transparent",
        text: "text-white",
        icon: "text-white",
      },
    },
    {
      variant: "filled",
      color: ["yellow", "warning"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-yellow-7 hover:bg-yellow-6",
      },
    },
    {
      variant: "light",
      color: ["yellow", "warning"],
      disabled: false,
      className: {
        base: "bg-yellow-1 border border-transparent",
        text: "text-yellow",
        icon: "text-yellow",
      },
    },
    {
      variant: "light",
      color: ["yellow", "warning"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-yellow-2 hover:bg-yellow-1",
      },
    },
    {
      variant: "outlined",
      color: ["yellow", "warning"],
      disabled: false,
      className: {
        base: "bg-transparent border border-yellow",
        text: "text-yellow",
        icon: "text-yellow",
      },
    },
    {
      variant: "outlined",
      color: ["yellow", "warning"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-yellow-1 hover:bg-yellow-0/35",
      },
    },
    {
      variant: "subtle",
      color: ["yellow", "warning"],
      disabled: false,
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-yellow",
        icon: "text-yellow",
      },
    },
    {
      variant: "subtle",
      color: ["yellow", "warning"],
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-yellow-1 hover:bg-yellow-0",
      },
    },
    // water
    {
      variant: "filled",
      color: "water",
      disabled: false,
      className: {
        base: "bg-water border border-transparent",
        text: "text-white",
        icon: "text-white",
      },
    },
    {
      variant: "filled",
      color: "water",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-water-7 hover:bg-water-6",
      },
    },
    {
      variant: "light",
      color: "water",
      disabled: false,
      className: {
        base: "bg-water-1 border border-transparent",
        text: "text-water",
        icon: "text-water",
      },
    },
    {
      variant: "light",
      color: "water",
      hoverEffect: true,
      disabled: false,
      className: {
        base: "active:bg-water-2 hover:bg-water-1",
      },
    },
    {
      variant: "outlined",
      color: "water",
      disabled: false,
      className: {
        base: "bg-transparent border border-water",
        text: "text-water",
        icon: "text-water",
      },
    },
    {
      variant: "outlined",
      color: "water",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-water-1 hover:bg-water-0/35",
      },
    },
    {
      variant: "subtle",
      color: "water",
      disabled: false,
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-water",
        icon: "text-water",
      },
    },
    {
      variant: "subtle",
      color: "water",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-water-1 hover:bg-water-0",
      },
    },
    // gray
    {
      variant: "filled",
      color: "gray",
      disabled: false,
      className: {
        base: "bg-gray border border-transparent",
        text: "text-white",
        icon: "text-white",
      },
    },
    {
      variant: "filled",
      color: "gray",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-gray-7 hover:bg-gray-6",
      },
    },
    {
      variant: "light",
      color: "gray",
      disabled: false,
      className: {
        base: "bg-gray-1 border border-transparent",
        text: "text-gray",
        icon: "text-gray",
      },
    },
    {
      variant: "light",
      color: "gray",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-gray-2 hover:bg-gray-1",
      },
    },
    {
      variant: "outlined",
      color: "gray",
      disabled: false,
      className: {
        base: "bg-transparent border border-gray",
        text: "text-gray",
        icon: "text-gray",
      },
    },
    {
      variant: "outlined",
      color: "gray",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-gray-1 hover:bg-gray-0/35",
      },
    },
    {
      variant: "subtle",
      color: "gray",
      disabled: false,
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-gray",
        icon: "text-gray",
      },
    },
    {
      variant: "subtle",
      color: "gray",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-gray-1 hover:bg-gray-0",
      },
    },
    // dark
    {
      variant: "filled",
      color: "dark",
      disabled: false,
      className: {
        base: "bg-dark border border-transparent",
        text: "text-white",
        icon: "text-white",
      },
    },
    {
      variant: "filled",
      color: "dark",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-dark-7 hover:bg-dark-6",
      },
    },
    {
      variant: "light",
      color: "dark",
      disabled: false,
      className: {
        base: "bg-dark-1 border border-transparent",
        text: "text-dark",
        icon: "text-dark",
      },
    },
    {
      variant: "light",
      color: "dark",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-dark-2 hover:bg-dark-1",
      },
    },
    {
      variant: "outlined",
      color: "dark",
      disabled: false,
      className: {
        base: "bg-transparent border border-dark",
        text: "text-dark",
        icon: "text-dark",
      },
    },
    {
      variant: "outlined",
      color: "dark",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-dark-1 hover:bg-dark-0/35",
      },
    },
    {
      variant: "subtle",
      color: "dark",
      disabled: false,
      className: {
        base: "bg-transparent border border-transparent",
        text: "text-dark",
        icon: "text-dark",
      },
    },
    {
      variant: "subtle",
      color: "dark",
      disabled: false,
      hoverEffect: true,
      className: {
        base: "active:bg-dark-1 hover:bg-dark-0",
      },
    },
  ],
};
