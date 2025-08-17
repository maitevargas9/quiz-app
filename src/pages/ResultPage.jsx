import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../store/quizSlice";
import { saveHighscore } from "../utils/storage";

import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";

export default function ResultPage() {
  const { score, questions } = useSelector(state => state.quiz);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRestart = () => {
    saveHighscore(score);
    dispatch(resetQuiz());
    navigate("/");
  };

  return (
    <Layout>
      <Card>
        <h1 className="text-2xl mb-4">Ergebnis</h1>
        <p className="mb-4">
          Du hast <strong>{score}</strong> von{" "}
          <strong>{questions.length}</strong> richtig!
        </p>
        <Button onClick={handleRestart}>Neu starten</Button>
      </Card>
    </Layout>
  );
}
