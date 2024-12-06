import React from "react";
import { Radio } from "antd";

const BaseRadio = ({ data = [], ...props }) => {
  return (
    <Radio.Group {...props}>
      {data.map((item, index) => (
        <Radio key={index} value={item.value}>
          {item.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default BaseRadio;
