import React, { useState, useEffect } from "react";
import { Battery, Signal } from "lucide-react";

export function StatusBar({ variant = "default" }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      // The image shows 10:35, so 12-hour or 24-hour is fine. Let's use 24-hour but without AM/PM.
      setTime(`${hours.toString().padStart(2, "0")}:${minutes}`);
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`status-bar ${variant === 'blue' ? 'status-bar-blue' : ''}`}>
      <div className="status-bar-time">{time}</div>
      <div className="status-bar-right">
         <div className="status-network-speed">
          <span className="speed-val">11.6</span>
          <span className="speed-unit">KB/s</span>
        </div>
        <div className="status-volte">Vo<br/>LTE</div>
        <div className="status-signal-group">
          <span className="network-type">4G</span>
          <Signal size={14} strokeWidth={3} className="signal-icon" />
        </div>
        <div className="status-battery">
          
          <span className="battery-level">90</span>
          <div className="battery-icon-outline"></div>
        </div>
      </div>
    </div>
  );
}
