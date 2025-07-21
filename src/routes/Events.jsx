import { useTranslation } from "react-i18next";
import useGetEvents from "../hooks/events/useGetEvents";
import useGetCities from "../hooks/home/useCities";
import EventCard from "../ui/cards/EventCard";
import Loader from "../ui/loader/Loader";

const AllEvents = () => {
  const { t } = useTranslation();
  const { data: events = [], isLoading: isEventsLoading } = useGetEvents();

  const { data: cities = [], isLoading: isCitiesLoading } = useGetCities();

  if (isEventsLoading || isCitiesLoading) return <Loader />;

  return (
    <section className="all-events-page mt-80 py-5">
      <div className="container">
        <h1 className="page-title">{t("Events.button")}</h1>
        <div className="row g-4">
          {events.map((event) => {
            const city = cities.find((c) => c.id === event.city_id);
            const cityName = city ? city.name : "";

            return (
              <div className="col-md-4" key={event.id}>
                <EventCard
                  event={{
                    id: event.id,
                    name: event.title,
                    image: event.image,
                    price: event.price,
                    startDate: event.from_date,
                    endDate: event.to_date,
                    city: cityName,
                    type: event.type,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllEvents;
