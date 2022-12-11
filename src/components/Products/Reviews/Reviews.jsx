// import React, { useContext, useEffect, useState } from "react";
// import { Button, Modal, Result } from "antd";
// import { ProductsContext } from "../../../context/ProductContext/ProductState";
// import { UserContext } from "../../../context/UserContext/UserState";
// import { useNavigate } from "react-router";

// const ProductReviews = () => {
//   const { product, deleteReview, getProduct, createReview } =
//     useContext(ProductsContext);
//   const { token, user, getUserInfo } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (token) getUserInfo();
//     // eslint-disable-next-line
//   }, []);

//   const showModal = () => {};
//   const handleOk = () => {};
//   const handleCancel = () => {};

//   return (
//     <div>
//       <>
//         <Button type="primary" onClick={showModal}>
//           Open Modal with customized footer
//         </Button>
//         <Modal onOk={handleOk} onCancel={handleCancel}>
//           <Result
//             status="success"
//             title="Enhorabuena, Te has registrado con exito"
//             subTitle="title"
//           />
//         </Modal>
//       </>
//     </div>
//   );
// };

// export default ProductReviews;
