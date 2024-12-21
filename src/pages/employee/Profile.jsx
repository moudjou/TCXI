import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import EditProfile from "../../components/EditProfile";
export default function Profile() {
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
