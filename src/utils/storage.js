export function saveProfile(name) {
  localStorage.setItem("profile", JSON.stringify({ name }));
}

export function saveHighscore(score) {
  const profile = JSON.parse(localStorage.getItem("profile")) || {
    name: "Gast"
  };
  const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.push({ name: profile.name, score });
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

export function getHighscores() {
  return JSON.parse(localStorage.getItem("highscores")) || [];
}
