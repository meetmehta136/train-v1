import React from "react";
import { FlipDigit } from "./FlipDigit";

/**
 * FlipTimer — renders MM:SS with per-digit flip animation
 * exactly like the HTML reference.
 */
export function FlipTimer({ minutes, seconds }) {
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  return (
    <div className="flip-clock" aria-label={`${mm}:${ss}`}>
      <FlipDigit digit={mm[0]} />
      <FlipDigit digit={mm[1]} />
      <span className="flip-colon">:</span>
      <FlipDigit digit={ss[0]} forceKey={seconds} />
      <FlipDigit digit={ss[1]} forceKey={seconds} />
    </div>
  );
}
