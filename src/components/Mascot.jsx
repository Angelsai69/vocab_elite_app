import { useState, useEffect } from "react";

export default function Mascot({ message }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(message);
  }, [message]);

  return (
    <div className="mascot-container">
      <img src="/mascot.png" className="mascot" />
      <div className="mascot-text">{text}</div>
    </div>
  );
}