import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetHighLights from "../../hooks/hightlights/useGetHighLights";
import ExperienceCard from "../cards/ExperienceCard";
import { HighlightsLoader } from "../loader/HighlightsLoader";

export default function HighLightActivities({ city }) {
  const { data: highlights, isLoading } = useGetHighLights();
  return (
    <>
      {highlights?.length > 0 ? (
        <>
          <div className="section-header d-flex justify-content-between align-items-center mt-5 mb-3">
            <h2 className="section-title">
              <span className="text-dark">تجارب </span>
              <span className="text-main">تستحق التجربة في {city.name}</span>
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
                      <HighlightsLoader />
                    </SwiperSlide>
                  ))
              : highlights.map((exp) => (
                  <SwiperSlide key={exp.id}>
                    <ExperienceCard experience={exp} city={city} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </>
      ) : null}
    </>
  );
}
