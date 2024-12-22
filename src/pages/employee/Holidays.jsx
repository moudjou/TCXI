import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import VacationForm from "../../components/HolidayForm";
export default function Holidays() {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="flex flex-col w-screen max-md:ml-60">
        <Header />
        <VacationForm className="w-full min-h-screen" />
      </div>
    </div>
  );
}
