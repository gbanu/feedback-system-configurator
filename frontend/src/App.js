import React, { useContext } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.less";
import { Context } from "./context/Context";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DIR } from "./utils/constants";
import StartPage from "./pages/HomePage";
import ConfigurationPage from "./pages/ConfigurationPage";
import FeedbackPage from "./pages/FeedbackPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ViewFormPage from "./pages/ViewFormPage";
import Topbar from "./components/Topbar";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path={DIR.home} element={user ? <StartPage /> : <LoginPage />} />
        <Route
          path={DIR.manage + "/:id"}
          element={user ? <ViewFormPage /> : <LoginPage />}
        />
        <Route
          path={DIR.configurator}
          element={user ? <ConfigurationPage /> : <LoginPage />}
        />
        <Route path={DIR.login} element={user ? <HomePage /> : <LoginPage />} />
        <Route
          path={DIR.register}
          element={user ? <HomePage /> : <RegisterPage />}
        />
        <Route path={DIR.feedback + "/:id"} element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
}

export default App;
