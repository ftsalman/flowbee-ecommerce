import { createContext } from "react";
import {arrivals_data} from '../assets/ArrivalsData'


export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {

     const contextValue  = {arrivals_data}

     return(
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
     )
}

export default ShopContextProvider;