import { useStore } from '../store/question'
import { Loading } from './Loading'
import { Question } from './Question'
import { Code } from './Code'
import { AnswerOptions } from './AnswerOptions'

export const Quiz = () => {
  const questions = useStore(state => state.questions)
  const questionInfo = useStore(state => state.getCurrentQuesitionInfo())

  // wait until game is fully loaded.
  if (questions.length === 0) return <Loading />

  return (
    <div className='Quiz'>
      <Question question={questionInfo.question} />
      <Code lang='js' code={questionInfo.code} />
      <AnswerOptions />
    </div>
  )
}
