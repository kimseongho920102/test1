import React from "react";
import { Input } from "antd";

const BaseSearch = ({ ...props }) => {
  return <Input.Search {...props} />;
};

export default BaseSearch;
