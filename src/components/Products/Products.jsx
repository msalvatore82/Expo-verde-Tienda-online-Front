import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Row } from "antd";
import "./Products.scss";
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

return(
  <div className="cont">
    <div className="search-div">
        <input className="buscador" type='search' placeholder='Buscar' onChange={handleChange}>
        </input>
        <button id ="Button" className="search-btn " onClick={() => buscar(busqueda)}>Search</button>
        <button id ="Button" className="reset-btn" onClick={() => showAll()}>Show All</button>

        <div className="drop-btns">
          <div class="dropdown">
            <button  class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Clothing
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <p class="dropdown-item" onClick={() => filtro(1)}>T-Shirts</p>
              <p class="dropdown-item" onClick={() => filtro(2)}>Trousers</p>
              <p class="dropdown-item" onClick={() => filtro(3)}>Hoodies</p>
              <p class="dropdown-item" onClick={() => filtro(4)}>Accesories</p>
            </div>
          </div>

          <div class="dropdown">
            <button  class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort by Price
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <p class="dropdown-item" onClick={() => orderAsc()}>Lowest to Hightest</p>
              <p class="dropdown-item" onClick={() => orderDesc()}>Highest to Lowest</p>
            </div>
          </div>
        </div>

      </div>
      <div className="order">
        {product}


      </div>
  </div>
  )

};

export default Products;