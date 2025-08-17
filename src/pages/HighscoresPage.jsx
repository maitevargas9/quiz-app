import { getHighscores } from "../utils/storage";

export default function HighscoresPage() {
  const highscores = getHighscores();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Highscores</h1>
      <ul>
        {highscores.map((hs, i) =>
          <li key={i}>
            {hs.name}: {hs.score}
          </li>
        )}
      </ul>
    </div>
  );
}
