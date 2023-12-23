import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  showModal: boolean
  closeModal: () => void
}

export const Modal = ({ showModal, closeModal }: Props) => {
  const ref = useRef<HTMLDialogElement | null>(null)

  useEffect(
    function () {
      const modal = ref.current
      if (!modal) return

      if (showModal) modal.showModal()
      else modal.close()
    },
    [showModal]
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
      {showModal &&
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
