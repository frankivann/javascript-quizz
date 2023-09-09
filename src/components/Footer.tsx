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
        @frankivann
        <IconGithub />
      </a>
      <div className='FooterCredits'>| Créditos a midudev.</div>
    </footer>
  )
}
