import React, { useEffect, useState } from "react";
import Step from "../Step";
import CategoryDesign from "../CategoryDesign";
import { Button, Form, Input } from "antd";
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined";

const DesignStep = ({
  callbackFunction,
  measures,
  initialValues,
  updateRubrics,
}) => {
  const [categories, setCategories] = useState(measures || []);
  const addCategory = (values) => {
    setCategories((prev) => [...prev, values.category]);
  };
  console.log(categories, measures);

  const deleteCategory = (category) => {
    setCategories((prev) => prev.filter((el) => el !== category));
  };

  useEffect(() => {
    updateRubrics(categories);
  }, [categories]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Form onFinish={addCategory} layout="inline" style={{ margin: "20px" }}>
        <Form.Item name="category" rules={[{ required: true }]}>
          <Input placeholder="category name"></Input>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Add category</Button>
        </Form.Item>
      </Form>
      <Step callbackFunction={callbackFunction}>
        {categories.map((category) => (
          <div style={{ display: "flex", margin: "0px 10px" }}>
            <CategoryDesign
              key={category}
              category={category}
              initialValues={initialValues[category]}
            />
            <MinusCircleOutlined
              title="Delete category"
              onClick={() => deleteCategory(category)}
            />
          </div>
        ))}
      </Step>
    </div>
  );
};

export default DesignStep;
