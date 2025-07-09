import { Link } from "react-router";

const EventCard = ({ event }) => {
  return (
        <Link to={`/event/${event.id}`} className="activity-card-link">
    <div className="event-card">
      <div className="image-wrapper">
        <img src={event.image} alt={event.name} />
        <div className="price-tag">من {event.price} ريال</div>
        <div className="dates">
          <div className="date-item">{event.startDate}</div>
          <div className="date-item">{event.endDate}</div>
        </div>
      </div>

      <div className="event-details">
        <div className="details-row">
          <div>
            <div className="location-type">
              <i className="fa-solid fa-location-dot me-1"></i>
              {event.city} | {event.type}
            </div>
            <h3 className="event-name">{event.name}</h3>
          </div>
          <button className="fav-btn">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
        </Link>

  );
};

export default EventCard;
