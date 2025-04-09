import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import FormatCurrency from './FormatCurrency'
import data from '../data/items.json'

const ShoppingCart = () => {
    const { cartItems, isOpen, closeCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                Cart
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
          {cartItems.map((item)=>(
                <CartItem key={item.id} {...item}/>
            ))}
             <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = data.find((product) => product.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          </Stack>
        </Offcanvas.Body>

    </Offcanvas>
  )
}

export default ShoppingCart