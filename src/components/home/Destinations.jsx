import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import useGetCities from "../../hooks/home/useCities";

export default function Destinations() {
  const { t } = useTranslation();
  const { data } = useGetCities();

  const cities = data || [];

  return (
    <section className="destinations">
      <div className="container">
        <h2 className="section-title">
          <span className="text-dark">{t("destinations.popular")}</span>
          <span className="text-main">{t("destinations.title")}</span>
        </h2>
        <p className="section-subtitle">{t("destinations.subtitle")}</p>

        <div className="destinations-grid mt-4">
          {cities.map((city, index) => (
            <Link
              to={`/destination/${encodeURIComponent(city.name)}`}
              key={index}
              className={`destination ${index === 0 ? "big" : ""}`}
            >
              <img src={city.image} alt={city.name} />
              <div className="card-overlay">
                <i className="fa-solid fa-location-dot me-1 location-icon"></i>
                <span className="location-name">{city.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
