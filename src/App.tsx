import { Header } from './components/Header'
import { QuizTitle } from './components/QuizTitle'
import { QuizGame } from './components/QuizGame'
import { Footer } from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <div className='Container'>
        <Header />
        <QuizTitle />
        <QuizGame />
      </div>
      <Footer />
    </div>
  )
}
