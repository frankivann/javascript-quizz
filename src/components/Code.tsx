import Prism from 'prismjs'
import { useEffect, useState } from 'react'
import { IconChecked, IconClipBoard } from './Icons'
import '../styles/prism.css'

export const Code = ({
  code = 'code example',
  lang = 'js',
}: {
  code: string
  lang: string
}) => {
  const [isCopyClipboard, setIsCopyClipboard] = useState(false)

  const handleClick = async () => {
    const { clipboard } = window.navigator
    if (!clipboard) return

    await clipboard.writeText(code)
    setIsCopyClipboard(true)
    setTimeout(() => setIsCopyClipboard(false), 1000)
  }

  useEffect(
    function () {
      Prism.highlightAll()
    },
    [code]
  )

  const text = isCopyClipboard ? <IconChecked /> : <IconClipBoard />

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
