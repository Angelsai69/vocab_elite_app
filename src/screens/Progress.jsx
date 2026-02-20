import XPBar from "../components/XPBar";

export default function Progress({ user }) {
  return (
    <div className="card">
      <h2>Progress</h2>
      <p>Level: {user.level}</p>
      <p>Streak: {user.streak} 🔥</p>

      <XPBar xp={user.xp} />

      <h3>Unlocks</h3>
      <ul>
        {user.unlocks.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
  );
}