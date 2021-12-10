import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import axios from "axios";
import { DownloadOutlined } from "@ant-design/icons";
import { useLocation } from "react-router";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import Column from "antd/lib/table/Column";
import { CSVLink } from "react-csv";

const CsvExportButton = ({ headers, data, filename }) => {
  return (
    <Button icon={<DownloadOutlined />} style={{ margin: "20px" }}>
      <CSVLink data={data} headers={headers} filename={filename}>
        Export
      </CSVLink>
    </Button>
  );
};

const ManageFormTabs = () => {
  const [form, setForm] = useState();
  const [questions, setQuestions] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const location = useLocation();
  const formId = location.pathname.split("/")[2];

  useEffect(() => {
    const viewForm = async (formId) => {
      const resForm = await axios.get("/forms/" + formId);
      const resFeedback = await axios.post("/answers/formfeedback/", {
        form: formId,
      });
      setForm(resForm.data);
      setFeedback(resFeedback.data);
      setQuestions(resForm.data.questions);
    };
    viewForm(formId);
  }, [formId]);

  const getQuesitionsForExport = (questionsObj) => {
    const categories = Object.keys(questionsObj);
    const qs = [];
    categories.forEach((category) => {
      questionsObj[category].forEach((question) => {
        console.log(question, `${category}_${question.question}`);
        qs.push({
          label: `${category}_${question.question}`,
          key: question.question,
        });
      });
    });
    return qs;
  };

  const getAnswersForExport = (feedbackArr) => {
    const as = [];

    feedbackArr.forEach((feedback) => {
      as.push(feedback.answers);
    });
    console.log(as);
    return as;
  };

  const getDataSource = (feedbackArr) => {
    return feedbackArr.map((feedback) => feedback.answers);
  };

  const getColumns = (questionsObj) => {
    const categories = Object.keys(questionsObj);
    console.log(questionsObj, categories);
    return categories.map((category) => (
      <ColumnGroup key={category} title={category}>
        {questionsObj[category].map((question) => (
          <Column
            title={question.question}
            dataIndex={question.question}
            key={question.question}
            render={(text) => String(text)}
          ></Column>
        ))}
      </ColumnGroup>
    ));
  };

  return (
    <div style={{ margin: "20px" }}>
      {form !== undefined && (
        <>
          {getQuesitionsForExport(questions) && (
            <CsvExportButton
              headers={getQuesitionsForExport(questions)}
              data={getAnswersForExport(feedback)}
              filename={`${form.title}_feedback`}
            />
          )}
          <Table dataSource={getDataSource(feedback)} scroll={{ x: true }}>
            {getColumns(questions)}
          </Table>
        </>
      )}
    </div>
  );
};

export default ManageFormTabs;
