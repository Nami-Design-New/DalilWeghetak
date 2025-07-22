import { useTranslation } from "react-i18next";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetEvents from "../../../hooks/events/useGetEvents";
import ActivityCard from "../../../ui/cards/ActivityCard";
import EventCardLoader from "../../../ui/loader/EventCardLoader";
import ActivitiesFilter from "./ActivitiesFilter";
import { useSelector } from "react-redux";

export default function Activities() {
  const { lang } = useSelector((state) => state.settings);
  const { t } = useTranslation();

  const { data: activities, isLoading: activityLoading } =
    useGetEvents("activity");
  console.log(activityLoading);

  return (
    <section className="activities-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-dark">{t("activities.titleDark")}</span>
            <span className="text-main">{t("activities.titleMain")}</span>
          </h2>
        </div>
        <ActivitiesFilter />

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
          {activityLoading
            ? Array(4)
                .fill()
                .map((_, i) => (
                  <SwiperSlide key={i}>
                    <EventCardLoader />
                  </SwiperSlide>
                ))
            : activities.map((activity) => (
                <SwiperSlide key={activity.id} className="SwiperSlide">
                  <ActivityCard activity={activity} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </section>
  );
}
