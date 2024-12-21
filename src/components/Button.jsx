export default function Button({ text ,bgcolor,color}) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: color }}
      className="rounded px-10 border-[#534FEB] border-2"
    >
      {text}
    </button>
  );
}
