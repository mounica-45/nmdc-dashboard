import React from "react";
import { noop } from "../../../utils";
import { InputWithLabel, DatePickerWithLabel } from "../../input";

export default function reportCalculation(props) {
  const {
    toDate,
    fromDate,
    branch = "",
    status = "",
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
        name="nostatus"
        value={status}
        label="Status"
        placeholder="No Status"
        onInputChange={handleInputChange}
      />
    </>
  );
}
