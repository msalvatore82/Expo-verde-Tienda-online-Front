// import React, { useContext, useEffect } from "react";
// import { Card, Button } from "antd";
// import "./OrderProfile.css";
// import { ShoppingCartOutlined } from "@ant-design/icons";
// import { OrderContext } from "../../../context/OrderContext/OrderState";



// const OrderProfile = () => {
//     const { getProducts, addCart, cart, product} = useContext(OrderContext);
//     useEffect(() => {
//         getProducts();
//     }, []);
  
//     useEffect(() => {
//       localStorage.setItem("cart", JSON.stringify(cart));
//     }, [cart]);
  
//     return (
//       <div className="container-products">
//         {user.Orders.map((order) => {
//              console.log(order.Products.map((product) => product.name))
//           return (
//             <div className="site-card-border-less-wrapper">
//               <Card
//                 title={product.name}
//                 bordered={true}
//                 style={{
//                   width: 300,
//                   border: "1px solid black",
//                   textAlign: "center",    
//                 }}
//               >
//                   <img src={product.image} alt="" style={{
//                   width: 150,
//                   border: "1px solid gray",
//                   borderRadius: 10,
//                 }} 
//                   />
//                 <p>{product.price} €</p>
//                 <Button onClick={() => addCart(product)}>
//                   Add Cart <ShoppingCartOutlined />
//                 </Button>
//               </Card>
//             </div>
//                 );
//               })}
//       </div>
//     );
//   };
  
//   export default OrderProfile;

  