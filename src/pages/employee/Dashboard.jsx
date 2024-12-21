import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Details from "../../components/Details";
import Task from "../../components/Task";

export default function Dashboard() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        <Search />
        <div className="flex gap-x-10 px-6">
          <Details text={"Pending"} />
          <Details text={"Urgent"} />
          <Task />
        </div>
      </div>
    </div>
  );
}
