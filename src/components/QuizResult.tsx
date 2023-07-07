import { useQuestionData } from '../hooks/useQuestionData'
import { useStore } from '../store/question'

export const QuizResult = () => {
  const reset = useStore(state => state.reset)
  const { correct, incorrect } = useQuestionData()

  return (
    <main className='QuizResult'>
      <h2>Tus resultados</h2>
      <section className='QuizResult-section'>
        <strong>✨ {correct} correctas</strong>
        <strong>🚩 {incorrect} incorrectas</strong>
      </section>

      <div className='QuizResult-div'>
        <button className='QuizResult-btn' onClick={reset}>
          🔁 Restablecer juego
        </button>
      </div>
    </main>
  )
}
