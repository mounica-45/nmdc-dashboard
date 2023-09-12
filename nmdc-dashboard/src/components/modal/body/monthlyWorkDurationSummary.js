import React from "react";
import { noop } from "../../../utils";
import { InputWithLabel } from "../../input";

export default function monthlyWorkDurationSummary(props) {
  const {
    year = "",
    month = "",
    company = "",
    department = "",
    employee = "",
    branch = "",

    // handleDateChange = noop,
    handleInputChange = noop,
  } = props;
  return (
    <>
      <InputWithLabel
        type="text"
        name="year"
        value={year}
        label="Year"
        placeholder="Year"
        onInputChange={handleInputChange}
      />
      <br />
      <br />
      <InputWithLabel
        type="text"
        name="month"
        value={month}
        label="Month"
        placeholder="Month"
        onInputChange={handleInputChange}
      />
      <br />
      <br />
      <InputWithLabel
        type="text"
        name="company"
        value={company}
        label="Company"
        placeholder="Company"
        onInputChange={handleInputChange}
      />
      <br />
      <br />
      <InputWithLabel
        type="text"
        name="employee"
        value={employee}
        label="Employee"
        placeholder="Employee"
        onInputChange={handleInputChange}
      />
      <br />
      <br />
      <InputWithLabel
        type="text"
        name="department"
        value={department}
        label="Department"
        placeholder="Department"
        onInputChange={handleInputChange}
      />
      <br />

      <InputWithLabel
        type="text"
        name="branch"
        value={branch}
        label="Branch"
        placeholder="Branch"
        onInputChange={handleInputChange}
      />
    </>
  );
}
