import { Context, createContext } from "react";

export interface CartItem {
  productId: string;
  amount: number;
}

export const CartContext: Context<{
  items: CartItem[];
  handleAddToCart: (productId: string, amount: number) => void;
  handleRemoveFromCart: (productId: string, amount?: number) => void;
}> = createContext({
  items: [] as CartItem[],
  handleAddToCart: (productId, amount) => {},
  handleRemoveFromCart: (productId, amount) => {},
});
