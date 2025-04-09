import React from "react";
import { Button, Card } from "react-bootstrap";
import FormatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreItem = ({ id, price, name, imgUrl }) => {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id) ;
  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="text-muted me-2">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100"onClick={()=>increaseCartQuantity(id)}>Add to cart</Button>
          ) : (
            <div className="d-flex align-items-center flex-column"style={{gap:"0.3rem"}}>
              <div className="d-flex justify-content-center align-items-center"style={{gap:"0.3rem"}}>
                <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                <span className="fs-3">{quantity} in cart</span>
                <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" size="sm"onClick={()=>removeFromCart(id)}>Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
