import Header from "../../components/Header"
import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar"
export default function Holidays() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
      </div>
    </div>
  );
}
