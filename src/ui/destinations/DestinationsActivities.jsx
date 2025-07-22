import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ActivityCard from "../cards/ActivityCard";
import { useSelector } from "react-redux";
import useGetEvents from "../../hooks/events/useGetEvents";
import EventCardLoader from "../loader/EventCardLoader";

export default function DestinationsActivities({ city }) {
  const { lang } = useSelector((state) => state.settings);
  const { data: events, isLoading } = useGetEvents("activity");

  return (
    <>
      {events?.length ? (
        <>
          <div className="section-header d-flex justify-content-between align-items-center mb-3">
            <h2 className="section-title">
              <span className="text-dark">أنشطة </span>
              <span className="text-main">تقوم بها في {city.name}</span>
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={15}
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
              : events.map((act) => (
                  <SwiperSlide key={act.id}>
                    <ActivityCard activity={act} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </>
      ) : null}
    </>
  );
}
