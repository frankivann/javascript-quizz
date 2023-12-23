import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getQuestions } from '../services/questions'
import { THEME_MODE } from '../constants'
import { type Question } from '../types'
import conffeti from 'canvas-confetti'

interface Store {
  questions: Question[]
  currentQuestion: number
  themeMode: THEME_MODE
  isQuizFinished: boolean
  toggleThemeMode: () => void
  getCurrentQuestionInfo: () => Question
  nextQuestion: () => void
  previousQuestion: () => void
  selectAnswer: ({
    questionId,
    answerIndex,
  }: {
    questionId: number
    answerIndex: number
  }) => void
  reset: () => Promise<void>
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestion: 0,
      themeMode: window.matchMedia('(prefers-color-scheme: dark)').matches
        ? THEME_MODE.DARK
        : THEME_MODE.LIGHT,
      isQuizFinished: false,
      toggleThemeMode: () => {
        const { themeMode } = get()
        const toggle =
          themeMode === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK

        set({ themeMode: toggle })
      },
      getCurrentQuestionInfo: () => {
        const { questions, currentQuestion } = get()
        return questions[currentQuestion]
      },
      nextQuestion: () => {
        const { questions, currentQuestion } = get()
        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
          set({ currentQuestion: nextQuestion })
        }
      },
      previousQuestion: () => {
        const { currentQuestion } = get()
        const previousQuestion = currentQuestion - 1

        if (previousQuestion >= 0) {
          set({ currentQuestion: previousQuestion })
        }
      },
      selectAnswer: ({ questionId, answerIndex }) => {
        const { questions } = get()
        const newQuestions = structuredClone(questions) as Question[]

        // find index
        const questionIndex = newQuestions.findIndex(q => q.id === questionId)
        // get question info
        const questionInfo = newQuestions[questionIndex]
        // check is correct answer
        const isUserSelectedCorrect = questionInfo.correctAnswer === answerIndex
        // update question info
        newQuestions[questionIndex] = {
          ...questionInfo,
          userSelectedAnswer: answerIndex,
          isUserSelectedCorrect,
        }

        set({ questions: newQuestions })

        // check if the game end
        const areAllQuestionsAnswered = newQuestions.every(
          question => question.userSelectedAnswer != null
        )
        if (!areAllQuestionsAnswered) return

        setTimeout(() => {
          set({ isQuizFinished: true })
          conffeti()
        }, 300)
      },
      reset: async () => {
        const questions = await getQuestions()
        set({ questions, currentQuestion: 0, isQuizFinished: false })
      },
    }),
    {
      name: '_JSQUIZZ_GAME_', // name of the item in the storage (must be unique)
    }
  )
)

// get initial questions.
getQuestions()
  .then(questions => useStore.setState({ questions }))
  .catch(error => console.error(error))
