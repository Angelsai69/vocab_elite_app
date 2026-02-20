export default function BottomNav({ setScreen }) {
  return (
    <div className="bottom-nav">
      <button onClick={() => setScreen("home")}>🏠</button>
      <button onClick={() => setScreen("progress")}>📊</button>
    </div>
  );
}