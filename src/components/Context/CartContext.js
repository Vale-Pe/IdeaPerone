import { createContext, useState } from 'react';
import Swal from 'sweetalert2'

export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({ defaultValue = [], children }) => {

    const [items, setItems] = useState(defaultValue);
/*     const [precio, setPrecio] = useState(0)

    const precioTotal = () => {
        setPrecio(items.map(p => precio = ( precio + parseInt(p.item.products.price * p.quantity))))
        //console.log(precio)
    } */

    const clearCart = () => {
        setItems([])
    }

    const newItem = [...items]

    const addToCart = (item, quantity) => {
        console.log(item, quantity)
/*      console.log(quantity)
        console.log(item.quantity)  */

        if(isInCart(item.products.id)) {

            console.log(item.products.id)

            for (const element of newItem) {
                if((element.quantity + quantity)<=(item.products.quantity)) {
                    element.quantity = element.quantity + quantity

                } else {
                    Swal.fire({
                        text: `El máximo de productos permitidos es ${item.products.quantity}`,
                        icon: 'error',
                    })
                    /* addToCart(false, false) */
                }
                setItems(newItem);
                console.log(items)
            }
            setItems(newItem);
            console.log(items)

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
            console.log(item)
        }
    }

    const isInCart = (id) => {
        //return items.find((element) => element.item.id ===id); 
        const found = [...items].some((element) => element.item.products.id ===id)
        return found ;
    }

    const removeFromCart = (id) => {
        setItems([...items].filter(element => element.item.products.id !== id))
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