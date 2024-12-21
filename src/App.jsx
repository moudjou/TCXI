import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Dashboard from "./pages/employee/Dashboard";
import Profile from "./pages/employee/Profile";
import Holidays from "./pages/employee/Holidays";
import TasksPage from './pages/employee/TasksPage'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/holidays" element={<Holidays />}/>
      <Route path="/tasks" element={<TasksPage />}/>
    </Routes>
  );
}

export default App;
