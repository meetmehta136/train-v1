import React from "react";

const QR_IMAGE_URL = "https://res.cloudinary.com/nlwdizkk/image/upload/v1789117352/ChatGPT_Image_Sep_11_2026_02_31_13_PM.png";

export function TicketQrCode() {
  return (
    <div className="scanner-grid" aria-label="Ticket QR code">
      <img
        src={QR_IMAGE_URL}
        alt="Ticket QR code"
        draggable={false}
      />
    </div>
  );
}
