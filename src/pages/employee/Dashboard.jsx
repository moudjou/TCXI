import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Details from "../../components/Details";
import Task from "../../components/Task";

export default function Dashboard() {
  return (
    <div className="flex max-md:flex-row ">
      <Sidebar />
      <div className="flex flex-col w-screen max-md:ml-60">
        <Header />
        <Search />
        <div className="flex gap-x-10 px-6 max-md:flex-col">
          <Details text={"Pending"} />
          <Details text={"Urgent"} />
          <Task />
        </div>
      </div>
    </div>
  );
}
