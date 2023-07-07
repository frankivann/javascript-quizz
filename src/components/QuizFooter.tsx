import { useQuestionData } from '../hooks/useQuestionData'
import { useStore } from '../store/question'

export const QuizFooter = () => {
  const { correct, incorrect, unanswer } = useQuestionData()
  const reset = useStore(state => state.reset)

  return (
    <footer className='QuizFooter'>
      <section className='QuizFooter-section'>
        <strong>✨ {correct} correctas</strong>
        <strong>🚩 {incorrect} incorrectas</strong>
        <strong>🏴 {unanswer} sin responder</strong>
      </section>

      <div className='QuizFooter-div'>
        <button className='QuizFooter-btn' onClick={reset}>
          🔁 Restablecer juego
        </button>
      </div>
    </footer>
  )
}
