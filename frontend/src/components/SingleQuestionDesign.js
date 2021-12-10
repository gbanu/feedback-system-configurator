import React, { useEffect, useState } from "react";
import { Form, Input, Select, Space } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import { QUESTION_TYPE } from "../utils/constants";

const SingleQuestionDesign = ({ remove, name, fieldKey, restField }) => {
  const [type, setType] = useState("");
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [maxValueVisible, setMaxValueVisible] = useState(false);

  const onTypeSelect = (e) => {
    setType(e);
  };

  useEffect(() => {
    if (type === "multiple" || type === "single") {
      setOptionsVisible(true);
    } else if (type === "slider" || type === "rating") {
      setMaxValueVisible(true);
    }
    return () => {
      setOptionsVisible(false);
      setMaxValueVisible(false);
    };
  }, [type]);

  return (
    <Space style={{ display: "flex", marginBottom: 8 }} align="baseline">
      <Form.Item
        {...restField}
        name={[name, "question"]}
        fieldKey={[fieldKey, "question"]}
        rules={[{ required: true, message: "Please enter question" }]}
      >
        <Input style={{ width: "500px" }} placeholder="Question" />
      </Form.Item>
      <Form.Item
        {...restField}
        name={[name, "type"]}
        fieldKey={[fieldKey, "type"]}
        rules={[
          {
            required: true,
            message: "Please select type of question",
          },
        ]}
      >
        <Select style={{ width: 120 }} onChange={onTypeSelect}>
          {Object.keys(QUESTION_TYPE).map((key) => (
            <Select.Option value={key} key={key}>
              {QUESTION_TYPE[key]}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      {optionsVisible && (
        <Form.Item
          {...restField}
          name={[name, "options"]}
          fieldKey={[fieldKey, "options"]}
          rules={[
            {
              required: true,
              message: "Please provide answer options",
            },
          ]}
        >
          <Input placeholder="option1, option2" />
        </Form.Item>
      )}
      {maxValueVisible && (
        <Form.Item
          {...restField}
          name={[name, "maxValue"]}
          fieldKey={[fieldKey, "maxValue"]}
          rules={[
            {
              required: true,
              message: "Please provide maximum value",
            },
          ]}
        >
          <Input placeholder="5" type="number" />
        </Form.Item>
      )}
      <MinusCircleOutlined onClick={() => remove(name)} />
    </Space>
  );
};

export default SingleQuestionDesign;
