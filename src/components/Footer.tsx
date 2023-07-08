import { IconGithub } from './Icons'

export const Footer = () => {
  return (
    <footer className='Footer'>
      Diseñado por{' '}
      <a
        href='https://github.com/frankivann/javascript-quizz'
        target='_blank'
        className='Footer-link'
      >
        @Frankivann
        <IconGithub />
      </a>
    </footer>
  )
}
