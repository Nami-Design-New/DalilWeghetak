import React from "react";
import EventCard from "../ui/cards/EventCard";

const myEvents = [
  {
    name: "مهرجان الرياض الصيفي",
    image: "/images/ev1.png",
    price: 350,
    startDate: "22 يوليو 2024",
    endDate: "28 يوليو 2024",
    city: "الرياض",
    type: "مهرجانات",
  },
  {
    name: "أمسية موسيقية مع فرقة نسيم",
    image: "/images/ev2.jpg",
    price: 200,
    startDate: "10 أغسطس 2024",
    endDate: "10 أغسطس 2024",
    city: "الدمام",
    type: "حفلات",
  },
];

export default function MyEvents() {
  return (
    <section className="my-events-page mt-80">
      <div className="container">
        <h1 className="page-title">فعالياتي</h1>
        <div className="row g-4">
          {myEvents.map((event, idx) => (
            <div className="col-md-4" key={idx}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
        {myEvents.length === 0 && (
          <div className="empty_wrap text-center py-5">
            <img src="/icons/calendar.svg" alt="no-events" style={{ width: 80 }} />
            <h6 className="mt-3">لا توجد فعاليات مسجلة حتى الآن</h6>
          </div>
        )}
      </div>
    </section>
  );
}
