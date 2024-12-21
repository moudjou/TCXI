
import { useState } from "react";
import Settings from "./Settings";
import PasswordChange from "./PasswordChange";

export default function Navbar() {
  const [selectedTab, setSelectedTab] = useState("Account Settings"); 

  const tabs = ["Account Settings", "Security", "Notifications"];

  return (
    <>
      <nav className="flex justify-between p-6 ">
        <div className="flex gap-x-4 text-[#A1A3AB]">
          {tabs.map((tab) => (
            <span
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`cursor-pointer ${
                selectedTab === tab
                  ? "text-[#534FEB] border-b-2 border-[#534FEB]"
                  : ""
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
        <span>
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </nav>
      <div>{selectedTab === "Account Settings" && <Settings />}</div>
      <div>{selectedTab === "Security" && <PasswordChange />}</div>
    </>
  );
}

