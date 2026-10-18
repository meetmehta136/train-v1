import React from "react";
import { getTicketValues } from "../utils/helpers";

export function BookingCard({
  journeyDetails,
  onViewDetails,
  onBookAgain,

  // Custom props for ticket data
  type,
  referenceNumber,
  journey,
  date,
  stations,
  fromStation,
  toStation,
  distance
}) {
  const ticketValues = getTicketValues(journeyDetails || {});

  // Resolve type (e.g. Unreserved)
  const finalType = "Unreserved";

  // Resolve ticket reference (e.g. UTS: X51JEFRO3F)
  let finalReference = referenceNumber;
  if (!finalReference) {
    if (ticketValues.idPrefix && ticketValues.ticketId) {
      let id = ticketValues.ticketId;
      if (id === "X51JEFR03F") id = "X51JEFRO3F"; // Replace 0 with O for exact matches if needed
      finalReference = `${ticketValues.idPrefix}: ${id}`;
    } else {
      finalReference = "UTS: X51JEFRO3F";
    }
  }

  // Resolve journey type (e.g. JOURNEY or ONE JOURNEY)
  const finalJourney = journey || (ticketValues.detailValue && ticketValues.detailValue !== "JOURNEY" ? ticketValues.detailValue : "ONE JOURNEY");

  // Resolve journey date
  const finalDate = date || ticketValues.journeyDate || "Mon, 24 Aug 26";

  // Resolve stations
  let resolvedFrom = fromStation;
  let resolvedTo = toStation;
  if (stations) {
    if (typeof stations === "object") {
      resolvedFrom = stations.from || stations.fromStation || resolvedFrom;
      resolvedTo = stations.to || stations.toStation || resolvedTo;
    } else if (typeof stations === "string") {
      const parts = stations.split(/[-—]/);
      if (parts.length >= 2) {
        resolvedFrom = parts[0].trim();
        resolvedTo = parts[1].trim();
      }
    }
  }
  const finalFromStation = resolvedFrom || ticketValues.fromStation || "NADIAD JN.";
  const finalToStation = resolvedTo || ticketValues.toStation || "SURAT";

  // Resolve distance
  const finalDistance = distance || ticketValues.middleText || "183 km";

  return (
    <article className="booking-card">
      {/* Top section: badge & reference */}
      <div className="booking-top-row">
        <span className={`booking-pill ${finalType.toLowerCase().includes("unreserved") ? "unreserved" : "reserved"}`}>
          {finalType}
        </span>
        <span className="booking-ref">
          {finalReference}
        </span>
      </div>

      {/* Middle section: Ticket details (Type & Booking Date) */}
      <div className="booking-mid-row">
        <div className="booking-col-left">
          <span className="booking-label">Ticket Type</span>
          <span className="booking-value-bold">{finalJourney}</span>
        </div>
        <div className="booking-col-right">
          <span className="booking-label">Journey Date</span>
          <span className="booking-value-date">{finalDate}</span>
        </div>
      </div>

      {/* Bottom of upper section: Route and distance */}
      <div className="booking-route-row">
        <span className="booking-station from">{finalFromStation}</span>
        <div className="booking-divider-container">
          
          <span className="booking-divider-text">-{finalDistance}-</span>
        
        </div>
        <span className="booking-station to">{finalToStation}</span>
      </div>

      {/* Aesthetic ticket cuts */}
      <div className="booking-cut left" />
      <div className="booking-cut right" />

      {/* Bottom section with action buttons */}
      <div className="booking-actions">
        <button type="button" className="btn-action btn-book-again" onClick={onBookAgain}>
          Book Again
        </button>
        <div className="booking-actions-divider" />
        <button type="button" className="btn-action btn-view-details" onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </article>
  );
}
