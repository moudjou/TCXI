import Sidebar from "../../components/SidebarAdmin";
import Header from "../../components/Header";
import NewProfile from "../../components/AddEmployee";
export default function AddEmployee() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col w-screen">
              <Header />
              
        <NewProfile />
      </div>
    </div>
  );
}