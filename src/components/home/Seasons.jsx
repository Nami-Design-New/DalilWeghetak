import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import useGetHolidays from "../../hooks/holidays/useGetHolidays";
import SeasonCard from "../../ui/cards/SeasonCard";

export default function Seasons() {
  const { t } = useTranslation();
  const { data: seasons = [] } = useGetHolidays();

  return (
    <section className="seasons-section">
      <div className="container text-center mb-4">
        <div className="d-flex justify-content-between">
          <div>
            <h2 className="section-title " style={{ textAlign: "start" }}>
              <span className="text-dark">{t("seasons.titleDark")} </span>
              <span className="text-main">{t("seasons.titleMain")}</span>
            </h2>
            <p className="section-subtitle">{t("seasons.subtitle")}</p>
          </div>

          <Link to="/seasons" className="btn btn-main">
            {t("viewAll")}
          </Link>
        </div>

        <div className="seasons-cards">
          {seasons.map((season) => (
            <SeasonCard
              key={season.id}
              season={{
                ...season,
                startDate: season.from_date,
                endDate: season.to_date,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
