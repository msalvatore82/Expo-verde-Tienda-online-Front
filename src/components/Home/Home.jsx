import React from 'react'
import foto1 from "../../assets/img/banner-navidad.jpg"
import "./Home.css"
import { Carousel } from 'antd';


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Home  = () => {
    return (
  <Carousel autoplay className='imagen'>
    <div>
      <h3 style={contentStyle}><img src={foto1} alt="" /></h3>
    </div>
    <div>
    <h3 style={contentStyle}><img src={foto1} alt="" /></h3>
    </div>
    <div>
    <h3 style={contentStyle}><img src={foto1} alt="" /></h3>
    </div>
    <div>
    <h3 style={contentStyle}><img src={foto1} alt="" /></h3>
    </div>
  </Carousel>
);
}


export default Home






