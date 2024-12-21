import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Dashboard from "./pages/employee/Dashboard";
import Profile from "./pages/employee/Profile";
import Holidays from "./pages/employee/Holidays";
import NotificationPage from "./pages/employee/Notification";
import Absences from "./pages/employee/Absentees";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/holidays" element={<Holidays />}/>
      <Route path="/notification" element={<NotificationPage />} />
      <Route path="/absentees" element={<Absences />}/>
    </Routes>
  );
}

export default App;
