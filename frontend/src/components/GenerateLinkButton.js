import React from "react";
import { Button } from "antd";

export const uniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const GenerateLinkButton = () => {
  <Button></Button>;
};

export default GenerateLinkButton;
