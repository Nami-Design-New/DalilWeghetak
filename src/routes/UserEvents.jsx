import { useTranslation } from "react-i18next";
import useGetCities from "../hooks/home/useCities";
import EventCard from "../ui/cards/EventCard";
import Loader from "../ui/loader/Loader";
import useGetUsersEvents from "../hooks/events/useGetUsersEvents";
import TopFilter from "../components/map/TopFilter";

export default function UserEvents() {
  const { t } = useTranslation();
  const { data: events = [], isLoading: isEventsLoading } = useGetUsersEvents();

  const { data: cities = [], isLoading: isCitiesLoading } = useGetCities();

  if (isEventsLoading || isCitiesLoading) return <Loader />;

  return (
    <section className="all-events-page  py-5">
      <div className="container">
        <h1 className="page-title">{t("Events.button")}</h1>
        <TopFilter />

        <div className="row g-4">
          {events.map((event) => {
            const city = cities.find((c) => c.id === event.city_id);
            const cityName = city ? city.name : "";

            return (
              <div className="col-md-4" key={event.id}>
                <EventCard event={event} cityName={cityName} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
