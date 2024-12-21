import "./App.css";
import {Routes,Route} from 'react-router-dom'
import Dashboard from "./pages/employee/Dashboard";
import Profile from "./pages/employee/Profile";
import Holidays from "./pages/employee/Holidays";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/holidays" element={<Holidays />}/>
    </Routes>
  );
}

export default App;
