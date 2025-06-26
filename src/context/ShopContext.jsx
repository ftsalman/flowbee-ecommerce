import { createContext, useState } from "react";
import { allProducts } from "../assets/all_product";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [products] = useState(allProducts);

  return (
    <ShopContext.Provider value={{ allProducts: products }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
