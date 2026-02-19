import LessonScreen from "./ui/screens/LessonScreen"

const mockLesson = {
  words: [
    { word: "curious", definition: "eager to know" },
    { word: "swift", definition: "fast" }
  ],
  storyNode: {
    text: "You see a **curious** fox.",
    choices: [
      { id: "1", text: "Approach the fox", effect: "good" },
      { id: "2", text: "Run away swiftly", effect: "neutral" }
    ]
  },
  quiz: {
    question: "What does curious mean?",
    answers: ["happy", "eager to know", "fast"]
  }
}

export default function App() {
  return <LessonScreen lesson={mockLesson} />
}
