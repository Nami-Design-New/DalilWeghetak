import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import useGetHolidayDetails from "../hooks/holidays/useGetHolidayDetails";
import Loader from "../ui/loader/Loader";

export default function SessionDetails() {
  const { id } = useParams();
  const { data: session, isLoading, error } = useGetHolidayDetails(id);
  const { t } = useTranslation();

  if (isLoading) return <Loader />;
  return (
    <section className="session-details-section">
      <div className="session-banner">
        <img
          src={session.image}
          alt={session.title}
          className="banner-img"
          loading="lazy"
        />
        <div className="banner-overlay">
          <h1 className="banner-title">{session.title}</h1>
          <span className="session-date">
            <i className="fas fa-calendar-alt"></i> {session.from_date} -{" "}
            {session.to_date}
          </span>
        </div>
      </div>

      <div className="container">
        <div className="session-content">
          <p className="session-description">{session.description}</p>
        </div>

        {session.details?.length > 0 && (
          <div className="session-sub-details">
            <h3 className="sub-details-title">{t("seasons.title")}</h3>
            <div className="details-list">
              {session.details.map((detail) => (
                <div className="detail-item" key={detail.id}>
                  {detail.image && (
                    <img
                      src={detail.image}
                      alt={detail.title}
                      className="detail-img"
                      loading="lazy"
                    />
                  )}
                  <div className="detail-text">
                    <h5 className="detail-title">{detail.title}</h5>
                    <p className="detail-description">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
