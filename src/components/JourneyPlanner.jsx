import React from "react";
import { journeyCards } from "../data/constants";

export function JourneyPlanner() {
  return (
    <section className="section journey-section">
      <p className="hello">Hi, Pastagiya Prit Shailendrakumar!</p>
      <h2>Journey Planner</h2>
      <div className="journey-row">
        {journeyCards.map((card) => (
          <article className="journey-card" key={card.label}>
            <img src={card.image} alt="" />
            <span>{card.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
