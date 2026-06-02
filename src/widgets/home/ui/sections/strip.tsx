import { useMemo } from "react";
import { STRIP } from "@entities/home-content/model/strip";

export function Strip() {
  const doubled = useMemo(() => [...STRIP, ...STRIP], []);
  return (
    <div className="strip">
      <div className="strip-frame">
        <div className="strip-track">
          {doubled.map((s, i) => (
            <span className="strip-item" key={i}>
              <em>{s}</em>
              <span className="sparkle">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
