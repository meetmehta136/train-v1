import React from "react";
import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="app-header">
      <button className="round-button language" aria-label="Language" type="button">
        <span className="lang-en">A</span>
        <span className="lang-hi">अ</span>
      </button>
      <h1 className="brand">
        Ra<span className="brand-i">i</span>l<span className="brand-strong">One</span>
      </h1>
      <button className="round-button notification" aria-label="Notifications" type="button">
        <Bell size={18} strokeWidth={2.2} />
        <span>15</span>
      </button>
    </header>
  );
}
