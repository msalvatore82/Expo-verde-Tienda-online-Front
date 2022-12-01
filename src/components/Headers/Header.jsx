import React, { useContext } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  SearchOutlined
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { UserContext } from "../../context/UserContext/UserState";
import {Badge, Button } from "antd";
import { ProductsContext } from "../../context/ProductContext/ProductState";


const Header = () => {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div className="nav-superior">
        <Menu mode="horizontal" defaultSelectedKeys={["home"]} style={{
              backgroundColor: "#293B31",
              color: "white",
            }}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="products" icon={<ShopOutlined />}>
        <Link to="/products">Products</Link>
      </Menu.Item>
          {token ? (
            <>
              <Menu.Item key="profile" icon={<UserOutlined />}>
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item
                key="logout"
                icon={<LogoutOutlined />}
                onClick={onLogout}
              >
                <Link to="/logout">Logout</Link>
              </Menu.Item>
              
            </>
          ) : (
            <Menu.Item key="login" icon={<UserAddOutlined />}>
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}
        </Menu>
      </div>
      <div>
        <Menu mode="horizontal"  >
          <Menu.Item key="serch"  style={{
            display: "flex",
            flexWrap: "wrap",  
              justifyContent: "center",         

            }}>
        
          
            <Button type="dashed" icon={<SearchOutlined />}
            style={{
              width:"350px",         

            }}>
              Search
            </Button>
          </Menu.Item>
          <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">
          {" "}
          <Badge count={cart.length} size="small">
            Cart
          </Badge>
        </Link>
      </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default Header;
