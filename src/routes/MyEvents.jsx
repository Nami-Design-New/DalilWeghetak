import { useTranslation } from "react-i18next";
import useGetMyEvents from "../hooks/account/useGetMyEvents";
import EventCard from "../ui/cards/EventCard";
import Loader from "../ui/loader/Loader";

export default function MyEvents() {
  const { t } = useTranslation();
  const { data: myEventsData, isLoading } = useGetMyEvents();
  if (isLoading) return <Loader />;
  return (
    <section className="my-events-page ">
      <div className="container">
        <h2 className="page-title">{t("dropdown.myEvents")}</h2>
        <div className="row g-4">
          {myEventsData?.map((event, idx) => (
            <div className="col-md-4" key={idx}>
              <EventCard event={event} cityName={"الرياض"} />
            </div>
          ))}
        </div>
        {myEventsData?.length === 0 && (
          <div className="empty_wrap text-center py-5">
            <img src="/w-icons/nobooking.svg" alt="no-events" />
            <h6 className="mt-3">لا توجد فعاليات مسجلة حتى الآن</h6>
          </div>
        )}
      </div>
    </section>
  );
}
