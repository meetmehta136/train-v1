import React from "react";
import { JourneyPlanner } from "../components/JourneyPlanner";
import { MoreOfferings } from "../components/MoreOfferings";
import { TicketCard } from "../components/TicketCard";
import { FactCarousel } from "../components/FactCarousel";
import { SocialPanel } from "../components/SocialPanel";

export function HomePage({ journeyDetails, onViewDetails }) {
  return (
    <div className="content">
      <JourneyPlanner />
      <MoreOfferings />
      <section className="section upcoming">
        <h2>Upcoming Journey</h2>
        <TicketCard journeyDetails={journeyDetails} onViewDetails={onViewDetails} />
      </section>
      <FactCarousel />
      <SocialPanel />
    </div>
  );
}
