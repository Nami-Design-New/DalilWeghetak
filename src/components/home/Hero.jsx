import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <video src="/images/herovideo.mp4" autoPlay loop muted playsInline />
      <div className="overlay">
        <div className="hero-content">
          <h1 className="hero-title">{t("home.hero_title")}</h1>
          <p className="hero-subtitle">{t("home.hero_description")}</p>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <Link to="/experiences" className="btn btn-primary cta-button">
              {t("home.explore")}
            </Link>

            <Link to="/events" className="btn btn-primary cta-button">
              {t("home.bookNow")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
