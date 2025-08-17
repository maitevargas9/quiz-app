import { useState, useEffect } from "react";
import { getHighscores } from "../utils/storage";

export default function useHighscores() {
  const [highscores, setHighscores] = useState(getHighscores());

  useEffect(() => {
    const update = () => {
      setHighscores(getHighscores());
    };

    update();

    window.addEventListener("storage", update);

    return () => {
      window.removeEventListener("storage", update);
    };
  }, []);

  return highscores;
}
