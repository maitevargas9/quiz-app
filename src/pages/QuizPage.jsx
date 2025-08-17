import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuestions, answerQuestion, finishQuiz } from "../store/quizSlice";
import useCountdown from "../hooks/useCountdown";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

export default function QuizPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, currentIndex } = useSelector(state => state.quiz);
  const [timeLeft, resetTimer] = useCountdown(15, handleTimeout);

  useEffect(
    () => {
      fetch("/data/questions.json")
        .then(res => res.json())
        .then(data => dispatch(setQuestions(data)));
    },
    [dispatch]
  );

  function handleTimeout() {
    dispatch(answerQuestion({ isCorrect: false }));
    nextQuestion();
  }

  function handleAnswer(isCorrect) {
    dispatch(answerQuestion({ isCorrect }));
    nextQuestion();
  }

  function nextQuestion() {
    resetTimer();
    if (currentIndex + 1 >= questions.length) {
      dispatch(finishQuiz());
      navigate("/result");
    }
  }

  if (!questions.length) return <p>Lade Frage...</p>;
  const q = questions[currentIndex];

  return (
    <Layout>
      <ProgressBar value={currentIndex} max={questions.length} />

      <Card>
        <h2 className="text-xl mb-4">
          {q.question}
        </h2>
        <p className="mb-4 text-gray-600">
          ⏳ {timeLeft}s
        </p>

        <div className="space-y-2">
          {q.options.map((opt, i) =>
            <Button
              key={i}
              onClick={() => handleAnswer(opt === q.answer)}
              className="w-full"
            >
              {opt}
            </Button>
          )}
        </div>
      </Card>
    </Layout>
  );
}
