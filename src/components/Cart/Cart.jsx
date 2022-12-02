import React, { useContext, useEffect } from "react";
import { Divider, Button, Card } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductContext/ProductState";
import { OrderContext } from "../../context/OrderContext/OrderState";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrderContext);
  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div
      style={{
        width: 700,
        border: "1px solid gray",
        borderRadius: 10,
      }}
    >
      <div className="container-products">
        <Divider orientation="left">Your Cart</Divider>
        {cart.map((cartItem) => {
          return (
            <div key={cartItem.id} className="site-card-border-less-wrapper">
              <Card
                title={cartItem.name}
                bordered={true}
                style={{
                  width: 300,
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                <img
                  src={cartItem.image}
                  alt=""
                  style={{
                    width: 150,
                    border: "1px solid gray",
                    borderRadius: 10,
                  }}
                />
                <p>{cartItem.price} €</p>
              </Card>
            </div>
          );
        })}
      </div>
      <div>
        <Button onClick={clearCart}>Clear Cart</Button>
        <Button onClick={createNewOrder}>
          Buy <ShoppingOutlined />
        </Button>
      </div>
    </div>
  );
};

export default Cart;
