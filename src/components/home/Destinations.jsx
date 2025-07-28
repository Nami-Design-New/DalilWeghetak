import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import useGetCities from "../../hooks/home/useCities";

export default function Destinations() {
  const { t } = useTranslation();
  const { data } = useGetCities();

  const { lang } = useSelector((state) => state.settings);

  const cities = data || [];

  return (
    <section className="destinations">
      <div className="container">
        <h2 className="section-title">
          <span className="text-dark">{t("destinations.popular")}</span>
          <span className="text-main">{t("destinations.title")}</span>
        </h2>
        <p className="section-subtitle">{t("destinations.subtitle")}</p>

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
            1200: { slidesPerView: 4 },
          }}
        >
          {cities.map((city, index) => (
            <SwiperSlide key={index}>
              <Link
                to={`/destination/${encodeURIComponent(city.id)}`}
                className={`destination ${index === 0 ? "big" : ""}`}
              >
                <img src={city.image} alt={city.name} />
                <div className="card-overlay">
                  <i className="fa-solid fa-location-dot me-1 location-icon"></i>
                  <span className="location-name">{city.name}</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
