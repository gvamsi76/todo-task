import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../redux/actions/users";
import Select from "react-select";
import { TodoList } from "../../redux/actions/todo";
import { constructOption } from "../../utilits/common";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedUser, setSelectedUser] = useState("");
  const [error, setError] = useState(null);
  const users = useSelector((state) => state?.userSlice?.allusersList);
  const todos = useSelector((state) => state?.todoSlice?.todoList);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedUser) {
      setError("Please select a user."); // Set error message if no user is selected
    } else {
      setError(null); // Clear error message if user is selected
      localStorage.setItem("userId", selectedUser);

      navigate("/");

      dispatch(TodoList({ userId: selectedUser }));
    }
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleSelectChange = (e) => {
    console.log(e, "eeeeeeeeeeeeeeeeee");
    setSelectedUser(e); // Update selectedUser state with the selected value
  };
  const selectMasterOptions = (value) => {
    return users.map(({ id, name }) => constructOption(id, name));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div class="container-fluid">
            <div class="selectuserLoginCardSec">
              <div class="row justify-content-center align-items-center">
                <div class="col-md-5">
                  <div class="selectuserLoginCard">
                    <h1>Login</h1>
                    <form action="">
                      <label for="">select user to login</label>
                      {/* <select
                        name=""
                        id=""
                        value={selectedUser}
                        onChange={handleSelectChange}
                      >
                        {users?.map((item) => {
                          return (
                            <option key={item.id} value={item.id}>
                              {item?.name}
                            </option>
                          );
                        })}
                      </select> */}
                      <Select
                        placeholder="Select user"
                        options={selectMasterOptions()}
                        onChange={(selectedOption) =>
                          handleSelectChange(selectedOption?.value)
                        }
                      />
                      {error && <div className="text-danger">{error}</div>}
                    </form>
                    <button>Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
