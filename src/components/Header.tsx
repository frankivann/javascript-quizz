import { useEffect } from 'react'
import { THEME_MODE } from '../constants'
import { useStore } from '../store/question'
import { HeaderButtonClick } from './HeaderButton'
import { IconDarkMode, IconLightMode } from './Icons'
import { Modal } from './Modal'
import { useModal } from '../hooks/useModal'

export const Header = () => {
  const { openModal, closeModal, showModal } = useModal()
  const themeMode = useStore(state => state.themeMode)
  const toggleThemeMode = useStore(state => state.toggleThemeMode)

  const iconThemeMode =
    themeMode === THEME_MODE.DARK ? <IconDarkMode /> : <IconLightMode />

  useEffect(
    function () {
      const rootElement = window.document.documentElement

      if (themeMode === THEME_MODE.DARK) {
        rootElement.setAttribute('data-theme', THEME_MODE.DARK)
      } else {
        rootElement.setAttribute('data-theme', THEME_MODE.LIGHT)
      }
    },
    [themeMode]
  )

  return (
    <>
      <header className='Header'>
        <HeaderButtonClick
          onClick={toggleThemeMode}
          text={themeMode}
          icon={iconThemeMode}
        />
        <HeaderButtonClick text='info' icon='🤍' onClick={openModal} />
      </header>
      <Modal closeModal={closeModal} showModal={showModal} />
    </>
  )
}
