import AccountManagement from "../../components/AccountManagement";
import Header from "../../components/Header";
import SidebarHR from "../../components/SidebarHR";

export default function EmployeeAccount() {
  return (
    <div className="flex">
      <SidebarHR />
      <div className="flex flex-col w-screen">
        <Header />
        <AccountManagement />
      </div>
    </div>
  );
}
