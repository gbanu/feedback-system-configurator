import React, { useContext, useEffect, useState } from "react";
import { Row, Typography, Button } from "antd";
import FormCard from "../components/FormCard";
import { LABELS } from "../utils/constants";
import axios from "axios";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const USER_FORMS = [
  { _id: "Create new", data: "create new form" },
  { _id: "form1", data: "formdata" },
  { _id: "form2", data: "formdata" },
];

const HomePage = () => {
  const { user } = useContext(Context);
  const [userForms, setUserForms] = useState(USER_FORMS);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchForms = async (username) => {
      const res = await axios.post("forms/userforms", { username });
      console.log(res);
      setUserForms(res.data);
    };
    fetchForms(user.username);
  }, []);

  const userFormsCards = userForms.map((form) => (
    <FormCard data={form} key={form._id} />
  ));

  const handleAddNew = () => {
    navigate("/configurator/");
  };

  return (
    <div>
      <Row
        justify="space-between"
        align="middle"
        style={{ padding: "20px 40px" }}
      >
        <Title level={3}>{LABELS.myForms}</Title>
        <Button type="primary" onClick={handleAddNew}>
          Add new
        </Button>
      </Row>

      <Row gutter={[24, 16]} style={{ marginRight: "5%", marginLeft: "5%" }}>
        {userForms ? userFormsCards : "No forms yet"}
      </Row>
    </div>
  );
};

export default HomePage;
