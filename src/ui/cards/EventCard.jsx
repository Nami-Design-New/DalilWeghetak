import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { toast } from "sonner";
import useAddFavorites from "../../hooks/favorites/useAddFavorites";
import useRemoveFavorites from "../../hooks/favorites/useRemoveFavorites";

const EventCard = ({ event, cityName }) => {
  const { t } = useTranslation();

  const queryClient = useQueryClient();
  const { addFavorite, isPending: isAddToFavPending } = useAddFavorites();
  const { removeFavorite, isPending: isRemoveFormFavPending } =
    useRemoveFavorites();

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(event);

    const mutationFn = event?.is_favorite ? removeFavorite : addFavorite;

    mutationFn(event.id, {
      onSuccess: () => {
        toast.success(
          t(
            event?.is_favorite
              ? "favorites.removedSuccess"
              : "favorites.addedSuccess"
          )
        );
        ["favorites", "event", "activity", "event-details"].forEach((key) =>
          queryClient.invalidateQueries({ queryKey: [key] })
        );
      },
    });
  };

  return (
    <Link to={`/event/${event.id}`} className="activity-card-link">
      <div className="event-card">
        <div className="image-wrapper">
          <div className="dates-vertical">
            <div className="date-item">
              <div className="day">{event.from_date?.split(" ")[0]}</div>
              <div className="month">{event.from_date?.split(" ")[1]}</div>
              <div className="year">{event.from_date?.split(" ")[2]}</div>
            </div>
            <div className="date-item">
              <div className="day">{event.to_date?.split(" ")[0]}</div>
              <div className="month">{event.to_date?.split(" ")[1]}</div>
              <div className="year">{event.to_date?.split(" ")[2]}</div>
            </div>
          </div>

          <img src={event.image} alt={event.title} />

          {/* fav button */}
          <button
            className="fav-btn"
            onClick={handleFavorite}
            disabled={isAddToFavPending || isRemoveFormFavPending}
          >
            <i
              className={
                event.is_favorite
                  ? "fa-solid fa-heart text-primary"
                  : "fa-regular fa-heart"
              }
            ></i>
          </button>
        </div>

        <div className="event-details">
          <div className="details-row">
            <div>
              <div className="location-type">
                <i className="fa-solid fa-location-dot me-1"></i>
                {cityName} | {event.type}
              </div>
            </div>

            <div className="price-fav d-flex align-items-center gap-3">
              <div className="price">
                {t("Events.from")} <span>{event.price}</span> {t("Events.ryal")}
              </div>
            </div>
          </div>

          <h3 className="event-name">{event.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
