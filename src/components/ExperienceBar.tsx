import "../styles/global.css";

export default function ExperienceBar() {
  return (
    <header className="experienceBar">
      <span>0 xp</span>
      <div>
        <div style={{ width: "60%" }} />
        <span className="current-experience" style={{ left: "60%" }}>
          400 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}
