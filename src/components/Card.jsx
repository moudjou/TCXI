export default function Card({ title, details,color }) {
  return (
    <div className="flex flex-col border border-[#787486] w-64 h-40 px-4 py-3 rounded-lg shadow-sm">
      <h3 className="font-semibold text-lg text-center">{title}</h3>
      <p className="mt-2 text-center text-sm text-[#787486]">{details}</p>
      <div className="flex justify-center mt-auto">
        <div className={`w-4 h-4 rounded-full`} style={{backgroundColor : color}}></div>
      </div>
    </div>
  );
}

