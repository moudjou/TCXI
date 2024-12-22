import Sidebar from "../../components/SidebarAdmin";
import Header from "../../components/Header";
import EditProfile from "../../components/AdminEditProfile";
export default function ProfileAdmin() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        <EditProfile />
      </div>
    </div>
  );
}
