import React from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const cities = [
  { name: "الرياض", image: "/images/1.png" },
  { name: "مكة", image: "/images/2.png" },
  { name: "الدمام", image: "/images/3.png" },
  { name: "جدة", image: "/images/4.png" },
  { name: "أبها", image: "/images/1.png" },
];

export default function Destinations() {
  const { t } = useTranslation();

  return (
    <section className="destinations">
      <div className="container">
        <h2 className="section-title">
          <span className="text-dark">{t("destinations.popular")}</span>
          <span className="text-main">{t("destinations.title")}</span>
        </h2>
        <p className="section-subtitle">
          {t("destinations.subtitle")}
        </p>

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
