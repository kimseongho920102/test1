import React from "react";
import { Select } from "antd";

const BaseSelect = ({ data = [], ...props }) => {
  return (
    <Select {...props}>
      {data.map((item, index) => (
        <Select.Option key={index} value={item.value}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default BaseSelect;
