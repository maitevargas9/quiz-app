import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { saveProfile } from "../utils/storage";

export default function HomePage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    saveProfile(name);
    navigate("/quiz");
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Willkommen beim Quiz</h1>
      <input
        type="text"
        placeholder="Dein Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleStart}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Starten
      </button>
    </div>
  );
}
