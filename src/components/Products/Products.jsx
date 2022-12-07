import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Tooltip } from "antd";
import "./Products.css";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { ProductsContext } from "../../context/ProductContext/ProductState";

const Products = () => {
  const { products, getProducts, addCart, cart, createfav } = useContext(ProductsContext);
  const [ data, setData ] = useState({
    fav: '',
    
})
  useEffect(() => {
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const storageFav = async (e) => {
    e.preventDefault();
    await createfav( data.fav );
    setData({fav: ''});
   
}

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
              <img
                src={product.image}
                alt=""
                style={{
                  width: 150,
                  border: "1px solid gray",
                  borderRadius: 10,
                }}
              />

              <p>
                {" "}
                <Tooltip title="Heart">
                  <Button 
                  onClick={() => {
                    setData({...data, fav: " +1"});
                    storageFav();
                  }}
                     style={{
                      border: "none",
                    }}
                    icon={
                      <HeartOutlined
                        style={{
                          color: "red",
                        }}
                      />
                    }
                  />
                </Tooltip>
                {product.price} €
              </p>
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



// {/* <HeartFilled /> */}