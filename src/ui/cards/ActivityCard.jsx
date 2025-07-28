import { Link } from "react-router";
import useGetCities from "../../hooks/home/useCities";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import useAddFavorites from "../../hooks/favorites/useAddFavorites";
import useRemoveFavorites from "../../hooks/favorites/useRemoveFavorites";

export default function ActivityCard({ activity }) {
  const { t } = useTranslation();

  const queryClient = useQueryClient();
  const { addFavorite, isPending: isAddToFavPending } = useAddFavorites();
  const { removeFavorite, isPending: isRemoveFormFavPending } =
    useRemoveFavorites();

  const { data: cities = [] } = useGetCities();
  const city = cities.find((c) => c.id === activity?.city_id);
  const cityName = city ? city.name : "";

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(activity);

    const mutationFn = activity?.is_favorite ? removeFavorite : addFavorite;

    mutationFn(activity.id, {
      onSuccess: () => {
        toast.success(
          t(
            activity?.is_favorite
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
    <Link to={`/activities/${activity.id}`} className="activity-card-link">
      <div className="activity-card">
        <img src={activity.image} alt={activity.title} className="card-img" />
        <div className="card-body">
          <p className="price">يبدأ من {activity.price} ريال</p>
          <p className="meta">
            <i className="fa-solid fa-location-dot ms-1"></i>
            {cityName} | {activity.type}
          </p>
          <h5 className="title">{activity.title}</h5>
          <div className="actions">
            <button className="details-btn">عرض التفاصيل</button>
            <button
              className="like-btn"
              onClick={handleFavorite}
              disabled={isAddToFavPending || isRemoveFormFavPending}
            >
              <i
                className={
                  activity.is_favorite
                    ? "fa-solid fa-heart text-primary"
                    : "fa-regular fa-heart"
                }
              ></i>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
