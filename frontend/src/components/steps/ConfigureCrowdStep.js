import { Checkbox, Form, Row } from "antd";
import React from "react";
import Step from "../Step";
import { CROWD } from "../../utils/constants";

const ConfigureCrowdStep = ({ callbackFunction, initialValues }) => {
  return (
    <Step callbackFunction={callbackFunction} initialValues={initialValues}>
      <Form.Item name="crowd" label="Select your crowd type">
        <Checkbox.Group>
          {CROWD.map((crowdType) => (
            <Row
              key={crowdType.value}
              style={{
                border: "1px solid #C4C4C4",
                borderRadius: "10px",
                padding: "5px 10px",
                margin: "10px",
              }}
            >
              <Checkbox
                value={crowdType.value}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "5px",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>{crowdType.label}</span>
                  <span>{crowdType.description}</span>
                </div>
              </Checkbox>
            </Row>
          ))}
        </Checkbox.Group>
      </Form.Item>
    </Step>
  );
};

export default ConfigureCrowdStep;
