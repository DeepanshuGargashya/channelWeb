import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Dashboard from "./screens/dashboard/dashboard";
import AuthComponent from "./component/AuthComponent";
import LoginComponent from "./component/loginComponent";
import Recharge from "./screens/recharge/recharge";
import "bootstrap-icons/font/bootstrap-icons.css";
import MakePayment from "./screens/makePayment/makePayment";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // setCredentials({...credentials, [e.target.name]: e.target.value})

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <Router>
      <Routes>
        <Route element={<LoginComponent />}>
          <Route index exact path="/login" element={<Login />} />
        </Route>

        <Route element={<AuthComponent alert={alert} />}>
          <Route exact path="/" element={<Dashboard showAlert={showAlert} />} />
          <Route
            exact
            path="/recharge"
            element={<Recharge showAlert={showAlert} />}
          />
          <Route
            exact
            path="/makePayment"
            element={<MakePayment showAlert={showAlert} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
