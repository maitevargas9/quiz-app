const PROFILE_KEY = "quiz_profile";
const HIGHSCORES_KEY = "quiz_highscores";

export function saveProfile(name) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify({ name }));
}

export function getProfile() {
  const data = localStorage.getItem(PROFILE_KEY);
  return data ? JSON.parse(data) : { name: "Gast" };
}

export function saveHighscore(score) {
  const profile = getProfile();
  const entry = { name: profile.name, score };

  const highscores = getHighscores();
  highscores.push(entry);

  highscores.sort((a, b) => b.score - a.score);

  const top10 = highscores.slice(0, 10);

  localStorage.setItem(HIGHSCORES_KEY, JSON.stringify(top10));
}

export function getHighscores() {
  const data = localStorage.getItem(HIGHSCORES_KEY);
  return data ? JSON.parse(data) : [];
}
