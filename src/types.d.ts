import { THEME_MODE } from './constants'

export interface Question {
  id: number
  question: string
  code: string
  answers: string[]
  correctAnswer: number
  userSelectedAnswer?: number
  isUserSelectedCorrect?: boolean
}

export type ThemeMode = keyof typeof THEME_MODE
