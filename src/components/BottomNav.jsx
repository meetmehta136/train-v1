import React from "react";
import { Home, WalletCards, UserRound, Menu } from "lucide-react";

export function BottomNav({ activeView, setActiveView }) {
  const items = [
    { label: "Home", Icon: Home, view: "home" },
    { label: "My Bookings", Icon: WalletCards, view: "bookings" },
    { label: "You", Icon: UserRound },
    { label: "Menu", Icon: Menu, view: "menu" }
  ];

  return (
    <nav className="bottom-nav" aria-label="Primary">
      {items.map(({ label, Icon, view }) => (
        <button
          className={view === activeView ? "active" : ""}
          key={label}
          type="button"
          onClick={() => view && setActiveView(view)}
        >
          <Icon size={20} strokeWidth={2.6} />
          <span>{label}</span>
        </button>
      ))}
      <div className="home-indicator" />
    </nav>
  );
}
