import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import ReportCalculation from "./body/reportCalculation";
import MonthlyWorkDurationSummary from "./body/monthlyWorkDurationSummary";
import BasicTimeAttendance from "./body/basicTimeAttendance";
import AbsentTimeAttendance from "./body/absentTimeAttendance";
import EmployeeMaster from "./body/employeeMaster";
import DetailedTimeAttendance from "./body/detailedTimeAttendance";
import PresentTimeAttendance from "./body/presentTimeAttendance";
import MonthlyBasicTimeAttendance from "./body/monthlyBasicTimeAttendance";
import MissedOutPunchReport from "./body/missedOutPunchReport";
import LeaveDetails from "./body/leaveDetails";
import LeaveSummary from "./body/leaveSummary";
import LogDetails from "./body/logDetails";
import MonthlyWorkDurationDetails from "./body/monthlyWorkDurationDetails";

export default function ReportData(props) {
  console.log(props);
  const { onClose, activeModal } = props;
  const [show, setShow] = useState(props.showModal);
  useEffect(() => {
    setShow(props.showModal);
  }, [props.showModal]);

  const handleClose = () => onClose(false);

  const handleSubmit = () => {
    /** Handle any other operations here like API call etc */
    onClose(false);
  };

  const renderModalBody = () => {
    switch (activeModal.value) {
      case "reportCalculation":
        return <ReportCalculation {...props} />;
      case "monthlyWorkDurationSummary":
        return <MonthlyWorkDurationSummary {...props} />;
      case "basicTimeAttendance":
        return <BasicTimeAttendance {...props} />;
      case "absentTimeAttendance":
        return <AbsentTimeAttendance {...props} />;
      case "employeeMaster":
        return <EmployeeMaster {...props} />;
      case "detailedTimeAttendance":
        return <DetailedTimeAttendance {...props} />;
      case "monthlyBasicTimeAttendance":
        return <MonthlyBasicTimeAttendance {...props} />;
      case "presentTimeAttendance":
        return <PresentTimeAttendance {...props} />;
      case "missedOutPunchReport":
        return <MissedOutPunchReport {...props} />;
      case "leaveDetails":
        return <LeaveDetails {...props} />;
      case "leaveSummary":
        return <LeaveSummary {...props} />;
      case "logDetails":
        return <LogDetails {...props} />;
      case "monthlyWorkDurationDetails":
        return <MonthlyWorkDurationDetails {...props} />;
      default:
        return "Hello World";
    }
  };

  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        onHide={handleClose}
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{activeModal.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderModalBody()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" size="sm" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
