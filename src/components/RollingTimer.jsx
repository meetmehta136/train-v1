import React from "react";
import { RollingDigit } from "./RollingDigit";

export function RollingTimer({ value }) {
  return (
    <b className="rolling-timer" aria-label={value}>
      {value.split("").map((character, index) => (
        character === ":" ? (
          <span className="timer-colon" aria-hidden="true" key={`colon-${index}`}>:</span>
        ) : (
          <RollingDigit digit={character} key={`digit-${index}`} tick={value} />
        )
      ))}
    </b>
  );
}
