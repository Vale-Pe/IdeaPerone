import { createContext, useState } from 'react';
import Swal from 'sweetalert2'

export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({ defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue);

    const clearCart = () => {
        setCart([])
    }

    const addToCart = (item, quantity) => {
        console.log(item, quantity)
/*      console.log(quantity)
        console.log(item.quantity)  */

        if(isInCart(item.id)) {

            const newCart = [...cart]

            for (const element of newCart) {
                if((element.item.id === item.id) && ((element.quantity + quantity)<=(item.quantity))) {
                    element.quantity = element.quantity + quantity;
                } else {
                    Swal.fire({
                        text: `El máximo de productos permitidos es ${item.quantity}`,
                        icon: 'error',
                    })
                    addToCart(false, false)
                }
            }
            setCart(newCart);
            console.log(newCart)

        } else {
            setCart(
                [
                    ...cart,
                    {
                        item: item,
                        quantity: quantity
                    }
                ]
            )
        }
    }

    const isInCart = (id) => {
        return cart.find((element) => element.item.id ===id);
    }

    const removeFromCart = (id) => {
        const newCart = [...cart].filter(element => element.item.id !== id)
        setCart(newCart);
    }

    const context = {
        cart,
        clearCart,
        addToCart,
        isInCart,
        removeFromCart
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}