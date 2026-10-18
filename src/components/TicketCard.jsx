import React from "react";
import { formatDisplayDate } from "../utils/helpers";

export function TicketCard({ className = "", journeyDetails, onViewDetails }) {
  const fromStation = journeyDetails.fromStation || "NADIAD JN.";
  const toStation = journeyDetails.toStation || "SURAT";
  const trainClassType = "Unreserve";

  return (
    <section className={`ticket ${className}`}>
      <div className="ticket-notch top" />
      <div className="ticket-notch bottom" />
      <p>{formatDisplayDate(journeyDetails.journeyDate)}</p>
      <div className="ticket-line" />
      <div className="ticket-route">
        <span>{fromStation}</span>
        <span>{toStation}</span>
      </div>
      <div className="ticket-line" />
      <div className="ticket-actions">
        <strong>{trainClassType}</strong>
        <button type="button">Book Again</button>
        <button type="button" onClick={onViewDetails}>View Details</button>
      </div>
    </section>
  );
}
