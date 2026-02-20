import { useState } from "react";
import Mascot from "../components/Mascot";

export default function Home({ onComplete }) {
  const [message, setMessage] = useState("Ready to learn?");
  const [loading, setLoading] = useState(false);
  const [lesson, setLesson] = useState(null);

  const startLesson = async () => {
    setLoading(true);
    setMessage("Creating your adventure...");

    const res = await fetch("http://localhost:3001/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        words: ["igloo", "antelope", "roller coaster"],
        level: "grade 3",
        style: "funny adventure"
      })
    });

    const data = await res.json();

    setLesson(data);
    setLoading(false);
    setMessage("Let's begin!");
  };

  return (
    <div>
      <Mascot message={message} />

      <div className="card">
        {!lesson && !loading && (
          <button onClick={startLesson}>Start AI Lesson</button>
        )}

        {loading && <p>Loading magic...</p>}

        {lesson && (
          <div>
            <h3>📖 Story</h3>
            <p>{lesson.story}</p>

            <button onClick={onComplete}>Finish</button>
          </div>
        )}
      </div>
    </div>
  );
}