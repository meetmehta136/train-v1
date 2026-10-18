import factBridge from "../assets/fact-bridge.jpg";
import factStation from "../assets/fact-station.jpg";
import journeyPlatform from "../assets/journey-platform.jpg";
import journeyReserved from "../assets/journey-reserved.jpg";
import journeyUnreserved from "../assets/journey-unreserved.jpg";
import offerCoach from "../assets/offer-coach.jpg";
import offerFood from "../assets/offer-food.jpg";
import offerMadad from "../assets/offer-madad.jpg";
import offerPnr from "../assets/offer-pnr.jpg";
import offerRefund from "../assets/offer-refund.jpg";
import offerSearch from "../assets/offer-search.jpg";
import offerTrack from "../assets/offer-track.jpg";
import offerWaves from "../assets/offer-waves.jpg";

export const initialJourneyDetails = {
  passengerName: "Pastagiya Prit Shailendrakumar",
  mobileNumber: "7405228322",
  fromStation: "NADIAD JN.",
  toStation: "AHMEDABAD JN.",
  journeyDate: "2026-08-23",
  journeyTime: "03:04",
  trainNumber: "",
  via: "46 km",
  adultCount: "1",
  childCount: "0",
  trainClassType: "SECOND",
  trainType: "MAIL/EXPRESS",
  fare: "35.00",
  ticketTransactionId: "X51KEFQ001"
};

export const formFields = [
  { name: "passengerName", label: "Passenger Name", required: true },
  { name: "mobileNumber", label: "Mobile Number", type: "tel", required: true },
  { name: "fromStation", label: "From Station", required: true },
  { name: "toStation", label: "To Station", required: true },
  { name: "journeyDate", label: "Journey Date", placeholder: "2026-08-25", required: true },
  { name: "journeyTime", label: "Journey Time", placeholder: "21:17", required: true },
  { name: "via", label: "Via" },
  { name: "adultCount", label: "Adult Count", type: "number", required: true },
  { name: "childCount", label: "Child Count", type: "number", required: true },
  {
    name: "trainType",
    label: "Train Type",
    type: "select",
    options: ["MAIL/EXPRESS", "SUPERFAST"],
    required: true
  },
  { name: "fare", label: "Fare", type: "number" },
  { name: "ticketTransactionId", label: "Ticket/Transaction ID" }
];

export const journeyCards = [
  { label: "Reserved", image: journeyReserved },
  { label: "Unreserved", image: journeyUnreserved },
  { label: "Platform", image: journeyPlatform }
];

export const offerings = [
  { label: "Search\nTrains", image: offerSearch },
  { label: "PNR\nStatus", image: offerPnr },
  { label: "Coach\nPosition", image: offerCoach },
  { label: "Track Your\nTrain", image: offerTrack },
  { label: "Order\nFood", image: offerFood },
  { label: "File\nRefund", image: offerRefund },
  { label: "Rail\nMadad", image: offerMadad },
  { label: "Go To\nWAVES", image: offerWaves }
];

export const facts = [
  {
    image: factBridge,
    text: "Noney Bridge is going to be world's tallest railway bridge pier at a height of 141 meters."
  },
  {
    image: factStation,
    text: "Shree Siddharoodha Swamiji Railway Station Hubballi is world's longest Railway Platform with length of 1505 met..."
  },
  {
    image: factBridge,
    text: "RailOne brings train information, booking updates and station services into one place."
  }
];
