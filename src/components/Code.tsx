import { useEffect } from 'react'
import Prism from 'prismjs'
import '../styles/prism.css'
import { useStore } from '../store/question'
import { IconChecked, IconClipBoard } from './Icons'

export const Code = ({
  code = 'code example',
  lang = 'javas',
}: {
  code: string
  lang: string
}) => {
  const isCopyClipBoard = useStore(state => state.isCopyClipBoard)
  const copyClipBoard = useStore(state => state.copyClipBoard)

  const handleClick = () => {
    copyClipBoard({ text: code })
  }

  useEffect(
    function () {
      Prism.highlightAll()
    },
    [code]
  )

  const text = isCopyClipBoard ? <IconChecked /> : <IconClipBoard />

  return (
    <div className='CodeBlock'>
      <pre className='Code'>
        <code className={` language-${lang}`}>{code}</code>
      </pre>
      <button onClick={handleClick} className='ClipBoard'>
        {text}
      </button>
    </div>
  )
}
