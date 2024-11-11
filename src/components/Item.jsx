import { useState } from "react";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <li>
      <span className={`emoji ${zoomed ? "zoomed" : ""}`}>{emoji}</span>
      <button
        onClick={() => {
          setZoomed((wasZoomed) => !wasZoomed);
        }}
      >
        {zoomed ? "Oddal" : "Przybliż"}
      </button>
    </li>
  );
}
