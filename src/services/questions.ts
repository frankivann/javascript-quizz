const API_URL = import.meta.env.PRO
  ? 'https://frankivann-javascript-quizz.surge.sh'
  : 'http://localhost:5173'

export async function getQuestions() {
  const response = await fetch(`${API_URL}/data.json`)
  const json = await response.json()
  const randomQuestions = json.sort(() => Math.random() - 0.5)
  const totalQuestions = randomQuestions.slice(0, 10)

  return totalQuestions
}
