import { CiSearch } from "react-icons/ci";
import Table from "./Table";
export default function AccountManagement() {
  return (
    <div>
      <h1 className="font-bold px-6">Account Management</h1>
      <div className="flex flex-col justify-between p-6 gap-y-2">
        <div className="flex items-center border-2 rounded-md px-2">
          <CiSearch size={30} />
          <input
            type="text"
            className="p-2 border-none outline-none w-fit"
            placeholder="Search here"
          />
        </div>
        <Table />
      </div>
    </div>
  );
}
