import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoList } from "../../redux/actions/todo";
import Common from "../modal/Common";
import {  BsArrowBarRight, BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const todos = useSelector((state) => state?.todoSlice?.todoList);
  const [show, setShow] = useState(false);
  const [modal1, setModal1] = useState(false);

  const userId = localStorage.getItem("userId");
  const date = new Date().toLocaleDateString();
  const [data, setData] = useState();

  useEffect(() => {
    if (userId) {
      dispatch(TodoList({ userId: userId }));
    }
   
    
  }, [dispatch]);

  const filterData = (value) => {
    setData(value);
    let payload;

    if (value === "completed") {
      payload = {
        userId: userId,
        completed: true,
      };
    } else if (value === "incompleted") {
      payload = {
        userId: userId,
        completed: false,
      };
    } else {
      // Default case or handle other sorting criteria
      payload = {
        userId: userId,
      };
    }

    dispatch(TodoList(payload));
  };

  const logOut=()=>{
    localStorage.removeItem("userId");
    navigate("/login")
  }

  return (
    <>
      <div className="container">

          <div className="parent">
            <h1 className="Cardtitle">Todo</h1>
            <div className="parent-chaild2">
              <h3> Hey! there it's time for a quick 5-secound break</h3>
              {userId &&(

              <h3 onClick={()=>logOut()}>
                logout
                <BsArrowBarRight />
              </h3>
              )}
            </div>
          </div>

          <div className="parent-chaild row">
            <div className="col-md-5">
              <div className="row align-items-center">
                <div className="col-md-5">
                  {" "}
                  {data} tasks <b>{todos?.length}</b>
                </div>
                <div className="col-md-3">
                  <select
                    className="w-100"
                    onChange={(e) => filterData(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">In Completed</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <div
                    className="StartTimerBtn w-100"
                    onClick={() => setShow(true)}
                  >
                    <button className="w-100">Start Timer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {todos?.map((item, index) => {
          return (
            <div className="TodoSection">
              <div className="row">
                <div className="col-md-12">
                  <h2>Today</h2>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="row align-items-center CardRowNowrap">
                    <div className="col-md-5 col-5">
                      <div className="TodoSectionInnercol">
                        <div className="TaskAndRadio">
                          {/* {item?.completed === true ? ( */}
                            {/* <input type="radio" checked /> */}
                           {/* ) :item?.completed === false && ( */}
                            <input type="radio" />
                          {/* )}  */}

                          <label for="">{item?.title}</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-3">
                      <div className="TodoSectionInnercol">
                        <span className="taskDate">{date}</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-4">
                      <div
                        className="TodoSectionInnercol"
                       
                      >{item?.completed === false ?  <button  onClick={() => setShow(true)}> Get Started</button> :  <button  onClick={() => setModal1(true)}>completed</button>}
                       
                      </div>
                    </div>
                  </div>
                  {/* <div className="row align-items-center CardRowNowrap">
                    <div className="col-md-5 col-5">
                      <div className="TodoSectionInnercol">
                        <div className="TaskAndRadio">
                          <input type="radio" />
                          <label for="">Complete Reporting Task</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-3">
                      <div className="TodoSectionInnercol">
                        <span className="taskDate">jan 15, 2023</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-4">
                      <div className="TodoSectionInnercol">
                        <button>Get Started</button>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Common show={show} onHide={() => setShow(false)} />
      <Modal
        size="sm"
        show={modal1}
        centered
        onHide={() => setModal1(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        
        <Modal.Header closeButton /> 
        <Modal.Body> This task has completed</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setModal1(false)}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    
      

    </>
  );
}

export default Home;
