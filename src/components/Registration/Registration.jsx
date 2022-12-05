/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { Button, Form, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { Link } from "react-router-dom";

const createUser = () => {
  const { register } = useContext(UserContext);
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
      <h1>Login</h1>
      <Form
        nname="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
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
          <Input />
        </Form.Item>
     
        <Radio.Group
          defaultValue="a"
          style={{
            marginTop: 16,
          }}
        >
          <Radio.Button value="a">Hombre</Radio.Button>
          <Radio.Button value="b">Mujer</Radio.Button>
          <Radio.Button value="c">No Binario</Radio.Button>
        </Radio.Group>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default createUser;
