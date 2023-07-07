import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useStore } from '../store/question'

export const Modal = () => {
  const questions = useStore(state => state.questions)
  const isOpenModal = useStore(state => state.isOpenModal)
  const closeModal = useStore(state => state.closeModal)
  const minimumToWin = useStore(state => state.minimunToWin())
  const ref = useRef<HTMLDialogElement | null>(null)

  useEffect(
    function () {
      if (isOpenModal) {
        ref.current?.showModal()
      } else {
        ref.current?.close()
      }
    },
    [isOpenModal]
  )

  return createPortal(
    <dialog ref={ref} className='Modal'>
      <header className='ModalHeader'>
        <h4 className='ModalTitle'>Información</h4>
        <button className='ModalHeader-btn' onClick={closeModal}>
          ❌
        </button>
      </header>

      <main className='ModalContent'>
        <article>
          <h5 className='ModalContentTitle'>¿Qué es JavaScript Quizz?</h5>
          <p>
            JavaScript Quizz es un juego que pone a prueba tus cocimientos sobre
            el lenguaje de programación más popular de mundo,{' '}
            <span className='Highlight'>JavaScript</span>. El juego consiste en
            una serie de{' '}
            <span className='Highlight'>
              {' '}
              {questions.length} preguntas en total
            </span>{' '}
            donde en cada pregunta se darán{' '}
            <span className='Highlight'>4 posibles respuestas</span>, siendo
            una, y sólamente una, la correcta💫.
          </p>
        </article>

        <article>
          <h5 className='ModalContentTitle'>¿Cómo ganar?</h5>
          <p>
            A medida que vas respondiendo preguntas, se van sumando tus
            aciertos. Si al finalizar el juego has respondido correctamente{' '}
            <span className='Highlight'>más de {minimumToWin} preguntas</span>{' '}
            habrás ganado🎉.
          </p>
        </article>

        <article>
          <h5 className='ModalContentTitle'>Desarrollo del juego</h5>
          <p>
            JavaScript Quizz es un proyecto desarrollado por{' '}
            <span className='Highlight'>@Frankivann</span> para practicar
            distintas tecnologías. entre ellas están:
          </p>
          <ul className='ModalContentList'>
            <li>React</li>
            <li>Zustand</li>
            <li>TypeScript</li>
          </ul>
        </article>
      </main>

      <footer className='ModalFooter'>
        <button className='ModalFooter-btn' onClick={closeModal}>
          Cerrar
        </button>
      </footer>
    </dialog>,
    document.getElementById('portal') as HTMLElement
  )
}
