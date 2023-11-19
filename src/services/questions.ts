export async function getQuestions() {
  const response = await fetch('/data.json')
  const json = await response.json()
  const randomQuestions = json.sort(() => Math.random() - 0.5)
  const totalQuestions = randomQuestions.slice(0, 10)

  return totalQuestions
}
