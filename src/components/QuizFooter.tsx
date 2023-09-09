import { useQuestionData } from '../hooks/useQuestionData'
import { ButtonReset } from './ButtonResetGame'
import { IconFlag, IconIncorrect, IconSparkles } from './Icons'

export const QuizFooter = () => {
  const { correct, incorrect, unanswer } = useQuestionData()

  return (
    <footer className='QuizFooter'>
      <section className='QuizFooterResults'>
        <span>
          <IconSparkles /> {correct} correctas
        </span>
        <span>
          <IconIncorrect /> {incorrect} incorrectas
        </span>
        <span>
          <IconFlag /> {unanswer} sin responder
        </span>
      </section>

      <div className='QuizFooterReset'>
        <ButtonReset />
      </div>
    </footer>
  )
}
