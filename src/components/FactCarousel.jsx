import React from "react";
import { facts } from "../data/constants";

export function FactCarousel() {
  return (
    <section className="section facts">
      <h2>Do You know?</h2>
      <div className="fact-row">
        {facts.map((fact, index) => (
          <article className="fact-card" key={`${fact.text}-${index}`}>
            <img src={fact.image} alt="" />
            <p>{fact.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
