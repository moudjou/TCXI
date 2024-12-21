import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import NotificationCard from "../../components/NotificationSection";
import Search from "../../components/Search";

export default function NotificationPage() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col w-screen">
              <Header />
              <Search />
        <NotificationCard />
      </div>
    </div>
  );
}