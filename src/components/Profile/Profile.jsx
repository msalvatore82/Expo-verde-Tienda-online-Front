/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Button, Spin, Badge, Modal, Result } from "antd";
import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import "./Profile.css";
const { Panel } = Collapse;

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);
const [visible,setVisible]=useState(false)
// const [isModalOpen, setIsModalOpen] = useState(false);
// const showModal = () => {
//   setIsModalOpen(true);
// };
// const handleOk = () => {
//   setIsModalOpen(false);
// };
// const handleCancel = () => {
//   setIsModalOpen(false);
// };
  useEffect(() => {
    getUserInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(user);
  

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
              <Button
              style={{
                  margin: "10px",
                  border: "1px solid black",
                }}>
              {/* <Badge count={user.Fav.length} size="x-small"></Badge> */}
                Mis Favoritos <StarOutlined />
              </Button>
            </div>
          </div>
          {user.Orders.map((item) => {
            return (
              
              (visible ? 
              <Collapse >
                <Panel className="panel" header={"Nº Pedido " + item.id} key="1" >
                  {item.Products.map((product) => (
                    
            
                    <> 
                    <p >{product.name}</p>
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
       {/* <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Result
                status="success"
                title="Enhorabuena, tu pedido se ha realizado con éxito"
                // subTitle={}
              />
            </Modal> */}
    </div>
  );
};

export default Profile;
