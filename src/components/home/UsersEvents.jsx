import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import useGetCities from "../../hooks/home/useCities";
import EventCard from "../../ui/cards/EventCard";
import useGetUsersEvents from "../../hooks/events/useGetUsersEvents";

export default function UsersEvents() {
  const { t } = useTranslation();
  const { lang } = useSelector((state) => state.settings);
  const { data: events = [] } = useGetUsersEvents();
  const { data: cities = [] } = useGetCities();

  return (
    <section className="activities-section" style={{background: "#fff"}}>
      <div className="container ">
        <div className="section-header d-flex justify-content-between">
          <h2 className="section-title">
            {t("usersEvents")}
          </h2>

          <Link to="/user-events" className="btn btn-main">
            {t("viewAll")}
          </Link>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={3}
          style={{padding: "12px"}}
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
    </section>
  );
}
