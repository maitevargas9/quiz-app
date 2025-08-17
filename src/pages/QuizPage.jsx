import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuestions, answerQuestion, finishQuiz } from "../store/quizSlice";
import useCountdown from "../hooks/useCountdown";

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

  if (!questions.length) return <p>Lade Fragen...</p>;

  const q = questions[currentIndex];

  return (
    <div className="p-8 text-center">
      <h2 className="text-xl mb-4">
        {q.question}
      </h2>
      <p className="mb-2">
        Zeit: {timeLeft}s
      </p>
      {q.options.map((opt, i) =>
        <button
          key={i}
          onClick={() => handleAnswer(opt === q.answer)}
          className="block w-full bg-gray-200 p-2 my-2 rounded"
        >
          {opt}
        </button>
      )}
    </div>
  );
}
