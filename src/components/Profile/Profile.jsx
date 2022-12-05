/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Button, Spin, Badge, Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import "./Profile.css";
const { Panel } = Collapse;

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);
const [visible,setVisible]=useState(false)
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
                onClick={()=>setVisible(true)}
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
          {user.Orders.map((item) => {
            return (
              (visible ? 
              <Collapse >
                <Panel header={"Nº Pedido" + item.id} key="1" >
                  {item.Products.map((product) => (
            
                    <> 
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <span>

                    </span>
        
                   
                    </>
                  ))}
                </Panel>
              </Collapse>
              : null
              )
            );
          })}
        </>
      )}
    </div>
  );
};

export default Profile;


<span
style={{
  fontSize: 20,
  fontWeight: 700,
}}
>
€{" "}

</span>