import Header from "../../components/Header";
import SidebarHR from "../../components/SidebarHR";
import TaskAssignmentTable from "../../components/TaskAssignmentTable";

export default function TasksAssigned() {
  return (
    <div className="flex">
        <SidebarHR />
        <div className="flex flex-col w-screen">
            <Header />
            <TaskAssignmentTable />
        </div>
    </div>
  )
}
