import React from "react";
import socialRail from "../assets/social-rail.jpg";

export function SocialPanel() {
  return (
    <section className="section social-section">
      <h2>Follow Us On Social Media Platforms</h2>
      <div className="social-card">
        <img src={socialRail} alt="" />
        <div className="social-icons" aria-label="Social media links">
          <span className="x-icon">X</span>
          <span className="facebook">f</span>
          <span className="instagram" />
          <span className="youtube">▶</span>
        </div>
      </div>
    </section>
  );
}
