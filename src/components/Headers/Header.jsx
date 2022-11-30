import React, { useContext } from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { UserContext } from "../../context/UserContext/UserState";
// import { Green } from '@ant-design/colors';

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div classNameName="nav-superior">
        <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
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
      <div className="nav-inferior">
        <nav className="nav">
          <div className="">
            <form className="text-serch" role="search">
              <input
                className=""
                type="search"
                placeholder="Busca aqui tus productos"
                aria-label="Search"
              />
              <button className="btn-serch" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
