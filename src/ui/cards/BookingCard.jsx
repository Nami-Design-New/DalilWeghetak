import { Link } from "react-router";
import { formatDate } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

export default function BookingCard({ booking }) {
  const { t } = useTranslation();
  const event = booking?.event;

  return (
    <div className="booking-card shadow-sm">
      <Link to={`/events/${event.id}`} className="image-section">
        <img
          src={event.image}
          alt={event.title}
          className="img-fluid rounded-top"
        />
        <div className="ticket-id">
          {t("ticket.ticket_id")} <span>{booking.id}</span>
        </div>
        <div className="check-icon">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <div className="overlay-text">
          <h5 className="title">{event.title}</h5>
          <p className="reserve-date">
            <span>{t("ticket.reserved_at")}</span>
            <span>{formatDate(booking.created_at)}</span>
          </p>
        </div>
      </Link>

      <div className="details-section">
        <div className="">
          <div className="small">{t("ticket.people_count")}</div>
          <div className="title">{booking.quantity}</div>
        </div>
        <div className="">
          <div className="small">{t("ticket.date")}</div>
          <div className="title">{event.from_date}</div>
        </div>
        <div className="">
          <div className="small">{t("ticket.time")}</div>
          <div className="title">{event.from_time}</div>
        </div>
      </div>
    </div>
  );
}

