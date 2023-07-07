import { QuizGame } from './components/QuizGame'
import { Header } from './components/Header'
import { QuizTitle } from './components/QuizTitle'
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <Header />
      <QuizTitle />
      <QuizGame />
    </div>
  )
}
