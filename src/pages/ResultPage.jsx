import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../store/quizSlice";
import { saveHighscore } from "../utils/storage";

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
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Ergebnis</h1>
      <p>
        Du hast {score} von {questions.length} richtig!
      </p>
      <button
        onClick={handleRestart}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Neu starten
      </button>
    </div>
  );
}
