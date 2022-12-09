import React, { useContext } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { UserContext } from "../../context/UserContext/UserState";
import { Badge, Button } from "antd";
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
        <Menu
          mode="horizontal"
          style={{
            backgroundColor: "#293B31",
            color: "white",
            justifyContent: "space-evenly"
          }}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Incio</Link>
          </Menu.Item>
          <Menu.Item key="products" icon={<ShopOutlined />}>
            <Link to="/products">Productos</Link>
          </Menu.Item>
          {token ? (
            <>
              <Menu.Item key="profile" icon={<UserOutlined />}>
                <Link to="/profile">Perfil</Link>
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
            <>
              <Menu.Item key="login" icon={<UserAddOutlined />}>
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="Registration" icon={<SolutionOutlined />}>
                <Link to="/register">Resgistro</Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      </div>
      <div className="nav-inferior">
        <Menu mode="horizontal" style={{
            justifyContent: "space-evenly",
          }}>
          <Menu.Item
            key="serch"
            style={{
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Button
              type="dashed"
              className="barra-search"
              icon={<SearchOutlined />}
              style={{
                width: "350px",
                direction: "vertical",
              }}
            >
              Busca aqui tus productos
            </Button>
          </Menu.Item>
          <Menu.Item
            key="cart"
            icon={
              <ShoppingCartOutlined
                style={{
                  fontSize: "25px",
                  border: "none",
                }}
              />
            }
          >
            <Link to="/cart">
              {" "}
              <Badge count={cart.length} size="x-small">
                Carrito
              </Badge>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default Header;
