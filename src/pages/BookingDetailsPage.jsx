import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { getTicketValues, formatDetailDateTime, formatPreviewDateTime } from "../utils/helpers";
import { FlipTimer } from "../components/FlipTimer";
import { TicketQrCode } from "../components/TicketQrCode";
import { StatusBar } from "../components/StatusBar";
import "bootstrap-icons/font/bootstrap-icons.css";

export function BookingDetailsPage({ journeyDetails, setActiveView }) {
  const [secondsLeft, setSecondsLeft] = useState(300);
  const {
    detailValue,
    fromStation,
    middleText,
    ticketId,
    toStation
  } = getTicketValues(journeyDetails);

  const passengerName = journeyDetails.passengerName || "Pastagiya Prit Shailendrakumar";
  const mobileNumber = journeyDetails.mobileNumber || "7405228322";
  const journeyDateTime = formatDetailDateTime(
    null,
    journeyDetails.journeyDate,
    journeyDetails.journeyTime
  );
  const adultCount = journeyDetails.adultCount || "1";
  const childCount = journeyDetails.childCount || "0";
  const fare = journeyDetails.fare || "35.00";

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;

  const totalSeconds = 300;
  const progressPercent = ((totalSeconds - secondsLeft) / totalSeconds) * 100;

  useEffect(() => {
    const id = window.setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="details-page">
      <StatusBar variant="blue" />

      {/* ── Blue header ── */}
      <header className="details-header">
        <button aria-label="Back" type="button" onClick={() => setActiveView("bookings")}>
          <ArrowLeft size={18} />
        </button>
        <div>
          <h2>Booking Details</h2>
          <p>Mobile: {mobileNumber}</p>
        </div>
      </header>

      <main className="details-content">

        {/* Thank you line */}
        <p className="thanks-line">Thank You {passengerName}, Happy Journey !</p>

        {/* ── Ticket card ── */}
        <section className="bd-card">

          {/* Accent bar top */}
          <div className="bd-accentbar" />

          {/* Dark timer section */}
          <div className="bd-timerbox">
            {/* Left rail strip */}
            <div className="bd-rail-strip bd-rail-left">INDIAN RAILWAYS</div>

            {/* Center core */}
            <div className="bd-core">
              <div className="bd-timer-label">Dynamic preview will close in</div>

              {/* ── Flip digit countdown ── */}
              <FlipTimer minutes={mins} seconds={secs} />

              <div className="bd-sub">Journey Date &amp; Time</div>
              <div className="bd-dt">{formatPreviewDateTime(journeyDateTime)}</div>
              <div className="bd-rnum">R18602</div>
              <div className="bd-nontransfer">Ticket is Non-Transferable</div>
            </div>

            {/* Right rail strip */}
            <div className="bd-rail-strip bd-rail-right">भारतीय रेल</div>
          </div>

          {/* Accent bar below timer */}
          <div
            className="bd-accentbar-bottom"
            style={{
              background: `linear-gradient(to right, #674ec3 ${progressPercent}%, white ${progressPercent}%)`
            }}
          />

          {/* White details section */}
          <div className="bd-details">

            {/* Journey Ticket + ACTIVE badge */}
            <div className="bd-row1">
              <div>
                <div className="bd-lbl bd-lbl-blue">Journey Ticket</div>
                <div className="bd-val bd-val-bold">{ticketId}</div>
              </div>
              <div className="bd-badge-active">
                <span className="bd-badge-dot" />
                ACTIVE
              </div>
            </div>

            {/* Source / Destination */}
            <div className="bd-two-col">
              <div>
                <div className="bd-lbl">Source</div>
                <div className="bd-val bd-val-bold">{fromStation}</div>
              </div>
              <div className="bd-right">
                <div className="bd-lbl">Destination</div>
                <div className="bd-val bd-val-bold">{toStation}</div>
              </div>
            </div>

            {/* Distance / Passenger */}
            <div className="bd-two-col">
              <div>
                <div className="bd-lbl">Distance</div>
                <div className="bd-val bd-val-bold">{middleText}</div>
              </div>
              <div className="bd-right">
                <div className="bd-lbl">Passenger</div>
                <div className="bd-val bd-val-bold">{adultCount} Adult, {childCount} Child</div>
              </div>
            </div>

            {/* Ticket Type / Train Types */}
            <div className="bd-two-col">
              <div>
                <div className="bd-lbl">Ticket Type</div>
                <div className="bd-val bd-val-bold">JOURNEY</div>
              </div>
              <div className="bd-right">
                <div className="bd-lbl">Train Types</div>
                <div className="bd-val bd-val-bold">{journeyDetails.trainType || "MAIL/EXPRESS"}</div>
              </div>
            </div>

            {/* Class / Fare */}
            <div className="bd-two-col">
              <div>
                <div className="bd-lbl bd-lbl-blue">Class</div>
                <div className="bd-val bd-val-bold">SECOND</div>
              </div>
              <div className="bd-right">
                <div className="bd-lbl bd-lbl-blue">Fare</div>
                <div className="bd-val bd-val-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="10"
                    fill="currentColor"
                    viewBox="0 0 14 14"
                    style={{ marginRight: "2px" }}
                  >
                    <path
                      d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.12 7.956 7.69 6.726 7.69H4v1.1h2.67l3.326 4.15h1.438L8.016 8.79c1.545-.24 2.665-1.15 2.98-2.955H13V4.784h-2.004C10.78 3.93 10.3 3.37 9.664 3.06H13V2H4v1.06z"
                      stroke="currentColor"
                      strokeWidth="0.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {fare}
                </div>
              </div>
            </div>

            {/* Via row */}
            <div className="bd-via-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Left horizontal line */}
                <path d="M3 12h7" />

                {/* Upper dashed curve */}
                <path
                  d="M10 12c0-4 2.5-6.5 6.5-8"
                  strokeDasharray="3 3"
                />

                {/* Upper arrow */}
                <path d="M14.5 2l3 2.5-3 2.5" />

                {/* Lower curve */}
                <path d="M10 12c0 4 2.5 6.5 6.5 8" />

                {/* Lower arrow */}
                <path d="M14.5 18l3 2.5-3 2.5" />
              </svg>
              <span>Via: -------</span>
            </div>

            {/* IR number */}
            <div className="bd-irnum">{journeyDetails.irNumber || "IR24AAAGM0289C1ZP"}</div>
          </div>

          {/* Perforated tear line */}
          <div className="bd-perf">
            <div className="bd-notch bd-notch-left" />
            <div className="bd-notch bd-notch-right" />
          </div>

          {/* Valid note */}
          <div className="bd-validnote">
            *Valid for start of journey within 3 hour or until departure of the first train.
          </div>

          {/* Accent footer bar */}
          <div className="bd-accentbar" />
        </section>

        {/* Refund note */}
        <p className="refund-note">
          Note: This ticket is non refundable. Ticket is stored locally on the device. Please do not change your handset or perform factory reset.
        </p>

        <button className="connecting-button" type="button">Book Connecting Journey</button>
        <div className="book-again-row">
          <button className="book-again-button" type="button">Upgrade to Superfast</button>
          <button className="book-again-button" type="button">Book Again</button>
        </div>

        {/* QR Code — as-is */}
        <TicketQrCode
          value={`${ticketId}|${journeyDateTime}|${fromStation}|${toStation}|${adultCount}|${childCount}`}
        />

        <section className="details-facts">
          <h3>Do you know?</h3>
          <p>IR recovers only 57% of cost of travel on an average.</p>
          <p>This ticket is booked on a personal user ID. It&apos;s sale/purchase is an offence u/s 143 of the Railways Act, 1989</p>
          <p>For enquiry and integrated railway helpline, please dial 139.</p>
        </section>
      </main>
    </div>
  );
}
