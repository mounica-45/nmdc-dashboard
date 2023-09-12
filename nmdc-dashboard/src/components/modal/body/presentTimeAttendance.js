import React from "react";
import { noop } from "../../../utils";
import { InputWithLabel, DatePickerWithLabel } from "../../input";

export default function presentTimeAttendance(props) {
  const {
    toDate,
    fromDate,
    department = "",
    employee = "",
    branch = "",
    companyName = "",
    handleDateChange = noop,
    handleInputChange = noop,
  } = props;
  return (
    <>
      <DatePickerWithLabel
        label="From"
        placeholder="Select Date"
        selected={fromDate} /** Write your own function if required */
        // minDate={getMinimumDate()} /** Write your own function if required */
        classNames={""} /** Provide custom class names for scss decoration */
        onInputChange={(date) => handleDateChange(date, "fromDate")}
      />
      <DatePickerWithLabel
        label="To"
        classNames={""}
        selected={toDate}
        minDate={fromDate}
        placeholder="Select Date"
        onInputChange={(date) => handleDateChange(date, "toDate")}
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
        name="branch"
        value={branch}
        label="Branch"
        placeholder="Branch"
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
      <br />
      <InputWithLabel
        type="text"
        name="companyName"
        value={companyName}
        label="Company Name"
        placeholder="Company Name"
        onInputChange={handleInputChange}
      />
    </>
  );
}
