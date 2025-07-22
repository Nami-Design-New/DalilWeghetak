import { formatDate } from "../../utils/helpers";

export default function BookingCard({ booking }) {
  const event = booking?.event;

  return (
    <div className="booking-card shadow-sm">
      <div className="image-section">
        <img
          src={event.image}
          alt={event.title}
          className="img-fluid rounded-top"
        />
        <div className="ticket-id">
          TICKET ID: <span>{booking.id}</span>
        </div>
        <div className="check-icon">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <div className="overlay-text">
          <h5 className="title">{event.title}</h5>
          <p className="reserve-date">
            <span>تم الحجز بتاريخ</span>
            <span>{formatDate(booking.created_at)}</span>
          </p>
        </div>
      </div>

      <div className="details-section">
        <div className="">
          <div className="small">عدد الأفراد</div>
          <div className="title">{booking.quantity}</div>
        </div>
        <div className="">
          <div className="small">التاريخ</div>
          <div className="title">{event.from_date}</div>
        </div>
        <div className="">
          <div className="small">التوقيت</div>
          <div className="title">{event.from_time}</div>
        </div>
      </div>
    </div>
  );
}
