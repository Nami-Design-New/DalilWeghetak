import { useTranslation } from "react-i18next";
import useGetHolidays from "../hooks/holidays/useGetHolidays";
import { Link } from "react-router";
import EventCardLoader from "../ui/loader/EventCardLoader";

export default function AllSeasons() {
  const { t } = useTranslation();
  const { data: seasons = [], isLoading } = useGetHolidays();

  return (
    <section className="all-events-page  py-5">
      <div className="container">
        <h2 className="section-title " style={{ textAlign: "start" }}>
          <span className="text-dark">{t("seasons.titleDark")} </span>
          <span className="text-main">{t("seasons.titleMain")}</span>
        </h2>
        <div className="row g-4">
          {isLoading
            ? Array(4)
                .fill()
                .map((_, i) => (
                  <div className="col-lg-4 col-md-6 p-2" key={i}>
                    <EventCardLoader />
                  </div>
                ))
            : seasons.map((session) => (
                <div className="col-lg-4 col-md-6 p-2" key={session.id}>
                  <Link to={`/seasons/${session.id}`} className="holiday-card">
                    <div className="holiday-image-wrapper">
                      <img
                        src={session.image}
                        alt={session.name}
                        className="holiday-img"
                      />
                    </div>
                    <div className="holiday-info">
                      <h4 className="holiday-name">{session.title}</h4>
                      <p className="holiday-date">
                        {session.from_date} : {session.to_date}
                      </p>
                      <p className="holiday-desc">{session.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
