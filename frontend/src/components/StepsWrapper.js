import { Steps, Button, message } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../context/Context";
import { DIR, LABELS } from "../utils/constants";
import ConfigureCrowdStep from "./steps/ConfigureCrowdStep";
import DefineGoalStep from "./steps/DefineGoalStep";
import DesignStep from "./steps/DesignStep";
import ShareStep from "./steps/ShareStep";
import SpecifyInputStep from "./steps/SpecifyInputsStep";

const { Step } = Steps;

const StepsWrapper = () => {
  const { user } = useContext(Context);
  const [current, setCurrent] = useState(0);
  const [feedbackLink, setFeedbackLink] = useState("");
  let navigate = useNavigate();

  const baseURL = window.location.href.split("/")[2];
  console.log(baseURL, "BASEURL");
  const prevStep = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    if (current === steps.length - 1) {
      postForm();
    }
  }, [current]);

  const [form, setForm] = useState({
    username: user.username,
    link: undefined,
    iframe: false,
    type: [],
    scope: [],
    goal: [],
    measures: [],
    questions: [],
    crowd: undefined,
  });

  const postForm = async () => {
    console.log(form);
    message.success("Form created!");
    const res = await axios.post("/forms/", form);
    console.log(res);
    setFeedbackLink(`${baseURL}${DIR.feedback}/${res.data._id}`);
  };

  const goToHome = () => {
    navigate(DIR.home);
  };

  const nextStep = () => {
    if (current === steps.length - 1) {
      goToHome();
    } else {
      setCurrent(current + 1);
    }
  };

  const specifyInput = (values) => {
    console.log(values);
    setForm((prev) => ({ ...prev, ...values }));
    nextStep();
  };

  const setGoal = ({ type, scope, goal, measures }) => {
    setForm((prev) => ({ ...prev, type, scope, goal, measures }));
    nextStep();
  };

  const setDesign = (questions) => {
    let categoriesWithQuestions = true;
    console.log(questions);
    Object.values(questions).forEach((questionsArr) => {
      if (!questionsArr) {
        categoriesWithQuestions = false;
      }
    });
    if (categoriesWithQuestions) {
      console.log(questions, Object.values(questions));
      setForm((prev) => ({ ...prev, questions }));
      nextStep();
    } else {
      message.warning(
        "Please provide at least one question for each category."
      );
    }
  };

  const setCrowd = (values) => {
    setForm((prev) => ({ ...prev, ...values }));
    nextStep();
  };

  const updateRubrics = (rubrics) => {
    setForm((prev) => ({ ...prev, measures: rubrics }));
  };

  const steps = [
    {
      title: LABELS.specifyInput,
      content: (
        <SpecifyInputStep
          callbackFunction={specifyInput}
          initialValues={form}
        />
      ),
    },
    {
      title: LABELS.defineGoal,
      content: (
        <DefineGoalStep callbackFunction={setGoal} initialValues={form} />
      ),
    },
    {
      title: LABELS.design,
      content: (
        <DesignStep
          callbackFunction={setDesign}
          measures={form.measures}
          initialValues={form.questions}
          updateRubrics={updateRubrics}
        />
      ),
    },
    {
      title: LABELS.configureCrowd,
      content: (
        <ConfigureCrowdStep callbackFunction={setCrowd} initialValues={form} />
      ),
    },
    {
      title: LABELS.share,
      content: (
        <ShareStep callbackFunction={goToHome} shareLink={feedbackLink} />
      ),
    },
  ];

  return (
    <div style={styles.contentWrapper}>
      <Steps current={current} style={{ margin: " 0px 10px 30px 10px" }}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      {current > 0 && current < steps.length - 1 && (
        <Button onClick={() => prevStep()}>Back</Button>
      )}
      <div className="steps-content">{steps[current].content}</div>
    </div>
  );
};

const styles = {
  contentWrapper: {
    margin: "20px 50px",
  },
};

export default StepsWrapper;
