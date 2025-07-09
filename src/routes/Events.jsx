import React from "react";
import EventCard from "../ui/cards/EventCard";

const events = [
  {
    id:"1",
    name: "متحف مركز طارق عبد الحكيم",
    image: "/images/ev1.png",
    price: 500,
    startDate: "20 يوليو 2024",
    endDate: "30 يوليو 2024",
    city: "جدة",
    type: "مهرجانات",
  },
  {
    id:"2",
    name: "اكتشف عراقه المملكه وحاضرها المزدهر",
    image: "/images/ev2.jpg",
    price: 300,
    startDate: "5 أغسطس 2024",
    endDate: "10 أغسطس 2024",
    city: "جدة",
    type: "حفلات",
  },
  {
    id:"3",
    name: "موسم جدة",
    image: "/images/ev1.png",
    price: 250,
    startDate: "15 سبتمبر 2024",
    endDate: "25 سبتمبر 2024",
    city: "جدة",
    type: "فعاليات",
  },
  {
    id:"4",
    name: "حفلات الصيف",
    image: "/images/ev2.jpg",
    price: 450,
    startDate: "10 يوليو 2024",
    endDate: "20 يوليو 2024",
    city: "جدة",
    type: "حفلات",
  },
];

const AllEvents = () => {
  return (
    <section className="all-events-page mt-80 ">
      <div className="container"> 
        <h1 className="page-title">جميع فعاليات </h1>
        <div className="row g-4">
          {events.map((event, idx) => (
            <div className="col-md-4" key={idx}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllEvents;
