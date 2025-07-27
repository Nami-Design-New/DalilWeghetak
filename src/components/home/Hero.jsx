import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import useGetBanners from "../../hooks/home/useGetBanners";

const HeroSection = () => {
  const { data: banners = [] } = useGetBanners();
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const { userType } = useSelector((state) => state.clientData);

  useEffect(() => {
    if (activeIndex >= banners.length) {
      setActiveIndex(0);
    }
  }, [banners, activeIndex]);

  if (!banners.length) return null;

  const { title, description, image } = banners[activeIndex];

  return (
    <section className="hero-section">
      <div className="overlay"></div>

      <img className="media-bg" src={image} alt={title} key={image} />

      <div className="hero-content container">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{description}</p>
        <div className="d-flex align-items-center justify-content-center gap-3">
          {userType === "service_provider" ? (
            <Link to="/add-event" className="btn btn-primary cta-button">
              {t("home.addEvent")}
            </Link>
          ) : (
            <Link to="/map" className="btn btn-primary cta-button">
              {t("home.bookNow")}
            </Link>
          )}
        </div>
      </div>

      <div className="hero-tabs">
        <div className="tabs-container">
          {banners.map((slide, index) => (
            <button
              key={index}
              className={`tab-button ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {slide?.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
