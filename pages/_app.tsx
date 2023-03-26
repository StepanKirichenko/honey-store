import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { CartContext, CartItem } from "@/contexts/CartContext";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState([] as CartItem[]);

  function handleAddToCart(productId: string, amount: number) {
    if (cart.findIndex((i) => i.productId === productId) !== -1) {
      setCart(
        cart.map((i) =>
          i.productId === productId
            ? { productId, amount: i.amount + amount }
            : i
        )
      );
    } else {
      setCart([...cart, { productId, amount }]);
    }
  }

  function handleRemoveFromCart(productId: string, amount: number = 0) {
    if (amount !== 0) {
      setCart(
        cart
          .map((i) => {
            if (i.productId !== productId) {
              return i;
            } else {
              return { productId, amount: i.amount - amount };
            }
          })
          .filter((i) => i.amount > 0)
      );
    } else {
      setCart(cart.filter((i) => i.productId !== productId));
    }
  }

  const cartContext = {
    items: cart,
    handleAddToCart,
    handleRemoveFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      <div className={inter.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </CartContext.Provider>
  );
}
