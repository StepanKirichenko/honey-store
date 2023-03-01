import { Context, createContext } from "react";

export interface CartItem {
  productId: number;
  amount: number;
}

export const CartContext: Context<{
  items: CartItem[];
  handleAddToCart: (productId: number, amount: number) => void;
  handleRemoveFromCart: (productId: number, amount?: number) => void;
}> = createContext({
  items: [] as CartItem[],
  handleAddToCart: (productId, amount) => {},
  handleRemoveFromCart: (productId, amount) => {},
});
