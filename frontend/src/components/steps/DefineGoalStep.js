import React, { useState } from "react";
import { Form, Checkbox } from "antd";
import Step from "../Step";
import {
  feedbackScopeOptions,
  feedbackTypeOptions,
  goalOptions,
  measures,
} from "../../utils/constants";

const DefineGoalStep = ({ callbackFunction, initialValues }) => {
  const [showMeasures, setShowMeasures] = useState(
    initialValues.goal.includes("Assess")
  );

  const onGoalChange = (checkedValues) => {
    if (checkedValues.includes("Assess")) {
      setShowMeasures(true);
    } else {
      setShowMeasures(false);
    }
  };

  return (
    <div>
      <Step callbackFunction={callbackFunction} initialValues={initialValues}>
        <Form.Item name="type" label="Select feedback type">
          <Checkbox.Group options={feedbackTypeOptions}></Checkbox.Group>
        </Form.Item>
        <Form.Item name="scope" label="Define feedback scope">
          <Checkbox.Group options={feedbackScopeOptions}></Checkbox.Group>
        </Form.Item>
        <Form.Item name="goal" label="Define your goal">
          <Checkbox.Group
            options={goalOptions}
            onChange={onGoalChange}
          ></Checkbox.Group>
        </Form.Item>
        {showMeasures && (
          <Form.Item name="measures" label="Select measures">
            <Checkbox.Group options={measures}></Checkbox.Group>
          </Form.Item>
        )}
      </Step>
    </div>
  );
};

export default DefineGoalStep;
