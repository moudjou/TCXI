import Sidebar from "../../components/SidebarAdmin";
import Header from "../../components/Header";
import CheckList from "../../components/CheckInSection";
import Search from "../../components/Search";

export default function CheckIn() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col w-screen">
              <Header />
              <Search />
        <CheckList />
      </div>
    </div>
  );
}