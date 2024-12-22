import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Dashboard from "./pages/employee/Dashboard";
import Profile from "./pages/employee/Profile";
import Holidays from "./pages/employee/Holidays";
import NotificationPage from "./pages/employee/Notification";
import Absences from "./pages/employee/Absentees";
import TasksPage from "./pages/employee/TaskPage";
import CheckIn from "./pages/Admin/CheckInTracking";
import ResetPasswordPage from "./components/ResetPassword";
import LoginPage from "./components/LoginForm";
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
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      
    </Routes>
  );
}

export default App;
