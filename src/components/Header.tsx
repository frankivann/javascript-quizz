import { useEffect } from 'react'
import { THEME_MODE } from '../constants'
import { useStore } from '../store/question'
import { HeaderButtonClick } from './HeaderButton'
import { Modal } from './Modal'
import { IconDarkMode, IconLightMode } from './Icons'

export const Header = () => {
  const themeMode = useStore(state => state.themeMode)
  const toggleThemeMode = useStore(state => state.toggleThemeMode)
  const openModal = useStore(state => state.openModal)

  const iconThemeMode =
    themeMode === THEME_MODE.DARK ? <IconDarkMode /> : <IconLightMode />

  useEffect(
    function () {
      if (themeMode === THEME_MODE.LIGHT) {
        document.documentElement.classList.add(THEME_MODE.LIGHT)
        document.documentElement.classList.remove(THEME_MODE.DARK)
      } else {
        document.documentElement.classList.add(THEME_MODE.DARK)
        document.documentElement.classList.remove(THEME_MODE.LIGHT)
      }
    },
    [themeMode]
  )

  return (
    <>
      <header className='Header'>
        <HeaderButtonClick text='info' icon='🤍' onClick={openModal} />
        <HeaderButtonClick
          onClick={toggleThemeMode}
          text={themeMode}
          icon={iconThemeMode}
        />
      </header>
      <Modal />
    </>
  )
}
