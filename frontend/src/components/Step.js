import { Button, Form } from "antd";
import React from "react";

const Step = ({
  children,
  callbackFunction,
  nextButtonTitle = "Next",
  customStyle = null,
  form = null,
  initialValues = null,
}) => {
  const onFinish = (values) => {
    console.log(values);
    callbackFunction(values);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={customStyle || style}>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
        layout="vertical"
        initialValues={initialValues}
      >
        {children}
        <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
          <Button type="primary" htmlType="submit">
            {nextButtonTitle}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const style = {
  display: "flex",
  justifyContent: "center",
};

export default Step;
