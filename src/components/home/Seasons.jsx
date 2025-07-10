import React from "react";
import { useTranslation } from "react-i18next";

const seasons = [
  {
    id: 1,
    title: "مواسم الرياض",
    image: "/images/s1.png",
    startDate: "01 مايو 2025",
    endDate: "12 أكتوبر 2025",
  },
  {
    id: 2,
    title: "لحظات العلا",
    image: "/images/s2.png",
    startDate: "01 مايو 2025",
    endDate: "12 أكتوبر 2025",
  },
  {
    id: 3,
    title: "مدل بيست",
    image: "/images/s3.png",
    startDate: "01 أكتوبر 2025",
    endDate: "12 أكتوبر 2025",
  },
];

export default function Seasons() {
  const { t } = useTranslation();

  return (
    <section className="seasons-section">
      <div className="container mb-4">
        <h2 className="section-title">
          <span className="text-dark">{t("seasons.titleDark")} </span>
          <span className="text-main">{t("seasons.titleMain")}</span>
        </h2>
        <p className="section-subtitle">{t("seasons.subtitle")}</p>
   
      <div className="seasons-cards">
        {seasons.map((season) => (
          <div className="season-card" key={season.id}>
            <img src={season.image} alt={season.title} className="season-img" />
            <div className="season-info">
              <p className="season-date">
                {season.startDate} - {season.endDate}
              </p>
              <h5 className="season-title">{season.title}</h5>
            </div>
          </div>
        ))}
      </div>
         </div>

    </section>
  );
}
