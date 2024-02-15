import { backgroundColorVariants } from "./color-variants";

export type TButtonStyleVariant = "filled" | "light" | "outlined" | "subtle" | "default" | "defaultBordered";

export const buttonColorVariant: {
  variants: {
    variant: Record<TButtonStyleVariant, string>;
    color: typeof backgroundColorVariants;
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
      background?: string;
      color?: string;
      hover?: string;
      focus?: string;
      active?: string;
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
    disabled: {
      true: "",
    },
  },
  compoundVariants: [
    {
      disabled: true,
      className: {
        background: "bg-disabled border border-gray-2",
        color: "text-white",
      },
    },
    // Default
    {
      variant: "default",
      disabled: false,
      className: {
        background: "bg-gray-2 border border-transparent",
        color: "text-default",
        hover: "hover:bg-gray-3",
        active: "active:bg-gray-3",
      },
    },
    {
      variant: "defaultBordered",
      disabled: false,
      className: {
        background: "bg-white border border-dark-2",
        color: "text-dark",
        hover: "hover:bg-gray-0",
        active: "active:bg-gray-1",
      },
    },
    // Primary
    {
      variant: "filled",
      color: ["primary", "purple"],
      disabled: false,
      className: {
        background: "bg-primary border border-transparent",
        color: "text-white",
        hover: "hover:bg-primary-7",
        active: "active:bg-primary-8",
      },
    },
    {
      variant: "light",
      color: ["primary", "purple"],
      disabled: false,
      className: {
        background: "bg-primary-1 border border-transparent",
        color: "text-primary",
        hover: "hover:bg-primary-2",
        active: "active:bg-primary-3",
      },
    },
    {
      variant: "outlined",
      color: ["primary", "purple"],
      disabled: false,
      className: {
        background: "bg-transparent border border-primary",
        color: "text-primary",
        hover: "hover:bg-primary-0/35",
        active: "active:bg-primary-1/50",
      },
    },
    {
      variant: "subtle",
      color: ["primary", "purple"],
      disabled: false,
      className: {
        background: "bg-transparent border border-transparent",
        color: "text-primary",
        hover: "hover:bg-primary-0",
        active: "active:bg-primary-1",
      },
    },
    // Red
    {
      variant: "filled",
      color: ["red", "error"],
      disabled: false,
      className: {
        background: "bg-red border border-transparent",
        color: "text-white",
        hover: "hover:bg-red-6",
        active: "active:bg-red-7",
      },
    },
    {
      variant: "light",
      color: ["red", "error"],
      disabled: false,
      className: {
        background: "bg-red-1 border border-transparent",
        color: "text-red",
        hover: "hover:bg-red-1",
        active: "active:bg-red-2",
      },
    },
    {
      variant: "outlined",
      color: ["red", "error"],
      disabled: false,
      className: {
        background: "bg-transparent border border-red",
        color: "text-red",
        hover: "hover:bg-red-0/35",
        active: "active:bg-red-1/50",
      },
    },
    {
      variant: "subtle",
      color: ["red", "error"],
      disabled: false,
      className: {
        background: "bg-transparent border border-transparent",
        color: "text-red",
        hover: "hover:bg-red-0",
        active: "active:bg-red-1",
      },
    },
    // green
    {
      variant: "filled",
      color: ["green", "success"],
      disabled: false,
      className: {
        background: "bg-green border border-transparent",
        color: "text-white",
        hover: "hover:bg-green-6",
        active: "active:bg-green-7",
      },
    },
    {
      variant: "light",
      color: ["green", "success"],
      disabled: false,
      className: {
        background: "bg-green-1 border border-transparent",
        color: "text-green",
        hover: "hover:bg-green-1",
        active: "active:bg-green-2",
      },
    },
    {
      variant: "outlined",
      color: ["green", "success"],
      disabled: false,
      className: {
        background: "bg-transparent border border-green",
        color: "text-green",
        hover: "hover:bg-green-0/35",
        active: "active:bg-green-1/50",
      },
    },
    {
      variant: "subtle",
      color: ["green", "success"],
      disabled: false,
      className: {
        background: "bg-transparent border border-transparent",
        color: "text-green",
        hover: "hover:bg-green-0",
        active: "active:bg-green-1",
      },
    },
    // blue
    {
      variant: "filled",
      color: ["blue", "info"],
      disabled: false,
      className: {
        background: "bg-blue border border-transparent",
        color: "text-white",
        hover: "hover:bg-blue-7",
        active: "active:bg-blue-8",
      },
    },
    {
      variant: "light",
      color: ["blue", "info"],
      disabled: false,
      className: {
        background: "bg-blue-1 border border-transparent",
        color: "text-blue",
        hover: "hover:bg-blue-2",
        active: "active:bg-blue-3",
      },
    },
    {
      variant: "outlined",
      color: ["blue", "info"],
      disabled: false,
      className: {
        background: "bg-transparent border border-blue",
        color: "text-blue",
        hover: "hover:bg-blue-0/35",
        active: "active:bg-blue-1/50",
      },
    },
    {
      variant: "subtle",
      color: ["blue", "info"],
      disabled: false,
      className: {
        background: "bg-transparent border border-transparent",
        color: "text-blue",
        hover: "hover:bg-blue-0",
        active: "active:bg-blue-1",
      },
    },
    // orange
    {
      variant: "filled",
      color: "orange",
      disabled: false,
      className: {
        background: "bg-orange border border-transparent",
        color: "text-white",
        hover: "hover:bg-orange-6",
        active: "active:bg-orange-7",
      },
    },
    {
      variant: "light",
      color: "orange",
      disabled: false,
      className: {
        background: "bg-orange-1 border border-transparent",
        color: "text-orange",
        hover: "hover:bg-orange-1",
        active: "active:bg-orange-2",
      },
    },
    {
      variant: "outlined",
      color: "orange",
      disabled: false,
      className: {
        background: "bg-transparent border border-orange",
        color: "text-orange",
        hover: "hover:bg-orange-0/35",
        active: "active:bg-orange-1/50",
      },
    },
    {
      variant: "subtle",
      color: "orange",
      disabled: false,
      className: {
        background: "bg-transparent border border-transparent",
        color: "text-orange",
        hover: "hover:bg-orange-0",
        active: "active:bg-orange-1",
      },
    },
    // black
    {
      variant: "filled",
      color: "black",
      disabled: false,
      className: {
        background: "bg-black border border-transparent",
        color: "text-white",
        hover: "hover:bg-black-6",
        active: "active:bg-black-7",
      },
    },
    {
      variant: "light",
      color: "black",
      disabled: false,
      className: {
        background: "bg-black-1 border border-transparent",
        color: "text-black",
        hover: "hover:bg-black-1/65",
        active: "active:bg-black-2",
      },
    },
    {
      variant: "outlined",
      color: "black",
      disabled: false,
      className: {
        background: "bg-transparent border border-black",
        color: "text-black",
        hover: "hover:bg-black-0/35",
        active: "active:bg-black-1/50",
      },
    },
    {
      variant: "subtle",
      color: "black",
      disabled: false,
      className: {
        background: "bg-transparent border border-transparent",
        color: "text-black",
        hover: "hover:bg-black-0",
        active: "active:bg-black-1",
      },
    },
    // yellow
    {
      variant: "filled",
      color: ["yellow", "warning"],
      disabled: false,
      className: {
        background: "bg-yellow border border-transparent",
        color: "text-white",
        hover: "hover:bg-yellow-6",
        active: "active:bg-yellow-7",
      },
    },
    {
      variant: "light",
      color: ["yellow", "warning"],
      disabled: false,
      className: {
        background: "bg-yellow-1 border border-transparent",
        color: "text-yellow",
        hover: "hover:bg-yellow-1",
        active: "active:bg-yellow-2",
      },
    },
    {
      variant: "outlined",
      color: ["yellow", "warning"],
      disabled: false,
      className: {
        background: "bg-transparent border border-yellow",
        color: "text-yellow",
        hover: "hover:bg-yellow-0/35",
        active: "active:bg-yellow-1",
      },
    },
    {
      variant: "subtle",
      color: ["yellow", "warning"],
      disabled: false,
      className: {
        background: "bg-transparent border border-transparent",
        color: "text-yellow",
        hover: "hover:bg-yellow-0",
        active: "active:bg-yellow-1",
      },
    },
    // water
    {
      variant: "filled",
      color: "water",
      disabled: false,
      className: {
        background: "bg-water border border-transparent",
        color: "text-white",
        hover: "hover:bg-water-6",
        active: "active:bg-water-7",
      },
    },
    {
      variant: "light",
      color: "water",
      disabled: false,
      className: {
        background: "bg-water-1 border border-transparent",
        color: "text-water",
        hover: "hover:bg-water-1",
        active: "active:bg-water-2",
      },
    },
    {
      variant: "outlined",
      color: "water",
      disabled: false,
      className: {
        background: "bg-transparent border border-water",
        color: "text-water",
        hover: "hover:bg-water-0/35",
        active: "active:bg-water-1",
      },
    },
    {
      variant: "subtle",
      color: "water",
      disabled: false,
      className: {
        background: "bg-transparent border border-transparent",
        color: "text-water",
        hover: "hover:bg-water-0",
        active: "active:bg-water-1",
      },
    },
    // gray
    {
      variant: "filled",
      color: "gray",
      disabled: false,
      className: {
        background: "bg-gray border border-transparent",
        color: "text-white",
        hover: "hover:bg-gray-6",
        active: "active:bg-gray-7",
      },
    },
    {
      variant: "light",
      color: "gray",
      disabled: false,
      className: {
        background: "bg-gray-1 border border-transparent",
        color: "text-gray",
        hover: "hover:bg-gray-1",
        active: "active:bg-gray-2",
      },
    },
    {
      variant: "outlined",
      color: "gray",
      disabled: false,
      className: {
        background: "bg-transparent border border-gray",
        color: "text-gray",
        hover: "hover:bg-gray-0/35",
        active: "active:bg-gray-1",
      },
    },
    {
      variant: "subtle",
      color: "gray",
      disabled: false,
      className: {
        background: "bg-transparent border border-transparent",
        color: "text-gray",
        hover: "hover:bg-gray-0",
        active: "active:bg-gray-1",
      },
    },
    // dark
    {
      variant: "filled",
      color: "dark",
      disabled: false,
      className: {
        background: "bg-dark border border-transparent",
        color: "text-white",
        hover: "hover:bg-dark-6",
        active: "active:bg-dark-7",
      },
    },
    {
      variant: "light",
      color: "dark",
      disabled: false,
      className: {
        background: "bg-dark-1 border border-transparent",
        color: "text-dark",
        hover: "hover:bg-dark-1",
        active: "active:bg-dark-2",
      },
    },
    {
      variant: "outlined",
      color: "dark",
      disabled: false,
      className: {
        background: "bg-transparent border border-dark",
        color: "text-dark",
        hover: "hover:bg-dark-0/35",
        active: "active:bg-dark-1",
      },
    },
    {
      variant: "subtle",
      color: "dark",
      disabled: false,
      className: {
        background: "bg-transparent border border-transparent",
        color: "text-dark",
        hover: "hover:bg-dark-0",
        active: "active:bg-dark-1",
      },
    },
  ],
};
