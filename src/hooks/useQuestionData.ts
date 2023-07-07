import { useStore } from '../store/question'

export function useQuestionData() {
  const questions = useStore(state => state.questions)

  const correct = questions.filter(q => q.isUserSelectedCorrect).length
  const unanswer = questions.filter(q => q.userSelectedAnswer == null).length
  const incorrect = questions.filter(
    q => q.isUserSelectedCorrect === false
  ).length

  return {
    correct,
    unanswer,
    incorrect,
  }
}
