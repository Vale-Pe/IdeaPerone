import { createContext, useState } from 'react';
import Swal from 'sweetalert2'

export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({ defaultValue = [], children }) => {

    const [items, setItems] = useState(defaultValue);

    const clearCart = () => {
        setItems([])
    }

    const newItem = [...items]

    const addToCart = (item, quantity) => {
        console.log(item, quantity)
/*      console.log(quantity)
        console.log(item.quantity)  */

        if(isInCart(item.id)) {

            for (const element of newItem) {
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
            setItems(newItem);
            console.log(newItem)

        } else {
            setItems(
                [
                    ...items,
                    {
                        item: item,
                        quantity: quantity
                    }
                ]
            )
        }
    }

    const isInCart = (id) => {
        /* return items.find((element) => element.item.id ===id); */
        const found = items.some((element) => element.item.id ===id)
        return found;
    }

    const removeFromCart = (id) => {
/*         const newItem = [...items].filter(element => element.item.id !== id)
        setCart(newItem); */
        setItems(items.filter(item => item.id !== id))
    }

    const context = {
        newItem,
        items,
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