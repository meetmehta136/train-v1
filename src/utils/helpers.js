export function formatDisplayDate(dateValue) {
  if (!dateValue) return "Mon, 24 Aug 26";

  const dateOnly = dateValue.includes(" ") ? dateValue.split(" ")[0] : dateValue;
  const date = new Date(`${dateOnly}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateValue;

  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "2-digit"
  }).replace("Sept", "Sep");
}

export function formatDetailDateTime(dateTimeValue, fallbackDateValue, fallbackTimeValue) {
  const sourceValue = dateTimeValue || [fallbackDateValue, fallbackTimeValue].filter(Boolean).join(" ");
  if (!sourceValue) return "23/08/2026 03:04";

  let [datePart, timePart = "03:04"] = sourceValue.split(" ");
  if (datePart.includes(":")) {
    timePart = datePart;
    datePart = fallbackDateValue || "2026-08-23";
  }

  const normalizedDate = datePart.includes("-")
    ? datePart.split("-").reverse().join("/")
    : datePart;

  return `${normalizedDate} ${timePart.slice(0, 5)}`;
}

export function formatPreviewDateTime(detailDateTime) {
  const [datePart, timePart = "03:04"] = detailDateTime.split(" ");
  const [day, month, year] = datePart.split("/");
  const monthName = new Date(`${year}-${month}-01T00:00:00`)
    .toLocaleDateString("en-GB", { month: "short" })
    .replace("Sept", "Sep");

  return `${day} ${monthName} ${year}, ${timePart}`;
}

export function isReservedBooking(trainClassType) {
  const normalizedType = trainClassType.trim().toLowerCase();
  return normalizedType === "reserved" || normalizedType.startsWith("reserved ");
}

export function hasBookingDetails(journeyDetails) {
  return Object.entries(journeyDetails).some(([key, value]) => {
    if (key === "adultCount" || key === "childCount") return false;
    return String(value).trim() !== "";
  });
}

export function getTicketValues(journeyDetails, defaults = {}) {
  const hasDetails = hasBookingDetails(journeyDetails);
  const type = journeyDetails.trainClassType || defaults.type || "Unreserved";
  const isReserved = isReservedBooking(type);
  const idPrefix = isReserved ? "PNR" : "UTS";
  const ticketId = journeyDetails.ticketTransactionId || (hasDetails ? "PENDING" : defaults.ticketId || "X51JEFR03F");
  const fromStation = journeyDetails.fromStation || defaults.fromStation || "NADIAD JN.";
  const toStation = journeyDetails.toStation || defaults.toStation || "SURAT";
  const journeyDate = formatDisplayDate(journeyDetails.journeyDate);
  const bookingDate = formatDisplayDate(journeyDetails.journeyDate);
  const middleText = journeyDetails.via || journeyDetails.journeyTime || defaults.middleText || "183 km";

  return {
    bookingDate,
    detailLabel: isReserved ? "Train No." : "Ticket Type",
    detailValue: isReserved ? journeyDetails.trainNumber || defaults.detailValue || "22946" : defaults.detailValue || "JOURNEY",
    fromStation,
    idPrefix,
    isReserved,
    journeyDate,
    middleText,
    ticketId,
    toStation,
    type
  };
}
