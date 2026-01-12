import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleFavorite = (product) => {
    setFavorites((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Stockage local (AsyncStorage)
  useEffect(() => {
    AsyncStorage.getItem("cart").then((data) => {
      if (data) setCart(JSON.parse(data));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <AppContext.Provider
      value={{
        favorites,
        cart,
        darkMode,
        toggleFavorite,
        addToCart,
        setDarkMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
