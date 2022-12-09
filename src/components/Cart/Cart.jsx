import React, { useContext, useEffect } from "react";
import { Divider, Button, Card, Result, Modal } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductContext/ProductState";
import { OrderContext } from "../../context/OrderContext/OrderState";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrderContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const navigate = useNavigate();
  const createNewOrder = () => {
    

    createOrder(cart);
    showModal();
    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 4000);
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <div
        className="container-products"
        style={{
          backgroundColor: "white",
          width: 800,
          borderRadius: 15,
          padding: 15,
          paddingBlockStart: 1,
          margin: "auto",
          marginTop: 15,
        }}
      >
        <Divider
          style={{
            color: "black",
            fontSize: 40,
            textAlign: "center",
          }}
        >
          Este es su pedido:
        </Divider>
        {cart.map((cartItem) => {
          console.log(cartItem);
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
                <Button type="primary" danger>
                  Eliminar
                </Button>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="card-buttons">
        <Button type="primary" size="large" onClick={clearCart}>
          Clear Cart
        </Button>
        <Button type="primary" size="large" onClick={createNewOrder}>
          Buy <ShoppingOutlined />
        </Button>
      </div>
      <Card
        className="box-total"
        size="small"
        title="El total de su pedido es:"
        style={{
          width: 250,
          fontWeight: 400,
          marginBottom: 15,
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          €{" "}
          {cart
            .map((item) => item.price)
            .reduce((a, b) => a + b)
            .toFixed(2)}
        </span>
      </Card>

      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Result
          status="success"
          title="Enhorabuena, tu pedido se ha realizado con éxito"
          subTitle={createNewOrder.id}
        />
      </Modal>
      <></>
    </>
  );
};

export default Cart;
