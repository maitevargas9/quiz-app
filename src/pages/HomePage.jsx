import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { saveProfile } from "../utils/storage";

import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";

export default function HomePage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    saveProfile(name);
    navigate("/quiz");
  };

  return (
    <Layout>
      <Card>
        <h1 className="text-3xl mb-4">Willkommen beim Quiz 🎉</h1>
        <input
          type="text"
          placeholder="Dein Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <Button onClick={handleStart} className="w-full">
          Starten
        </Button>
      </Card>
    </Layout>
  );
}
