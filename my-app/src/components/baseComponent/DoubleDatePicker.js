import React from "react";
import { DatePicker } from "antd";

const BaseDoubleDatePicker = ({ ...props }) => {
  return <DatePicker.RangePicker {...props} />;
};

export default BaseDoubleDatePicker;
