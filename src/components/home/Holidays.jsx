import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const holidays = [
  {
    id: 1,
    name: "اليوم الوطني",
    date: "23 سبتمبر 2025",
    description: "احتفال باليوم الوطني للمملكة",
    image: "/images/h1.png",
  },
  {
    id: 2,
    name: "عيد الفطر",
    date: "10 أبريل 2025",
    description: "احتفال بانتهاء شهر رمضان",
    image: "/images/h2.png",
  },
  {
    id: 3,
    name: "عيد الأضحى",
    date: "15 يونيو 2025",
    description: "احتفال بعيد الأضحى المبارك",
    image: "/images/h1.png",
  },
];

export default function Holidays() {
    const { t } = useTranslation();

  return (
    <section className="holidays-section">
      <div className="container text-center mb-4">
        <h2 className="section-title">
          <span className="text-dark">{t("holidays.titleDark")} </span>
          <span className="text-main">{t("holidays.titleMain")}</span>
        </h2>
        <p className="section-subtitle">{t("holidays.subtitle")}</p>
      </div>

      <div className="container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {holidays.map((holiday) => (
            <SwiperSlide key={holiday.id}>
              <div className="holiday-card">
                <div className="holiday-image-wrapper">
                  <img src={holiday.image} alt={holiday.name} className="holiday-img" />
                </div>
                <div className="holiday-info">
                  <h4 className="holiday-name">{holiday.name}</h4>
                  <p className="holiday-date">{holiday.date}</p>
                  <p className="holiday-desc">{holiday.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
