import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useStore } from '../store/question'

export const Modal = () => {
  const ref = useRef<HTMLDialogElement | null>(null)
  const isOpenModal = useStore(state => state.isOpenModal)
  const closeModal = useStore(state => state.closeModal)

  useEffect(
    function () {
      const modal = ref.current
      if (!modal) return

      if (isOpenModal) modal.showModal()
      else modal.close()
    },
    [isOpenModal]
  )

  const handleClickOutside = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialogDimensions = event.currentTarget.getBoundingClientRect()

    const isClickOutside =
      event.clientY < dialogDimensions.top ||
      event.clientY > dialogDimensions.bottom ||
      event.clientX < dialogDimensions.left ||
      event.clientX > dialogDimensions.right

    if (isClickOutside) closeModal()
  }

  return (
    <>
      {isOpenModal &&
        createPortal(
          <dialog ref={ref} className='Modal' onClick={handleClickOutside}>
            <main className='ModalContent'>
              <article>
                <h5 className='ModalContentTitle'>¿Qué es JavaScript Quizz?</h5>
                <p>
                  Es un juego de preguntas. Tienes 4 posibles respuestas y
                  solamente 1 es la correcta😜.
                </p>
              </article>

              <article>
                <h5 className='ModalContentTitle'>Desarrollo del juego</h5>
                <p>
                  Desarrollado por{' '}
                  <span className='Highlight'>@frankivann</span>. Basado en
                  proyecto de <span className='Highlight'>@midudev</span>.
                </p>
              </article>
            </main>

            <footer className='ModalFooter'>
              <button className='ModalFooter-btn' onClick={closeModal}>
                Cerrar
              </button>
            </footer>
          </dialog>,
          document.getElementById('portal') as HTMLElement
        )}
    </>
  )
}
