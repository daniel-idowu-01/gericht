import { createContext, useState } from "react";

 const CartContext = createContext({})

export function CartProvider({ children }) {

    const [items, setItems] = useState([])

    const addToCart = (image, name, category) => {
        setItems((prevState) => [...prevState, {image, name, category}])
    }

    return (
        <CartContext.Provider value={{ items, addToCart }}>
            {children} 
        </CartContext.Provider>
    )
}

export default CartContext