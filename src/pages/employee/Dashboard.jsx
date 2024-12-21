import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Search from "../../components/Search";

export default function Dashboard() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        <Search />
      </div>
    </div>
  );
}
