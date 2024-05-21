import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangePassword from "../components/changePassword";
import RequestPassword from "../components/RequestPassword";
import AccountInformation from "../containers/accountInformation";
import AddLeads from "../containers/addLeads";
import AdminManagement from "../containers/adminManagement";
import CompletedLeads from "../containers/completedLeads";
import Dashboard from "../containers/dashboard";
import UserManagement from "../containers/userManagement";
import Login from "../pages/auth/login";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/change-password" element={<ChangePassword/>} />
      <Route path="/request-password" element={<RequestPassword/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/user-management" element={<UserManagement/>} />
      <Route path="/add-leads" element={<AddLeads/>} />
      <Route path="/completed-leads" element={<CompletedLeads/>} />
      <Route path="/admin-management" element={<AdminManagement/>} />
      <Route path="/account-info" element={<AccountInformation/>} />
    </Routes>
  );
};

export default Navigation;
