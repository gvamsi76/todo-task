import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Common(props) {
  const [timer, setTimer] = useState(15);
  const [sessionCount, setSessionCount] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    let intervalId;

    // Function to handle the timer
    const handleTimer = () => {
      setTimer((prevTimer) => prevTimer - 1);
    };

    // Start the timer when isTimerRunning is true
    if (isTimerRunning) {
      intervalId = setInterval(() => {
        handleTimer();
      }, 1000);
    }

    // End the timer when it reaches 0
    if (timer === 0) {
      clearInterval(intervalId);
      if (isBreak) {
        // If it's a break, increment the break time
        setBreakTime((prevBreakTime) => prevBreakTime + 5);
        // If it's a break, reset the timer and set the next session or longer break
        if ((sessionCount + 1) % 3 === 0) {
          // After every 2 work sessions (including the current one), suggest a longer break (10 seconds)
          setTimer(10);
          setSessionCount(0); // Reset session count after a longer break
        } else {
          // After a regular break (5 seconds), start the next work session
          setTimer(15);
          setSessionCount((prevCount) => prevCount + 1);
        }
        setIsBreak(false);
      } else {
        // If it's a work session, start the break (5 seconds)
        setTimer(5);
        setIsBreak(true);
        const updatedSessionCount = sessionCount + 1;
        setSessionCount(updatedSessionCount);
        localStorage.setItem("workSessionsCompleted", updatedSessionCount);
      }
    }

    // Clear the interval when the component unmounts or when isTimerRunning becomes false
    return () => clearInterval(intervalId);
  }, [timer, sessionCount, isBreak, isTimerRunning]);

  const startTimer = () => {
    setIsTimerRunning(true);
    //   setModalVisible(true);
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimer(15);
    setSessionCount(0);
    setIsBreak(false);
    //   setModalVisible(false);
    setBreakTime(0);
  };
  return (
    <>
      <Modal show={props.show} onHide={props.onHide} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Count Down : {timer}</Modal.Title>
        </Modal.Header>
        
        <div className="row align-items-center CardRowNowrap">
          <div className="col-md-7 col-5">
            <div className="TodoSectionInnercol">
              <div className="TaskAndRadio">
                <h3>Time Remaining: seconds</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-3">
            <div className="TodoSectionInnercol">
              <h4>{timer}</h4>
            </div>
          </div>
          <div className="col-md-7 col-5">
            <div className="TodoSectionInnercol">
              <div className="TaskAndRadio">
                <h4>Total Work Sessions Completed: </h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-3">
            <div className="TodoSectionInnercol">
              <h4>{sessionCount}</h4>
            </div>
          </div>
          <div className="col-md-7 col-5">
            <div className="TodoSectionInnercol">
              <div className="TaskAndRadio">
                <h4>Total Break Time: seconds</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-3">
            <div className="TodoSectionInnercol">
              <h4>{breakTime}</h4>
            </div>
          </div>
          <div className="row align-items-center CardRowNowrap">
            <div className="col-md-4 col-5">
              <div className="TodoSectionInnercol">
              <Button variant="primary" onClick={startTimer}>
                Start Timer
              </Button>
              </div>
            </div>
            <div className="col-md-4 col-3">
              <div className="TodoSectionInnercol">
              <Button variant="primary" onClick={pauseTimer}>
                Pause Timer
              </Button>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="TodoSectionInnercol">
              <Button variant="primary" onClick={resetTimer}>
                Reset Timer
              </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Common;
