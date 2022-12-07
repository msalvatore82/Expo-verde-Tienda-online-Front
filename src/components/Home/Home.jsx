import React from "react";

import "./Home.scss";
import { Carousel } from "antd";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div className="product-collection">
      <div className="container">
        <Carousel autoplay>
          <div>
            {/* <h3 style={contentStyle}>1</h3> */}
            <img src='/images/banner-navidad.jpg' alt="" />
          </div>
          <div>
            {/* <h3 style={contentStyle}>2</h3> */}
            <img src='/images/homenavi.png' alt="" />
          </div>
          <div>
            {/* <h3 style={contentStyle}>3</h3> */}
            <img src='/images/luces.jpg' alt="" />
          </div>
          <div>
            {/* <h3 style={contentStyle}>4</h3> */}
            <img src='/images/perro.jpg' alt="" />
          </div>
        </Carousel>
        <div className="product-collection-wrapper">
          {/* <!-- product col left --> */}
          <div className="product-col-left flex">
            <div className="product-col-content">
              <h2 className="sm-title sm-title-home">
                Resistentes y fáciles de mantener
              </h2>
              <h2 className="md-title md-title-home">Plantas de interior</h2>
              <p className="text-light">
                Comprar plantas de interior para convertir tus espacios en
                lugares verdes y armoniosos es una muy buena idea. Benefíciate
                del poder del mejor purificador del aire natural y de sus
                ventajas en decoración.
              </p>
              <Link to="/products">
                <button type="button" className="btn-dark">
                  Compra ahora
                </button>
              </Link>
            </div>
          </div>

          {/* <!-- product col right --> */}
          <div className="product-col-right">
            <div className="product-col-r-top flex">
              <div className="product-col-content">
                <h2 className="sm-title sm-title-home">
                  Da vida y color a tu jardín, terraza o balcón.
                </h2>
                <h2 className="md-title md-title-home">Plantas de exterior</h2>
                <p className="text-light">
                  Las plantas de exterior son unas alternativas idóneas para
                  decorar esos espacios que se encuentran de puertas hacia
                  afuera de tus recintos con la mayor distinción. Se trata de
                  una fórmula muy agradecida y, de hecho, continúa de moda en
                  numerosos exteriores, por lo que podemos asegurarte que su
                  popularidad sigue intacta.
                </p>
                <Link to="/products">
                  <button type="button" className="btn-dark">
                    Compra ahora
                  </button>
                </Link>
              </div>
            </div>
            <div className="product-col-r-top2 flex">
              <div className="product-col-content">
                <h2 className="sm-title sm-title-home">
                  amplia y cuidada selección de artículos y accesorios para tu
                  jardín.
                </h2>
                <h2 className="md-title md-title-home">Accesorios</h2>
                <p className="text-light">
                  En Expo Verde lo tenemos todo en herramientas de jardinería
                  profesional. Adquiere aquí tus sistemas de riego, macetas,
                  palas, abonos, medidores, tijeras de poda, cepillos... ¡Nos
                  extrañaría que lo que busques no esté en nuestra tienda de
                  jardinería!
                </p>
                <Link to="/products">
                  <button type="button" className="btn-dark">
                    Compra ahora
                  </button>
                </Link>
              </div>
            </div>
            <div className="product-col-r-top3 flex">
              <div className="product-col-content">
                <h2 className="sm-title sm-title-home">
                  Plantas, mascotas y todo para tu jardín.
                </h2>
                <h2 className="md-title md-title-home">Marca Expo Verde</h2>
                <p className="text-light">
                  La calidad y los ingredientes naturales son las dos
                  características de los productos marca Expo Verde. Una gama
                  diseñada y formulada para ofrecerte todo lo que necesitas para
                  cuidar de tus plantas, tu jardín, tu huerto o tu mascota con
                  nuestro sello de garantía. ¡Descubre todos los productos marca
                  Expo Verde!
                </p>
                <Link to="/products">
                  <button type="button" className="btn-dark">
                    Compra ahora
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
