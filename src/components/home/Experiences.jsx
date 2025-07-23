import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetHighLights from "../../hooks/hightlights/useGetHighLights";
import ExperienceCard from "../../ui/cards/ExperienceCard";
import EventCardLoader from "../../ui/loader/EventCardLoader";
import useGetCities from "../../hooks/home/useCities";

export default function Experiences() {
  const { lang } = useSelector((state) => state.settings);
  const { t } = useTranslation();
  const { data: highlights, isLoading } = useGetHighLights();
  const { data: cities = [] } = useGetCities();

  return (
    <section className="activities-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-dark">{t("exp.titleDark")}</span>
            <span className="text-main">{t("exp.titleMain")}</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={5}
          slidesPerView={4}
          loop={true}
          dir={lang === "ar" ? "rtl" : "ltr"}
          key={lang}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {isLoading
            ? Array(4)
                .fill()
                .map((_, i) => (
                  <SwiperSlide key={i}>
                    <EventCardLoader />
                  </SwiperSlide>
                ))
            : highlights.map((exp) => {
                const city = cities.find(
                  (c) => Number(c.id) === Number(exp.city_id)
                );

                return (
                  <SwiperSlide key={exp.id} className="SwiperSlide">
                    <ExperienceCard experience={exp} city={city} />
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
    </section>
  );
}
