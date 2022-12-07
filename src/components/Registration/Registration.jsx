/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { Button, Form, Input, Radio } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import "./Registration.css";


const createUser = () => {
  const { register, message } = useContext(UserContext);
  const navigate = useNavigate();
  const onFinish = (values) => {
    register(values);
    setTimeout(() => {
      navigate("/");
      //   clearMessage()
    }, 3000);
  };
   

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container-registration">
      <h1>Registro de Usuarios</h1>
      <Form
        nname="basic"
       
        wrapperCol={{ span: 50 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre"
          name="name"
          rules={[
            {
              required: true,
              type: "text",
              message: "Por favor introduzca su nombre",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Apellido"
          name="surname"
          rules={[
            {
              required: true,
              type: "text",
              message: "Por favor introduzca su apellido!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Por favor introduzca un email valido!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              type: "password",
              message: "Por favor introduzca un password valido!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Radio.Group>
          <Radio.Button value="a">Hombre</Radio.Button>
          <Radio.Button value="b">Mujer</Radio.Button>
          <Radio.Button value="c">No Binario</Radio.Button>
        </Radio.Group>

        <Form.Item>
          <div className="textContainer">
            <span>¿Ya estás registrado?</span>{" "}
            <Link to="/login">
              {" "}
            
              <Button htmlType="submit" style={{
              marginTop: 15,
            }}>Inicia sesión </Button>{" "}
            </Link>
          </div>

          {message}
          <Button
            type="primary"
            htmlType="submit"
            style={{
              marginTop: 15,
            }}
          >
            Registarse
          </Button>
        <p style={{
              marginTop: 15,
              color: "black",
              fontSize: 15,
              fontWeight: 500
            }}>O Puedes intentarlo con 👇</p>
        </Form.Item>
      </Form>
        
    </div>
  );
};
export default createUser;
