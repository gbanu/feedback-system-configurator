import { Form, Input, Radio } from "antd";
import React from "react";
import Step from "../Step";

const SpecifyInputsStep = ({ callbackFunction, initialValues }) => {
  return (
    <Step callbackFunction={callbackFunction} initialValues={initialValues}>
      <Form.Item name="title" label="Title of the form">
        <Input />
      </Form.Item>
      <Form.Item
        name="link"
        label="Link to your website"
        rules={[
          {
            required: true,
          },
          {
            type: "url",
          },
          {
            type: "string",
            min: 6,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="iframe" label="Does your website allow iframe?">
        <Radio.Group>
          <Radio value={true}>iframe allowed</Radio>
          <Radio value={false}>iframe not allowed</Radio>
        </Radio.Group>
      </Form.Item>
    </Step>
  );
};

export default SpecifyInputsStep;
