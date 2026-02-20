import { useState } from "react"
import Card from "../components/Card"
import ChoiceButton from "../components/ChoiceButton"

export default function LessonScreen({ lesson }: any) {
  const [step, setStep] = useState("cards")

  if (step === "cards") {
    return (
      <div>
        {lesson.words.map((w: any, i: number) => (
          <Card key={i} {...w} />
        ))}
        <button onClick={() => setStep("story")}>Continue</button>
      </div>
    )
  }

  if (step === "story") {
    return (
      <div>
        <p>{lesson.storyNode.text}</p>
        {lesson.storyNode.choices.map((c: any) => (
          <ChoiceButton key={c.id} text={c.text} onClick={() => setStep("quiz")} />
        ))}
      </div>
    )
  }

  if (step === "quiz") {
    return (
      <div>
        <h2>{lesson.quiz.question}</h2>
        {lesson.quiz.answers.map((a: string, i: number) => (
          <button key={i}>{a}</button>
        ))}
      </div>
    )
  }

  return null
}
