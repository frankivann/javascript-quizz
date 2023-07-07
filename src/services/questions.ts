export async function getQuestions() {
  const response = await fetch('http://localhost:5173/data.json')
  const json = await response.json()
  const randomQuestions = json.sort(() => Math.random() - 0.5)
  const totalQuestions = randomQuestions.slice(0, 10)

  return totalQuestions
}
