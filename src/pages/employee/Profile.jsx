import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Search from "../../components/Search";
import EditProfile from "../../components/EditProfile";
// import Settings from "../../components/Settings";
export default function Profile() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        <Search />
        <EditProfile />
      </div>
    </div>
  );
}
