import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Badge, Modal } from "antd";
import "./Products.scss";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  FormOutlined,
} from "@ant-design/icons";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductContext/ProductState";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ content: "" });
  const initialState = { content: "" };
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const clearReviews = () => {
    setData({ ...initialState });
  };

  const {
    products,
    getProducts,
    addCart,
    cart,
    createfav,
    fav,
    createReview,
    getProductByName,
    getProductByCategory,
    orderProductAsc,
    orderProductDes,
  } = useContext(ProductsContext);

  const [busqueda, setBusqueda] = useState("");
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  function test(test) {
    console.log(test);
  }

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

  useEffect(() => {
    getProducts();
  }, [fav]);

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
              <img
                src={product.image}
                alt=""
                style={{
                  width: 150,
                  border: "1px solid gray",
                  borderRadius: 10,
                }}
              />{" "}
              <p>{product.price} ???</p>
              <Button onClick={() => addCart(product)}>
                Add Cart <ShoppingCartOutlined />
              </Button>
              <div>
                <FormOutlined
                  onClick={() => setOpen(true)}
                  style={{
                    border: "none",
                    marginLeft: 15,
                    fontSize: 20,
                  }}
                />
              </div>
              <Button
                onClick={() => {
                  createfav(product.id);
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
              <div>
                
                <p style={{
                      
                      
                      marginTop: 10
                    }}>
             
                  Deja un comentario: 
                  < FormOutlined
                    onClick={() => {
                      setOpen(true);
                    }}
                    style={{
                      color: "blue",
                      fontSize: "25px",
                      border: "none",
                      marginLeft: 10,
                      paddingBottom: 5
                    }}
                  />
                </p>
              </div>
            </Card>
            <>
              <Modal
                title="Que opinas de este producto? "
                centered
                open={open}
                onOk={() => {
                  test(product.id);
                  setOpen(false);
                  clearReviews();
                }}
                onCancel={() => {
                  setOpen(false);
                  clearReviews();
                }}
                width={500}
                onClick={() => {
                  createReview(product);
                }}
              >
                <form
                  action=""
                  style={{
                    margin: "auto",
                    marginBottom: 10,
                    
                  }}
                >
                  <label>Ingresa tu review: </label>
                  <input
                    type="text"
                    name="content"
                    className="input-reviewa"
                    value={data.content}
                    placeholder="Escriba aqui su Review"
                    onChange={handleInputChange}
                  />
                </form>
                <Card title="hola" className="card-reviews">
                  <p>hola</p>
                </Card>
                <Card title="hola" className="card-reviews">
                  <p>hola</p>
                </Card>
              </Modal>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

// ProductReviews