export default function XPBar({ xp }) {
  return (
    <div className="xp-bar">
      <div className="xp-fill" style={{ width: `${xp}%` }}></div>
    </div>
  );
}