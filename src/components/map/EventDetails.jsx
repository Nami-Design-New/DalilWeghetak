import { Link } from "react-router";

export default function EventDetails({ activeEvent, t }) {
  return (
    <div className="event_details">
      <div className="image">
        <img src={activeEvent.image} alt="event" />
        <div className="price">
          {t("startsFrom")} {activeEvent.price} {t("sar")}
        </div>
      </div>
      <div className="content">
        <h3>{activeEvent.title}</h3>
        <p>{activeEvent.description}</p>

        <ul>
          <li>
            <i className="fa-regular fa-calendar" />
            <div>
              <h6>{t("from")}:</h6>
              {activeEvent.from_date}
            </div>
          </li>

          <li>
            <i className="fa-regular fa-calendar" />
            <div>
              <h6>{t("to")}:</h6>
              {activeEvent.to_date}
            </div>
          </li>

          <li>
            <i className="fa-regular fa-clock" />
            <div>
              <h6>{t("fromTime")}:</h6>
              {activeEvent.from_time}
            </div>
          </li>

          <li>
            <i className="fa-regular fa-clock" />
            <div>
              <h6>{t("toTime")}:</h6>
              {activeEvent.to_time}
            </div>
          </li>
        </ul>

        <Link to={`/events/${activeEvent.id}`}>{t("showDetails")}</Link>
      </div>
    </div>
  );
}
