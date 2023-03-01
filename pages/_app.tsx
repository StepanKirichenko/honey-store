import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { CartContext } from "@/contexts/CartContext";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState([0, 1, 2, 3]);

  function handleAddToCart() {
    setCart([...cart, cart.length]);
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
