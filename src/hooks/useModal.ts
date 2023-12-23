import { useState } from 'react'

export function useModal() {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }
  return {
    showModal,
    closeModal,
    openModal,
  }
}
