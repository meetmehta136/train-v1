import React from "react";
import { ArrowLeft, ArrowDownToLine, List, RefreshCcw, Ticket } from "lucide-react";
import { hasBookingDetails } from "../utils/helpers";
import { BookingCard } from "../components/BookingCard";
import { StatusBar } from "../components/StatusBar";

export function MyBookingsPage({ journeyDetails, setActiveView, onViewDetails }) {
  const bookingCount = hasBookingDetails(journeyDetails) ? 1 : 0;

  return (
    <div className="booking-page">
      <StatusBar variant="blue" />
      <header className="bookings-header">
        <div className="bookings-title-row">
          <button aria-label="Back" type="button" onClick={() => setActiveView("home")}>
            <ArrowLeft size={18} />
          </button>
          <h2>My Bookings</h2>
          <div className="booking-tools">
            <ArrowDownToLine size={17} />
            <List size={16} />
          </div>
        </div>
      </header>
      <main className="bookings-content">
        <div className="bookings-tab-row">
          <h3>Upcoming ({1})</h3>
          <RefreshCcw size={14} />
        </div>
        <BookingCard
          journeyDetails={journeyDetails}
          onViewDetails={onViewDetails}
          onBookAgain={() => setActiveView("home")}
        />
      </main>
      <div className="booking-filter">
        <button className="selected" type="button">
          <Ticket size={18} />
          <span>Upcoming</span>
        </button>
        <button type="button">
          <Ticket size={17} />
          <span>Completed</span>
        </button>
        <button type="button">
          <Ticket size={17} />
          <span>Cancelled</span>
        </button>
        <button type="button">
          <Ticket size={17} />
          <span>All</span>
        </button>
      </div>
    </div>
  );
}
