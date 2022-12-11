/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Button, Spin, Badge } from "antd";
import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import "./Profile.css";
import Products from "../Products/Products";
const { Panel } = Collapse;

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(user.Orders[0].Products[0].Users); constador de fav en perfiles

  return (
    <div className="card-profile flex-container">
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
            {/* <p>
              User interface designer and <br /> front-end developer
            </p> */}
            <div></div>

            <div class="buttons">
              <Button
                onClick={() => setVisible(true)}
                style={{
                  margin: "10px",
                  border: "1px solid black",
                 }}
              >
                
                 Mis Pedidos
                <ShoppingCartOutlined
                  style={{
                    fontSize: 20,
                  
                  }}
                />
                <Badge  count= {user.Orders.length} size="x-small"  ></Badge>
              </Button>
              <Button
                style={{
                  margin: "10px",
                  border: "1px solid black",
                }}
              >
                Mis Favoritos{" "}
                <StarOutlined
                  style={{
                    fontSize: 20,
                  }}
                />
                <Badge count={5} size="x-small"></Badge>
              </Button>
            </div>
          </div>
          <div className="flex-items">
            {user.Orders.map((item) => {
              return visible ? (
                <Collapse
                  bordered={false}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    alignItems: "stretch",
                    alignContent: "normal",
                    width: 250,
                    justifyContent: "center",
                    border: "2px solid gray",
                    margin: 8,
                    background: "#FFFFFF",
                    fontWeight: 500,
                  }}
                >
                  <Panel header={"Nº Pedido " + item.id}>
                    {item.Products.map((product) => (
                      <>
                        <div
                          style={{
                            margin: -10,
                            border: "2px solid gray",
                            marginTop: 5,
                            marginBottom: 5,
                            fontWeight: 500,
                            borderRadius: 5,
                            textAlign: "center",
                          }}
                        >
                          <span>
                            {product.name} <br />
                          </span>
                          <samp> € {product.price} </samp>

                          {/* <p>
                          
                        </p> */}
                        </div>
                      </>
                    ))}
                    <>
                      {/* total del pedido */}
                      {/* <samp> Total =  </samp> */}
                    </>
                  </Panel>
                </Collapse>
              ) : null;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
