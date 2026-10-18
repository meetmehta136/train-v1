import React from "react";
import { offerings } from "../data/constants";

export function MoreOfferings() {
  return (
    <section className="section">
      <h2>More Offerings</h2>
      <div className="offering-grid">
        {offerings.map(({ label, image }) => (
          <article className="offering" key={label}>
            <img className="offering-icon" src={image} alt="" />
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
