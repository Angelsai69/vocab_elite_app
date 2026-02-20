export default function TopBar({ user }) {
  return (
    <div className="top-bar">
      <div>VocabQuest ✨</div>
      <div className="top-stats">
        <span>Lv {user.level}</span>
        <span>🔥 {user.streak}</span>
      </div>
    </div>
  );
}