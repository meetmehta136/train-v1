import React, { useEffect, useRef, useState } from "react";

export function RollingDigit({ digit, tick }) {
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [previousDigit, setPreviousDigit] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const lastTickRef = useRef(tick);

  useEffect(() => {
    if (tick === lastTickRef.current && digit === currentDigit) return undefined;

    lastTickRef.current = tick;
    setPreviousDigit(currentDigit);
    setCurrentDigit(digit);
    setIsRolling(true);

    const timerId = window.setTimeout(() => {
      setIsRolling(false);
      setPreviousDigit(null);
    }, 430);

    return () => window.clearTimeout(timerId);
  }, [currentDigit, digit, tick]);

  return (
    <span className="rolling-digit" aria-hidden="true">
      {isRolling && previousDigit !== null && (
        <span className="digit-out">{previousDigit}</span>
      )}
      <span className={isRolling ? "digit-in" : ""}>{currentDigit}</span>
    </span>
  );
}
