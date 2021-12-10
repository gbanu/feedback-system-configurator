import React, { useContext } from "react";
import { Card, Col, message } from "antd";
import { Link } from "react-router-dom";
import {
  CommentOutlined,
  EyeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Context } from "../context/Context";
import { DIR } from "../utils/constants";

const { Meta } = Card;

const FormCard = ({ data }) => {
  const { user } = useContext(Context);

  const handleDeleteForm = async (id) => {
    console.log(user);
    const res = await axios.delete("/forms/" + id, {
      data: { username: user.username },
    });
    console.log(res);
    message.success("Form deleted");
    window.location.replace(DIR.home);
  };
  return (
    <Col xs={12} sm={8} md={6}>
      <Card
        style={{
          maxWidth: 240,
          width: "100% ",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.1)",
        }}
        actions={[
          <Link to={`manage/${data._id}`} title="View answers">
            <CommentOutlined key="answers" />
          </Link>,
          <Link to={`feedback/${data._id}`} title="Preview">
            <EyeOutlined key="preview" />
          </Link>,
          <DeleteOutlined
            key="delete"
            title="Delete form"
            onClick={() => handleDeleteForm(data._id)}
          />,
        ]}
      >
        <Meta
          title={data.title}
          description={new Date(data.createdAt).toDateString()}
        />
      </Card>
    </Col>
  );
};

export default FormCard;
