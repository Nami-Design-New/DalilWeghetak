import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useGetCities from "../../hooks/home/useCities";
import EventCard from "../../ui/cards/EventCard";
import useGetEvents from "../../hooks/events/useGetEvents";

const JeddahEvents = () => {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.settings);
  const { data: events = [] } = useGetEvents();
  const { data: cities = [] } = useGetCities();

  return (
    <section className="events">
      <div className="container">
        <div className="events-text col-md-4 mb-3 mb-md-0">
          <h2 className="title">{t("Events.title")}</h2>
          <p className="description">{t("Events.description")}</p>
          <Link to="/events" className="btn explore-btn">
            {t("Events.button")} <i className="fal fa-arrow-left"></i>
          </Link>
        </div>

        <div className="events-slider col-md-9">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
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
            {events.map((event) => {
              const city = cities.find((c) => c.id === event.city_id);
              const cityName = city ? city.name : "";

              return (
                <SwiperSlide key={event.id}>
                  <EventCard event={event} cityName={cityName} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default JeddahEvents;
