export const HeaderButtonClick = ({
  icon = '🤍',
  text = '🖤',
  onClick,
}: {
  icon: React.ReactNode | string
  text: React.ReactNode | string
  onClick: () => void
}) => {
  return (
    <button onClick={onClick} className='Header-btn'>
      {icon} <span>/ {text}</span>
    </button>
  )
}
