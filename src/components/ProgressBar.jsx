export default function ProgressBar({ value, max }) {
  const percentage = Math.round(value / max * 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-4">
      <div
        className="bg-green-500 h-4 transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
