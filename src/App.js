import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import { useEffect } from "react";

function App() {
  const navigate = useLocation();
  const location = useNavigate()
  ;
  const getUserId = localStorage.getItem("userId");
  useEffect(() => {
    if (getUserId && navigate.pathname?.includes("login")) {
      location("/");
    }
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={getUserId ? <Home /> :<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
