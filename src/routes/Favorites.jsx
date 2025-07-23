import { useTranslation } from "react-i18next";
import useGetFavorites from "../hooks/favorites/useGetFavorites";
import useGetCities from "../hooks/home/useCities";
import EventCard from "../ui/cards/EventCard";
import Loader from "../ui/loader/Loader";

export default function Favorites() {
  const { t } = useTranslation();
  const { data: favs, isLoading } = useGetFavorites();
  const { data: cities = [] } = useGetCities();
  if (isLoading) return <Loader />;

  return (
    <section className="all-events-page  py-5">
      <div className="container">
        <h1 className="page-title">{t("Events.allFavs")}</h1>
        <div className="row g-4">
          {favs.length > 0 ? (
            favs.map((fav) => {
              const city = cities.find((c) => c.id === fav.city_id);
              const cityName = city ? city.name : "";

              return (
                <div className="col-md-4" key={fav.id}>
                  <EventCard event={fav} cityName={cityName} />
                </div>
              );
            })
          ) : (
            <div className="empty_wrap text-center py-5">
              <img src="/icons/nobooking.svg" alt="no-events" />
              <h6 className="mt-3">لا توجد فعاليات حتى الآن</h6>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
