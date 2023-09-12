import "./index.scss";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { toCamelCase } from "../../utils";
import ReportsModal from "../modal";

const initialState = { showModal: false, activeModal: {} };

const RowComponent = (props) => {
  const { label, onClick } = props;

  function handleClick() {
    onClick({ label, value: toCamelCase(label) });
  }
  return (
    <td
      className="tableData"
      onClick={handleClick}
      data-value={toCamelCase(label)}
    >
      {label}
    </td>
  );
};

export default function ReportData() {
  const [state, setState] = useState(initialState);

  const handleTableRowClick = (modal) => {
    setState({ ...state, showModal: true, activeModal: modal });
  };

  const handleDateChange = (date, type) => {
    setState({ ...state, [type]: date });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <div className="tableContents">
        <Table bordered>
          <tbody className="tableBody">
            <tr className="tableRow" rowSpan="3">
              <RowComponent
                label="Report Calculation"
                onClick={handleTableRowClick}
              />

              <tr className="tableRow">
                {/* <RowComponent
                rowSpan="3"
                label="Report Calculation"
                onClick={handleTableRowClick}
              /> */}
                <RowComponent
                  label="Basic Time Attendance"
                  onClick={handleTableRowClick}
                />
                <RowComponent
                  label="Absent Time Attendance"
                  onClick={handleTableRowClick}
                />
                <RowComponent
                  label="Monthly Work Duration Summary"
                  onClick={handleTableRowClick}
                />
                <RowComponent
                  label="Employee Master"
                  onClick={handleTableRowClick}
                />
              </tr>

              <tr className="tableRow">
                <RowComponent
                  label="Detailed Time Attendance"
                  onClick={handleTableRowClick}
                />
                <RowComponent
                  label="Monthly Basic Time Attendance"
                  onClick={handleTableRowClick}
                />
                <RowComponent
                  label="Missed Out Punch Report"
                  onClick={handleTableRowClick}
                />
                <RowComponent
                  label="Leave Details"
                  onClick={handleTableRowClick}
                />
              </tr>

              <tr className="tableRow">
                <RowComponent
                  label="Present Time Attendance"
                  onClick={handleTableRowClick}
                />
                <RowComponent
                  label="Monthly Work Duration Details"
                  onClick={handleTableRowClick}
                />
                <RowComponent
                  label="Log Details"
                  onClick={handleTableRowClick}
                />
                <RowComponent
                  label="Leave Summary"
                  onClick={handleTableRowClick}
                />
              </tr>
            </tr>
          </tbody>
        </Table>
      </div>

      <ReportsModal
        {...state}
        handleDateChange={handleDateChange}
        handleInputChange={handleInputChange}
        onClose={() =>
          setState({ ...state, showModal: false, activeModal: {} })
        }
      />
    </>
  );
}
