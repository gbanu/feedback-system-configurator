import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Rate,
  Slider,
  Checkbox,
  Radio,
  Button,
  message,
} from "antd";
import axios from "axios";
import { useLocation } from "react-router";
import { LIKERT, YES_NO } from "../utils/constants";

const { TextArea } = Input;

const displayQuestion = (question) => {
  switch (question.type) {
    case "textarea":
      return <TextArea />;
    case "rating":
      return <Rate count={question.maxValue} />;
    case "input":
      return <Input />;
    case "slider":
      return <Slider max={question.maxValue} />;
    case "multiple":
      return <Checkbox.Group options={question.options.split(",")} />;
    case "single":
      return <Radio.Group options={question.options.split(",")} />;
    case "likert":
      return <Radio.Group options={LIKERT} />;
    case "yesno":
      return <Radio.Group options={YES_NO} />;
    default:
      return <Input />;
  }
};
const parseQuestions = (questions) => {
  const categories = Object.keys(questions);
  console.log(categories, questions);
  return categories.map((category) => (
    <div key={category} style={{ margin: "10px" }}>
      <h3>{category}</h3>
      {questions[category].map((singleQuestion) => (
        <Form.Item
          label={singleQuestion.question}
          name={singleQuestion.question}
          key={singleQuestion.question}
        >
          {displayQuestion(singleQuestion)}
        </Form.Item>
      ))}
    </div>
  ));
};

const FeedbackPage = () => {
  const [form, setForm] = useState();
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [link, setLink] = useState("");
  const {
    groups: { formId },
  } = /.*\/(?<formId>.+)/.exec(location.pathname);
  console.log(formId);

  useEffect(() => {
    const getForm = async (formId) => {
      const resForm = await axios.get("/forms/" + formId);
      setForm(resForm.data);
      setQuestions(resForm.data.questions);
      setLink(resForm.data.link);
    };
    getForm(formId);
  }, [formId]);

  const onFinish = async (values) => {
    console.log(values);
    const res = await axios.post("/answers/", {
      form: formId,
      answers: values,
    });
    console.log(res);
    message.success("Thank you for your feedback!");
  };

  return (
    <Row gutter={[0, 0]}>
      {form && (
        <>
          <Col span={18}>
            <iframe style={style} title="subject" src={link}></iframe>
          </Col>
          <Col span={6}>
            <div style={{ ...style, overflowY: "scroll" }}>
              <Form onFinish={onFinish} layout="vertical">
                {parseQuestions(questions)}
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </>
      )}
    </Row>
  );
};

const style = {
  height: "calc(100vh - 56px)",
  width: "100%",
  margin: "0",
  border: "none",
};

export default FeedbackPage;
