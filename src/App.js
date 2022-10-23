import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./components/ToDoList";
import "./components/myStyle.css";
import Form_Class from "./components/Form_class";
import Form_Functional from "./components/Form_functional";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import { Route, Router, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import Main from "./components/Main";
import PrivateRoute from "./components/PrivateRoute";
import About from "./components/About";
function App() {
  const [log, setLog] = useState(false);
  useEffect(() => {
    const login = { login: false };
    localStorage.setItem("currentLog", JSON.stringify(login));
    // setLog(JSON.parse(localStorage.getItem("currentLog")).login);
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />}></Route>

        <Route element={<PrivateRoute isLogged={true} />}>
          <Route path="/todo" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
