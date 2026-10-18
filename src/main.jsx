import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import { initialJourneyDetails } from "./data/constants";
import { Header } from "./components/Header";
import { StatusBar } from "./components/StatusBar";
import { BottomNav } from "./components/BottomNav";
import { HomePage } from "./pages/HomePage";
import { JourneyForm } from "./pages/JourneyForm";
import { MyBookingsPage } from "./pages/MyBookingsPage";
import { BookingDetailsPage } from "./pages/BookingDetailsPage";

const STORAGE_KEY = "railone_journey_details";

function loadSavedDetails() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return { ...initialJourneyDetails, ...JSON.parse(saved) };
  } catch (_) {}
  return initialJourneyDetails;
}

function App() {
  const [activeView, setActiveView] = useState("home");
  const [journeyDetails, setJourneyDetails] = useState(loadSavedDetails);

  function handleSetJourneyDetails(updater) {
    setJourneyDetails((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch (_) {}
      return next;
    });
  }

  return (
    <main className="phone-shell">
      <StatusBar />
      <Header />
      <div className="scroll-hint" />
      {activeView === "menu" ? (
        <JourneyForm
          journeyDetails={journeyDetails}
          setJourneyDetails={handleSetJourneyDetails}
        />
      ) : activeView === "bookings" ? (
        <MyBookingsPage
          journeyDetails={journeyDetails}
          setActiveView={setActiveView}
          onViewDetails={() => setActiveView("details")}
        />
      ) : activeView === "details" ? (
        <BookingDetailsPage
          journeyDetails={journeyDetails}
          setActiveView={setActiveView}
        />
      ) : (
        <HomePage
          journeyDetails={journeyDetails}
          onViewDetails={() => setActiveView("details")}
        />
      )}
      {activeView !== "bookings" && activeView !== "details" && (
        <BottomNav activeView={activeView} setActiveView={setActiveView} />
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
