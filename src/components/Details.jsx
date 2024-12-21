import Card from "./Card";
import { useLocation } from "react-router-dom";
const data = [
  {
    title: "Submit Monthly Reports",
    details:
      "Monthly reports track performance and ensure transparency for strategic decisions.",
  },
  {
    title: "Cash Flow Management",
    details:
      "Review and analyze cash flow statements to ensure there are sufficient funds to meet operational expenses.",
  },
  {
    title: "Budget Allocation",
    details:
      "Allocate budget resources efficiently to support business goals and operations.",
  },
];

export default function Details({ text, color }) {
  const location = useLocation();
  const isMoreThanTwo = data.length > 2;
  const visibleCards = isMoreThanTwo ? data.slice(0, 2) : data;

  return (
    <div className="flex flex-col">
      <h2
        className={`flex justify-between font-bold py-4 border-b-2 w-64`}
        style={{ borderColor: color }}
      >
        <p>{text}</p>
        <p>{data.length}</p>
      </h2>
      <div className="flex flex-col gap-y-4 mt-4">
        {visibleCards.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            details={item.details}
            color={color}
          />
        ))}
      </div>
      {isMoreThanTwo && location.pathname !== "/tasks" && (
        <button className="text-sm text-[#787486] mt-4 self-end">
          Show more {">"}
        </button>
      )}
    </div>
  );
}