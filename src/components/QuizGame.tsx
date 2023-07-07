import { QuizPagination } from './QuizPagination'
import { Quiz } from './Quiz'
import { QuizFooter } from './QuizFooter'
import { QuizResult } from './QuizResult'
import { useStore } from '../store/question'

export const QuizGame = () => {
  const isQuizFinished = useStore(state => state.isQuizFinished)
  if (isQuizFinished) return <QuizResult />

  return (
    <main className='Main'>
      <QuizPagination />
      <Quiz />
      <QuizFooter />
    </main>
  )
}
