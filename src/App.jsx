import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/employee/Dashboard";
import Profile from "./pages/employee/Profile";
import Holidays from "./pages/employee/Holidays";
import NotificationPage from "./pages/employee/Notification";
import Absences from "./pages/employee/Absentees";
import TasksPage from "./pages/employee/TaskPage";
import CheckIn from "./pages/Admin/CheckInTracking";
import ResetPasswordPage from "./components/ResetPassword";
import LoginPage from "./components/LoginForm";
import ProfileAdmin from "./pages/Admin/Profile";
import AddEmployee from "./pages/Admin/AddNewEmpolyee";
import FaceRecognition from "./pages/Admin/FacialRecognition";
import EmployeeAccount from "./pages/HR/EmployeeAccount";
import ProfileHR from "./pages/HR/ProfileHR";
import Entry_Exit from "./pages/HR/Entry_Exit";
import TasksAssigned from "./pages/HR/TasksAssigned";
import RequestHoliday from "./pages/HR/RequestHoliday";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<Profile />}/>
      <Route path="/holidays" element={<Holidays />}/>
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/absentees" element={<Absences />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/check-in" element={<CheckIn />} />
      <Route path="/admin-profile" element={<ProfileAdmin />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/face-id" element={<FaceRecognition />} />
        <Route path="/profileHR" element={<ProfileHR />} />
      <Route path="/entry" element={<Entry_Exit />} />
      <Route path="/assigned" element={<TasksAssigned />} />
      <Route path="/holiday" element={<RequestHoliday />} />
      <Route path="/account" element={<EmployeeAccount />} />

    </Routes>
  );
}

export default App;
