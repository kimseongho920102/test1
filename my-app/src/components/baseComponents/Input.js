import React from "react";
import { Input } from "antd";

const BaseInput = ({ data, ...props }) => {
  return <Input {...props} />;
};

export default BaseInput;
