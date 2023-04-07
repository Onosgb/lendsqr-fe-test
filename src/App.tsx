import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./app/pages/Dashboard";
import DashboardNav from "./app/pages/DashboardNav";
import Guarantors from "./app/pages/Guarantors";
import Login from "./app/pages/Login";
import User from "./app/pages/User";
import Users from "./app/pages/Users";
import NoMatch from "./app/pages/NoMatch";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="v1" element={<DashboardNav />}>
            <Route path="" element={<Dashboard />} />
            <Route path="guarantors" element={<Guarantors />} />
            <Route path="users" element={<Users />} />
            <Route path=":id" element={<User />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
