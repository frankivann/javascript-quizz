export const HeaderButton = ({
  icon = '',
  text = '',
}: {
  icon: string
  text: string
}) => {
  return (
    <button className='Header-btn'>
      {icon} <span>/ {text}</span>
    </button>
  )
}

export const HeaderButtonClick = ({
  icon = '',
  text = '',
  onClick,
}: {
  icon: string
  text: string
  onClick: () => void
}) => {
  return (
    <button onClick={onClick} className='Header-btn'>
      {icon} <span>/ {text}</span>
    </button>
  )
}
