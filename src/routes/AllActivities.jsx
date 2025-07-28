import { useTranslation } from "react-i18next";
import ActivityCard from "../ui/cards/ActivityCard";
import useGetEvents from "../hooks/events/useGetEvents";
import EventCardLoader from "../ui/loader/EventCardLoader";

export default function AllActivities() {
  const { t } = useTranslation();

  const { data: activities, isLoading: activityLoading } =
    useGetEvents("activity");

  return (
    <section className="all-events-page  py-5">
      <div className="container">
        <h1 className="page-title">{t("allActivities")}</h1>
        <div className="row g-4">
          {activityLoading
            ? Array(4)
                .fill()
                .map((_, i) => (
                  <div className="col-lg-4 col-md-6 p-2" key={i}>
                    <EventCardLoader />
                  </div>
                ))
            : activities.map((activity) => (
                <div className="col-lg-4 col-md-6 p-2" key={activity.id}>
                  <ActivityCard activity={activity} />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

