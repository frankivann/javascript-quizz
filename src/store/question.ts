import { create } from 'zustand'
import { getQuestions } from '../services/questions'
import { THEME_MODE } from '../constants'
import { type Question } from '../types'
import conffeti from 'canvas-confetti'

interface State {
  questions: Question[]
  currentQuestion: number
  themeMode: THEME_MODE
  isCopyClipBoard: boolean
  isOpenModal: boolean
  isQuizFinished: boolean
  toggleThemeMode: () => void
  getCurrentQuesitionInfo: () => Question
  nextQuestion: () => void
  previousQuestion: () => void
  selectAnswer: ({
    questionId,
    answerIndex,
  }: {
    questionId: number
    answerIndex: number
  }) => void
  copyClipBoard: ({ text }: { text: string }) => void
  openModal: () => void
  closeModal: () => void
  minimunToWin: () => number
  reset: () => void
}

export const useStore = create<State>((set, get) => ({
  questions: [],
  currentQuestion: 0,
  themeMode: window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME_MODE.DARK
    : THEME_MODE.LIGHT,
  isCopyClipBoard: false,
  isOpenModal: false,
  isQuizFinished: false,
  toggleThemeMode: () => {
    const { themeMode } = get()
    const toggle =
      themeMode === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK

    set({ themeMode: toggle })
  },
  getCurrentQuesitionInfo: () => {
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
  copyClipBoard: ({ text }) => {
    // check if clipboard api is supported.
    if (!navigator.clipboard) return

    navigator.clipboard
      .writeText(text)
      .then(() => {
        set({ isCopyClipBoard: true })

        // set to false
        setTimeout(() => {
          set({ isCopyClipBoard: false })
        }, 1500)
      })
      .catch(error => console.log(error))
  },
  openModal: () => set({ isOpenModal: true }),
  closeModal: () => set({ isOpenModal: false }),
  minimunToWin: () => {
    const { questions } = get()
    return Math.round(questions.length / 1.5)
  },
  reset: () => {
    getQuestions()
      .then(questions =>
        set({ questions, currentQuestion: 0, isQuizFinished: false })
      )
      .catch(error => console.log(error))
  },
}))

// get initial questions.
getQuestions()
  .then(questions => useStore.setState({ questions }))
  .catch(error => console.error(error))
