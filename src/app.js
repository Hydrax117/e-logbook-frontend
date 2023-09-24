import React from "react";
import { useCookies } from "react-cookie";
import { Home } from "./components/pages/home/home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Abt } from "./components/pages/about";
import { NavBar } from "./components/nav/nav";
import { Login } from "./components/pages/auth/login";
import { Register } from "./components/pages/auth/register";
import { StudentDetails } from "./components/pages/industrial-based-supervisor/studentDetails";
import { AddReport } from "./components/pages/student/addReport";
import { IndustryBasedSupervisorDashboard } from "./components/pages/industrial-based-supervisor/Dashboard";
import { ReportDetails } from "./components/pages/industrial-based-supervisor/reportDetail";
import { AddInstitution } from "./components/pages/siwess-supervisor/addSiwessInstitution";
export const App = () => {
  const [cookies, setCookies] = useCookies(["user"]);

  return (
    <>
      <Router>
        <NavBar cookie={cookies} />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/institutions/add" Component={AddInstitution} />

          <Route path="/about" Component={Abt}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/login" Component={Login} element={<Login />} />
          <Route path="/student/add-report" Component={AddReport} />
          <Route path="/student/reports/:student" Component={StudentDetails} />
          <Route path="/report-details/:_id" Component={ReportDetails} />

          <Route
            path="/industrial/dashboard"
            Component={IndustryBasedSupervisorDashboard}
          />

          <Route path="/redirect" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
};
