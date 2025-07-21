import { useTranslation } from "react-i18next";
import SeasonCard from "../../ui/cards/SeasonCard";
import useGetSeasons from "../../hooks/home/useGetSeasons";

export default function Seasons() {
  const { t } = useTranslation();
  const { data: seasons = [], isLoading } = useGetSeasons();

  return (
    <section className="seasons-section">
      <div className="container text-center mb-4">
        <h2 className="section-title">
          <span className="text-dark">{t("seasons.titleDark")} </span>
          <span className="text-main">{t("seasons.titleMain")}</span>
        </h2>
        <p className="section-subtitle">{t("seasons.subtitle")}</p>

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
