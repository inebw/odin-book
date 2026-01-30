export default function Errors({ error }) {
  return (
    <div className="bg-redt shadow-lg px-3 py-2 space-y-1 rounded-md">
      {error.map((item) => (
        <div>
          <p className="text-sm tracking-wider">{item.msg}</p>
        </div>
      ))}
    </div>
  );
}
