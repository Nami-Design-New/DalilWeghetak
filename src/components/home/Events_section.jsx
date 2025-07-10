import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import EventCard from "../../ui/cards/EventCard";

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

const JeddahEvents = () => {
    const { t } = useTranslation();
const lang = localStorage.getItem("lang") || "ar";

  return (
    <section className="jeddah-events">
      <div className="container">
        <div className="events-text col-md-4 mb-4 mb-md-0">
          <span className="subtext">{t("jeddahEvents.label")}</span>
          <h2 className="title">{t("jeddahEvents.title")}</h2>
          <p className="description">{t("jeddahEvents.description")}</p>
          <Link to="/events" className="btn explore-btn">
            {t("jeddahEvents.button")} <i className="fal fa-arrow-right"></i>
          </Link>
        </div>

        <div className="events-slider col-md-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            dir={lang === "ar" ? "rtl" : "ltr"} 
            key={lang} 
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {events.map((event, idx) => (
              <SwiperSlide key={idx}>
                <EventCard event={event} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default JeddahEvents;
