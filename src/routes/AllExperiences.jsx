import { useTranslation } from "react-i18next";
import useGetCities from "../hooks/home/useCities";
import useGetHighLights from "../hooks/hightlights/useGetHighLights";
import EventCardLoader from "../ui/loader/EventCardLoader";
import ExperienceCard from "../ui/cards/ExperienceCard";

export default function AllExperiences() {
  const { t } = useTranslation();
  const { data: highlights, isLoading } = useGetHighLights();
  const { data: cities = [] } = useGetCities();

  return (
    <section className="all-events-page  py-5">
      <div className="container">
        <h1 className="page-title">{t("allExperiences")}</h1>
        <div className="row g-4">
          {isLoading
            ? Array(4)
                .fill()
                .map((_, i) => (
                  <div className="col-lg-4 col-md-6 p-2" key={i}>
                    <EventCardLoader />
                  </div>
                ))
            : highlights.map((exp) => {
                const city = cities.find(
                  (c) => Number(c.id) === Number(exp.city_id)
                );

                return (
                  <div className="col-lg-4 col-md-6 p-2" key={exp.id}>
                    <ExperienceCard experience={exp} city={city} />
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
}
