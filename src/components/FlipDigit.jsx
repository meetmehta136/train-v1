import React, { useEffect, useRef, useState } from "react";

/**
 * FlipDigit — single digit slot with slide-out-down / slide-in-from-top
 * animation, exactly matching the HTML reference card.
 *
 * @prop {string|number} digit      — the digit to display
 * @prop {any}           forceKey   — when this value changes the animation
 *                                    fires even if `digit` itself hasn't changed
 *                                    (used to sync both seconds digits every tick)
 */
export function FlipDigit({ digit, forceKey }) {
  const [current, setCurrent] = useState(digit);
  const [prev, setPrev]       = useState(null);
  const [animating, setAnimating] = useState(false);
  const prevDigitRef = useRef(digit);
  const prevKeyRef   = useRef(forceKey);

  useEffect(() => {
    const digitChanged = digit !== prevDigitRef.current;
    const keyChanged   = forceKey !== undefined && forceKey !== prevKeyRef.current;

    if (!digitChanged && !keyChanged) return;

    // snapshot the value being replaced
    const outgoing = prevDigitRef.current;

    prevDigitRef.current = digit;
    prevKeyRef.current   = forceKey;
    setCurrent(digit);
    setPrev(outgoing);
    setAnimating(true);

    const t = setTimeout(() => {
      setAnimating(false);
      setPrev(null);
    }, 520);
    return () => clearTimeout(t);
  }, [digit, forceKey]);

  return (
    <span className="flip-slot" aria-hidden="true">
      {animating && prev !== null && (
        <span className="flip-digit flip-out">{prev}</span>
      )}
      <span className={animating ? "flip-digit flip-in" : "flip-digit flip-static"}>
        {current}
      </span>
    </span>
  );
}
