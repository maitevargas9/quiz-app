import { getHighscores } from "../utils/storage";

import Layout from "../components/Layout";
import Card from "../components/Card";

export default function HighscoresPage() {
  const highscores = getHighscores();

  return (
    <Layout>
      <Card>
        <h1 className="text-2xl mb-4">🏆 Highscores</h1>
        <ul className="space-y-2">
          {highscores.length > 0
            ? highscores.map((hs, i) =>
                <li key={i}>
                  {i + 1}. {hs.name}: <strong>{hs.score}</strong>
                </li>
              )
            : <p>Noch keine Highscores vorhanden.</p>}
        </ul>
      </Card>
    </Layout>
  );
}
