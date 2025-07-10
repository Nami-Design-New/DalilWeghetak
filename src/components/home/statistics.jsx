import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Statistics() {
  const { t } = useTranslation();

  return (
    <section className="statistics-section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-dark">{t("statistics.titleDark")} </span>
          <span className="text-main">{t("statistics.titleMain")}</span>
        </h2>

        <div className="statistics-grid">
          <div className="stats-cards">
            <div className="card large-card with-pattern">
              <div className="card-content">
                <h3>
                  <span className="highlight">{t("statistics.largeNumber")}</span>{" "}
                  {t("statistics.largeText")}
                </h3>
              </div>
              <div className="card-image">
                <img src="/images/stat.png" alt={t("statistics.imageAlt")} />
              </div>
            </div>

            <div className="card-row">
              <div className="card small-card with-pattern">
                <h3>
                  <span className="highlight">{t("statistics.small1Number")}</span>{" "}
                  {t("statistics.small1Text")}
                </h3>
              </div>

              <div className="card small-card with-pattern">
                <h3>
                  <span className="highlight">{t("statistics.small2Number")}</span>{" "}
                  {t("statistics.small2Text")}
                </h3>
              </div>
            </div>
          </div>

          <div className="stories-card with-pattern">
            <h3>
              <span className="highlight">{t("statistics.storiesNumber")}</span>{" "}
              {t("statistics.storiesText")}
            </h3>
            <ul className="stories-list">
              {t("statistics.stories", { returnObjects: true }).map((story, idx) => (
                <li key={idx}>
                  <span>{`0${idx + 1}`}</span> {story}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
