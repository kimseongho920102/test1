import React from "react";
import { Input } from "antd";

const BaseTextarea = ({ ...props }) => {
  return <Input.TextArea {...props} />;
};

export default BaseTextarea;
