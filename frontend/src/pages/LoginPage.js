import React, { useContext } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import { Context } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";
import { DIR } from "../utils/constants";

const LoginPage = () => {
  const { dispatch } = useContext(Context);
  let navigate = useNavigate();

  const onFinish = async (values) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login/", {
        username: values.username,
        password: values.password,
      });
      console.log(res);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate(DIR.home);
    } catch (err) {
      console.log(err);
      dispatch({ type: "LOGIN_FAIL" });
      message.warning("Wrong credentials.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        marginTop: "50px",
        padding: "20px",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

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
      <Link style={{ marginTop: "20px" }} to={DIR.register}>
        Create new account
      </Link>
    </div>
  );
};
export default LoginPage;
