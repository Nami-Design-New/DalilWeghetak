import { useTranslation } from "react-i18next";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetsessions from "../../hooks/sessions/useGetsessions";
import HolidayLoader from "../../ui/loader/HolidayLoader";

export default function Holidays() {
  const { t } = useTranslation();
  const lang = localStorage.getItem("lang") || "ar";

  const { sessions, isLoading } = useGetsessions();

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
          dir={lang === "ar" ? "rtl" : "ltr"}
          key={lang}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {isLoading
            ? Array(2)
                .fill()
                .map((_, i) => (
                  <SwiperSlide key={i}>
                    <HolidayLoader />
                  </SwiperSlide>
                ))
            : sessions.map((session) => (
                <SwiperSlide key={session.id}>
                  <div className="holiday-card">
                    <div className="holiday-image-wrapper">
                      <img
                        src={session.image}
                        alt={session.name}
                        className="holiday-img"
                      />
                    </div>
                    <div className="holiday-info">
                      <h4 className="holiday-name">{session.title}</h4>
                      <p className="holiday-date">
                        {session.from_date} : {session.to_date}
                      </p>
                      <p className="holiday-desc">{session.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </section>
  );
}
