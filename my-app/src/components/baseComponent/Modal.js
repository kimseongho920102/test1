import React from "react";
import { Modal } from "antd";

const BaseModal = ({ ...props }) => {
  return <Modal {...props}>{props.children}</Modal>;
};

export default BaseModal;
