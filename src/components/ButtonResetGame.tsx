import { useStore } from '../store/question'
import { IconRefresh } from './Icons'

export function ButtonReset() {
  const reset = useStore(state => state.reset)

  return (
    <button onClick={reset} className='ButtonReset'>
      <IconRefresh />
      Restablecer juego
    </button>
  )
}
