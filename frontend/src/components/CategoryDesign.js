import React from "react";
import { Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import SingleQuestionDesign from "./SingleQuestionDesign";
import { EUCS, PEOU, PU, SUS, UTILIZATION } from "../utils/questionnaires";

const CategoryDesign = ({ category, initialValues }) => {
  console.log(initialValues);
  const getTemplate = () => {
    switch (category) {
      case "System quality":
        return PEOU;
      case "Utilization":
        return UTILIZATION;
      case "Usability":
        return SUS;
      case "User satisfaction":
        return EUCS;
      case "Personal benefits":
        return PU;
      default:
        return null;
    }
  };

  const parseToFormItems = (template) => {
    const templatequestions = template.questions.map((question) => ({
      type: template.answerFormat,
      question,
    }));
    return initialValues
      ? [...initialValues, ...templatequestions]
      : templatequestions;
  };

  const values = getTemplate()
    ? parseToFormItems(getTemplate())
    : initialValues;

  return (
    <div>
      <h2>{category}</h2>
      <Form.List name={category} initialValue={values}>
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <SingleQuestionDesign
                key={key}
                remove={remove}
                name={name}
                fieldKey={fieldKey}
                restField={undefined}
              />
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default CategoryDesign;
