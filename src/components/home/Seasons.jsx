import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";

const seasons = [
  {
    id: 1,
    title: "مواسم الرياض",
    image: "/images/s1.png",
    startDate: "01 مايو 2025",
    endDate: "12 أكتوبر 2025",
  },
  {
    id: 2,
    title: "لحظات العلا",
    image: "/images/s2.png",
    startDate: "01 مايو 2025",
    endDate: "12 أكتوبر 2025",
  },
  {
    id: 3,
    title: "مدل بيست",
    image: "/images/s3.png",
    startDate: "01 أكتوبر 2025",
    endDate: "12 أكتوبر 2025",
  },
   {
    id: 4,
    title: "مدل بيست",
    image: "/images/s3.png",
    startDate: "01 أكتوبر 2025",
    endDate: "12 أكتوبر 2025",
  },
];

export default function Seasons() {
    const { t } = useTranslation();
const lang = localStorage.getItem("lang") || "ar";

  return (
    <section className="seasons-section">
      <div className="container text-center mb-4">
          <h2 className="section-title">
          <span className="text-dark">{t("seasons.titleDark")} </span>
          <span className="text-main">{t("seasons.titleMain")}</span>
        </h2>
        <p className="section-subtitle">{t("seasons.subtitle")}</p>
      </div>

      <div className="container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
           dir={lang === "ar" ? "rtl" : "ltr"} 
            key={lang} 
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {seasons.map((season) => (
            <SwiperSlide key={season.id}>
              <div className="season-card text-center">
                <img src={season.image} alt={season.title} className="season-img" />
                <p className="season-date">
                  {season.startDate} - {season.endDate}
                </p>
                <h5 className="season-title">{season.title}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
