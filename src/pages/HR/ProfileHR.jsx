import SidebarHR from "../../components/SidebarHR";
import Header from "../../components/Header";
import EditProfile from "../../components/EditProfile";
export default function ProfileHR() {
  return (
    <div className="flex">
      <SidebarHR />
      <div className="flex flex-col w-screen">
        <Header />
        <EditProfile />
      </div>
    </div>
  );
}
