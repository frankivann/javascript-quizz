import { useQuestionData } from '../hooks/useQuestionData'
import { ButtonReset } from './ButtonResetGame'
import { IconIncorrect, IconSparkles } from './Icons'

export const QuizResult = () => {
  const { correct, incorrect } = useQuestionData()

  return (
    <main className='QuizResult'>
      <section className='QuizResultScore'>
        <p>
          <IconSparkles /> {correct} correctas
        </p>
        <p>
          <IconIncorrect /> {incorrect} incorrectas
        </p>
      </section>

      <img
        width={260}
        height={145}
        src='https://midu.dev/images/this-is-fine-404.gif'
        alt='This is fine meme'
        className='ThisIsFineMeme'
      />

      <ButtonReset />
    </main>
  )
}
