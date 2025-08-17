export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-6 mb-4 ${className}`}>
      {children}
    </div>
  );
}
