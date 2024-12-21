import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Search from "../../components/Search";
import MyAbsentees from "../../components/AbsenteesSection";

export default function Absences() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        <Search />
        <MyAbsentees />
              
      </div>
    </div>
  );
}
