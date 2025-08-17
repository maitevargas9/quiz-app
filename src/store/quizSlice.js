import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  status: "idle" 
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    answerQuestion: (state, action) => {
      const { isCorrect } = action.payload;
      if (isCorrect) state.score += 1;
      state.currentIndex += 1;
    },
    resetQuiz: () => initialState,
    finishQuiz: (state) => {
      state.status = "finished";
    }
  }
});

export const { setQuestions, answerQuestion, resetQuiz, finishQuiz } =
  quizSlice.actions;
export default quizSlice.reducer;