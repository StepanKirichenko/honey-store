import { Context, createContext } from "react";

export const CartContext: Context<{
  items: number[];
  handleAddToCart: () => void;
}> = createContext({
  items: [0],
  handleAddToCart: () => {},
});
