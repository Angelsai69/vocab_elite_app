import { useState } from "react";
import TopBar from "./components/TopBar";
import BottomNav from "./components/BottomNav";
import Home from "./screens/Home";
import Progress from "./screens/Progress";

export default function App() {
  const [lessonData, setLessonData] = useState(null);
  const [screen, setScreen] = useState("home");

  const [user, setUser] = useState({
    xp: 40,
    level: 1,
    streak: 1,
    unlocks: []
  });

  const addXP = (amount) => {
    let newXP = user.xp + amount;
    let newLevel = user.level;

    if (newXP >= 100) {
      newXP = newXP - 100;
      newLevel++;
    }

    // unlock system
    let unlocks = [...user.unlocks];
    if (newLevel === 2 && !unlocks.includes("hat")) {
      unlocks.push("hat");
    }

    setUser({ ...user, xp: newXP, level: newLevel, unlocks });
  };

  const completeLesson = () => {
    addXP(30);
    setUser(prev => ({
      ...prev,
      streak: prev.streak + 1
    }));
  };

  return (
    <div className="app">
      <TopBar user={user} />

      <div className="content">
        {screen === "home" && <Home onComplete={completeLesson} />}
        {screen === "progress" && <Progress user={user} />}
      </div>

      <BottomNav setScreen={setScreen} />
    </div>
  );
}