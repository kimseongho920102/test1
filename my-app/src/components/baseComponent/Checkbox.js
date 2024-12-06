import React from "react";
import { Checkbox } from "antd";

const BaseCheckbox = ({ data = [], ...props }) => {
  return (
    <Checkbox.Group {...props}>
      {data.map((item, index) => (
        <Checkbox key={index} value={item.value}>
          {item.label}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
};

export default BaseCheckbox;
