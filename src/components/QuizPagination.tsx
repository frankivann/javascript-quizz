import { useStore } from '../store/question'
import { IconArrowLeft, IconArrowRight } from './Icons'

export const QuizPagination = () => {
  const questions = useStore(state => state.questions)
  const currentQuestion = useStore(state => state.currentQuestion)
  const totalQuestions = questions.length

  const previousQuestion = useStore(state => state.previousQuestion)
  const nextQuestion = useStore(state => state.nextQuestion)

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
