import React, { useState } from "react";
import BaseInput from "./baseComponents/BaseInput";
import Search from "./baseComponents/Search";
import Checkbox from "./baseComponents/Checkbox";
import Modal from "./baseComponents/Modal";
import SingleDatePicker from "./baseComponents/SingleDatePicker";
import DoubleDatePicker from "./baseComponents/DoubleDatePicker";
import Textarea from "./baseComponents/Textarea";
import Select from "./baseComponents/Select";
import Rate from "./baseComponents/Rate";
import Radio from "./baseComponents/Radio";

const BaseComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="base-components-container" style={{ padding: "20px" }}>
      <h1>Base Components</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Input</h2>
        <BaseInput placeholder="Enter text here" />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Search</h2>
        <Search placeholder="Search here" onSearch={(value) => alert(`Search: ${value}`)} />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Checkbox</h2>
        <Checkbox
          data={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Modal</h2>
        <button onClick={handleModal}>Toggle Modal</button>
        <Modal
          title="Sample Modal"
          visible={isModalVisible}
          onOk={handleModal}
          onCancel={handleModal}
        >
          <p>This is a modal content!</p>
        </Modal>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Single Date Picker</h2>
        <SingleDatePicker onChange={(date) => console.log(date)} />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Double Date Picker</h2>
        <DoubleDatePicker onChange={(dates) => console.log(dates)} />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Textarea</h2>
        <Textarea placeholder="Enter detailed text here" />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Select</h2>
        <Select
          data={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
          ]}
          placeholder="Select an option"
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Rate</h2>
        <Rate onChange={(value) => console.log(`Rate: ${value}`)} />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Radio</h2>
        <Radio
          data={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
        />
      </div>
    </div>
  );
};

export default BaseComponent;
