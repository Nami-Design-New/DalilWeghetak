import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const EventCard = ({ event }) => {
    const { t } = useTranslation();
  
  return (
      <Link to={`/event/${event.id}`} className="activity-card-link">
  <div className="event-card">
   <div className="image-wrapper">
  <div className="dates-vertical">
    <div className="date-item">
      <div className="day">{event.startDate.split(" ")[0]}</div>
      <div className="month">{event.startDate.split(" ")[1]}</div>
      <div className="year">{event.startDate.split(" ")[2]}</div>
    </div>
    <div className="date-item">
      <div className="day">{event.endDate.split(" ")[0]}</div>
      <div className="month">{event.endDate.split(" ")[1]}</div>
      <div className="year">{event.endDate.split(" ")[2]}</div>
    </div>
  </div>

  <img src={event.image} alt={event.name} />

  {/* fav button */}
  <button className="fav-btn">
    <i className="fa-regular fa-heart"></i>
  </button>
</div>


    <div className="event-details">
    <div className="details-row">
  <div>
    <div className="location-type">
      <i className="fa-solid fa-location-dot me-1"></i>
      {event.city} | {event.type}
    </div>
  </div>

  <div className="price-fav d-flex align-items-center gap-3">
    <div className="price">{t("Events.from")}  <span>{event.price}</span>  {t("Events.ryal")}</div>
  </div>
</div>

<h3 className="event-name">{event.name}</h3>

    </div>
  </div>
</Link>

  );
};

export default EventCard;
