import { Swiper, SwiperSlide } from "swiper/react";
import useGetEvents from "../../hooks/events/useGetEvents";
import { Autoplay } from "swiper/modules";
import EventCard from "../cards/EventCard";
import EventCardLoader from "../loader/EventCardLoader";

export default function DestinationsEvents({ city }) {
  const { data: events, isLoading } = useGetEvents();

  return (
    <>
      {events?.length ? (
        <>
          <div className="section-header d-flex justify-content-between align-items-center mt-5 mb-3">
            <h2 className="section-title">
              <span className="text-dark">فعاليات </span>
              <span className="text-main">تُقام في {city.name}</span>
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={15}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
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
              : events.map((event) => (
                  <SwiperSlide key={event.id}>
                    <EventCard
                      event={{
                        id: event.id,
                        name: event.title,
                        image: event.image,
                        price: event.price,
                        startDate: event.from_date,
                        endDate: event.to_date,
                        city: city?.name,
                        type: event.type,
                      }}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>
        </>
      ) : null}
    </>
  );
}
