import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import useGetsessions from "../hooks/sessions/useGetsessions";
import EventCardLoader from "../ui/loader/EventCardLoader";

export default function Holidays() {
  const { t } = useTranslation();
  const { sessions, isLoading } = useGetsessions();

  return (
    <section className="all-events-page  py-5">
      <div className="container">
        <h1 className="page-title">{t("allSessions")}</h1>
        <div className="row g-4">
          {isLoading
            ? Array(4)
                .fill()
                .map((_, i) => (
                  <div className="col-lg-4 col-md-6 p-2" key={i}>
                    <EventCardLoader />
                  </div>
                ))
            : sessions.map((seseon) => (
                <div className="col-lg-4 col-md-6 p-2 m-0" key={seseon.id}>
                  <Link to={`/holidays/${seseon.id}`} className="holiday-card">
                    <div className="holiday-image-wrapper">
                      <img
                        src={seseon.image}
                        alt={seseon.name}
                        className="holiday-img"
                      />
                    </div>
                    <div className="holiday-info">
                      <h4 className="holiday-name">{seseon.title}</h4>
                      <p className="holiday-date">
                        {seseon.from_date} : {seseon.to_date}
                      </p>
                      <p className="holiday-desc">{seseon.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
