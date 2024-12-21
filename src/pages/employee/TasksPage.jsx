import Details from "../../components/Details";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar";

export default function TasksPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        <Search />
        <div className="flex justify-between px-6">
          <Details text={"Completed"} color={"#B6DAB5"} />
          <Details text={"In Progress"} color={"#FFE1CC"} />
          <Details text={"Pending"} color={"#EC6B5E"} />
        </div>
      </div>
    </div>
  );
}
