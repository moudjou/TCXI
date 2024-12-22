import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/employee/Dashboard";
import Profile from "./pages/employee/Profile";
import Holidays from "./pages/employee/Holidays";
import NotificationPage from "./pages/employee/Notification";
import Absences from "./pages/employee/Absentees";
import TaskPage from "./pages/employee/TaskPage";
import EmployeeAccount from "./pages/HR/EmployeeAccount";
import ProfileHR from "./pages/HR/ProfileHR";
import Entry_Exit from "./pages/HR/Entry_Exit";
import TasksAssigned from "./pages/HR/TasksAssigned";
import RequestHoliday from "./pages/HR/RequestHoliday";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/holidays" element={<Holidays />} />
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/absentees" element={<Absences />} />
      <Route path="/tasks" element={<TaskPage />} />
      <Route path="/account" element={<EmployeeAccount />} />
      <Route path="/profileHR" element={<ProfileHR />} />
      <Route path="/entry" element={<Entry_Exit />} />
      <Route path="/assigned" element={<TasksAssigned />} />
      <Route path="/holiday" element={<RequestHoliday />} />
    </Routes>
  );
}

export default App;
