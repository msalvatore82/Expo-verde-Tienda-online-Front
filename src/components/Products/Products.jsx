import React, { useContext, useEffect } from "react";
import { Card, Button, Row } from "antd";
import "./Products.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductContext/ProductState";


const Products = () => {
  const { products, getProducts, addCart, cart } = useContext(ProductsContext);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="container-products">
      {products.map((product) => {
        return (
          <div key={product.id} className="site-card-border-less-wrapper">
            <Card
              title={product.name}
              bordered={true}
              style={{
                width: 300,
                border: "1px solid black",
                textAlign: "center",
                
              }}
            >
                <img src={product.image} alt="" style={{
                width: 150,
                border: "1px solid gray",
                borderRadius: 10,
              }} 
                />
              <p>{product.price} €</p>
              <Button onClick={() => addCart(product)}>
                Add Cart <ShoppingCartOutlined />
              </Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;