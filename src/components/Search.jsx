import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex items-center border-2 rounded-md px-2">
        <CiSearch size={30} />
        <input type="text" className="p-2 border-none outline-none w-80" placeholder="Search here" />
      </div>
      <span>
        {new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </span>
    </div>
  );
}
