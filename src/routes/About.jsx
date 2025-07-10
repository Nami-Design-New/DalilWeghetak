import React from "react";
import { useTranslation } from "react-i18next";
import Statistics from "../components/home/statistics";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <>
    <section className="about-section">
      <div className="container">
        <div className="about-text">
          <span className="subtitle">{t("about.subtitle")}</span>
          <h2 className="title">
            {t("about.titleStart")} <span className="highlight">{t("about.titleHighlight")}</span> {t("about.titleEnd")}
          </h2>
          <p className="desc">{t("about.desc1")}</p>
          <p className="desc">{t("about.desc2")}</p>

          <div className="features">
            <p><i className="fas fa-check-circle"></i> <strong>20+</strong> {t("about.feature1")}</p>
            <p><i className="fas fa-check-circle"></i> {t("about.feature2Start")} <strong>150</strong> {t("about.feature2End")}</p>
          </div>
        </div>

        <div className="about-image">
          <div className="image-wrapper">
            <span className="dot-pattern"></span>
            <img src="/images/about2.jpg" alt={t("about.imageAlt")} loading="lazy" />
            <div className="bg-square"></div>
          </div>
        </div>
      </div>
    </section>
<Statistics />

    </>
  );
}
