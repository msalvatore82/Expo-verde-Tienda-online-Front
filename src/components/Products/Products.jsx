import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Badge } from "antd";
import "./Products.scss";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductContext/ProductState";

const Products = () => {
  const {
    products,
    getProducts,
    addCart,
    cart,
    createfav,
    getProductByName,
    getProductByCategory,
    orderProductAsc,
    orderProductDes,
  } = useContext(ProductsContext);
  
  const [busqueda, setBusqueda] = useState("");
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const buscar = (name) => {
    getProductByName(name);
    document.getElementsByClassName("buscador")[0].value = "";
  };

  const showAll = () => {
    getProducts();
    document.getElementsByClassName("buscador")[0].value = "";
  };

  const filtro = (num) => {
    getProductByCategory(num);
  };

  const orderAsc = () => {
    orderProductAsc();
  };

  const orderDesc = () => {
    orderProductDes();
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="container-products">
      {products.map((product) => {
        console.log(product);
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
              <img
                src={product.image}
                alt=""
                style={{
                  width: 150,
                  border: "1px solid gray",
                  borderRadius: 10,
                }}
              />{" "}
              <p>{product.price} €</p>
              <Button onClick={() => addCart(product)}>
                Add Cart <ShoppingCartOutlined />
              </Button>
              <Button
                onClick={() => {
                  createfav(product.id);

                  getProducts();
                }}
                style={{
                  border: "none",
                  marginLeft: 15,
                }}
                icon={
                  <HeartOutlined
                    style={{
                      color: "red",
                      fontSize: "25px",
                      border: "none",
                    }}
                  />
                }
              />
              <Badge
                count={product.Users.length}
                size="small"
                style={{
                  fontSize: 9,
                  marginBottom: 30,
                  marginLeft: -10,
                }}
              ></Badge>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
