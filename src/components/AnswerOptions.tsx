import { useStore } from '../store/question'

export const AnswerOptions = () => {
  const selectAnswer = useStore(state => state.selectAnswer)
  const questionInfo = useStore(state => state.getCurrentQuestionInfo())
  const { id, answers, userSelectedAnswer, correctAnswer } = questionInfo

  const handleClick = (index: number) => () => {
    selectAnswer({ questionId: id, answerIndex: index })
  }

  const getBackground = (index: number) => {
    const DEFAULT_COLOR = 'default'

    if (userSelectedAnswer == null) return DEFAULT_COLOR
    if (index !== correctAnswer && index !== userSelectedAnswer)
      return DEFAULT_COLOR
    if (index !== correctAnswer) return 'danger'
    if (index === correctAnswer) return 'success'

    return DEFAULT_COLOR
  }

  const getOpacity = (index: number) => {
    if (userSelectedAnswer == null) return ''
    if (index !== correctAnswer && index !== userSelectedAnswer)
      return 'Opacity'

    return ''
  }

  const isDisabled = userSelectedAnswer != null

  return (
    <div className='AnswerOptions'>
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={handleClick(index)}
          disabled={isDisabled}
          className={`AnswerOptions-btn Button-${getBackground(
            index
          )} ${getOpacity(index)}`}
        >
          {answer}
        </button>
      ))}
    </div>
  )
}
