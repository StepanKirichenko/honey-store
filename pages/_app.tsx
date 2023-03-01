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

  function handleAddToCart(productId: number, amount: number) {
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

  const cartContext = {
    items: cart,
    handleAddToCart: handleAddToCart,
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
