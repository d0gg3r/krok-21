import { createSlice } from "@reduxjs/toolkit";
import { data } from '../data'

const initialState = {
  score: 0,
  questions: data,
  correct: 0,
  wrong: 0,
  questionId: 0,
  isPicked: false
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    pickOption: (state, action) => {
      const userPick = action.payload
      if (userPick === state.questions[0][state.questionId].answer) {
        state.score++
        state.correct++
      } else {
        if (state.score > 0) {
          state.score--
        }
        state.wrong++
      }
      state.isPicked = true
      console.log(`score - ${state.score}; correct - ${state.correct}; wrong: ${state.wrong}`)
    },
    clickNext: (state) => {
      state.questionId += 1
      // console.log(state.questionId)
    },
    clickPrev: (state) => {
      if (state.questionId > 0) {
        state.questionId--
      }
    }

  }
})
export const { pickOption, clickNext, clickPrev } = quizSlice.actions

export default quizSlice.reducer