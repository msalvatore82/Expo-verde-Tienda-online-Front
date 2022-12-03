/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Button, Spin, Badge, Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import "./Profile.css";

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="card-profile">
      {!user ? (
        <Spin size="large" />
      ) : (
        <>
          <div class="card-container">
            <img
              class="round"
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="user"
            />
            <h3>
              {user.name} {user.surname}
            </h3>
            <h6>{user.email}</h6>
            <p>
              User interface designer and <br /> front-end developer
            </p>
            <div></div>

            <div class="buttons">
              <Button
                // onClick={createNewResgister}
                style={{
                  margin: "10px",
                  border: "1px solid black",
                }}
              >
                <Badge count={user.Orders.length} size="x-small"></Badge>
                Mis Pedidos <ShoppingCartOutlined />
              </Button>
              {/* <Button onClick={() => }>
                Mis Favoritos <ShoppingCartOutlined />
              </Button> */}
            </div>
          </div>
          <p>
            <Card
              title="{product.name}"
              bordered={true}
              style={{
                width: 300,
                border: "1px solid black",
                textAlign: "center",
                marginTop: 15,
              }}
            >
              <p>"product.price" €</p>
            </Card>
          </p>
        </>
      )}
    </div>
  );
};

export default Profile;

// {user.Orders.map((order) => (order.Products.map((product) =>  {
//   return (
//
// )
// }
