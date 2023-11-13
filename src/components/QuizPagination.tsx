import { useEffect } from 'react'
import { useStore } from '../store/question'
import { IconArrowLeft, IconArrowRight } from './Icons'
import { KEYDOWN } from '../constants'

export const QuizPagination = () => {
  const questions = useStore(state => state.questions)
  const currentQuestion = useStore(state => state.currentQuestion)
  const totalQuestions = questions.length

  const previousQuestion = useStore(state => state.previousQuestion)
  const nextQuestion = useStore(state => state.nextQuestion)

  useEffect(
    function () {
      const handleKeydown = (event: KeyboardEvent) => {
        const { key } = event

        if (KEYDOWN.LEFT.includes(key)) {
          previousQuestion()
        }

        if (KEYDOWN.RIGHT.includes(key)) {
          nextQuestion()
        }
      }

      window.addEventListener('keydown', handleKeydown)
      return () => window.removeEventListener('keydown', handleKeydown)
    },
    [nextQuestion, previousQuestion]
  )

  return (
    <header className='QuizPagination'>
      <button
        className='QuizPagination-btn'
        onClick={previousQuestion}
        disabled={currentQuestion === 0}
      >
        <IconArrowLeft />
      </button>
      <span>
        {currentQuestion + 1} / {totalQuestions}
      </span>
      <button
        className='QuizPagination-btn'
        onClick={nextQuestion}
        disabled={currentQuestion === questions.length - 1}
      >
        <IconArrowRight />
      </button>
    </header>
  )
}
