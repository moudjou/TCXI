import EmployeeTable from "../../components/EmployeeTable";
import Header from "../../components/Header";
import SidebarHR from "../../components/SidebarHR";

export default function Entry_Exit() {
  return (
    <div className="flex">
      <SidebarHR />
      <div className="flex flex-col w-screen">
        <Header />
        <EmployeeTable />
      </div>
    </div>
  );
}
