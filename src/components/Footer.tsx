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
      <div className='FooterCredits'>
        | Basado en proyecto de{' '}
        <a
          href='https://github.com/midudev/aprendiendo-react/tree/master/projects/13-javascript-quiz-con-zustand'
          target='_blank'
          className='link'
        >
          midudev.
        </a>
      </div>
    </footer>
  )
}
