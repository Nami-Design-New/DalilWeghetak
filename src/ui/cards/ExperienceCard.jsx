import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function ExperienceCard({ experience, city }) {
  const { t } = useTranslation();
  return (
    <Link to={`/experiences/${experience.id}`} className="experience-card">
      <img
        src={experience.image}
        alt={experience.title}
        className="card-image"
      />
      <div className="card-content">
        <h4 className="card-title">{experience.title}</h4>
        <div className="location-type">
          <i className="fa-solid fa-location-dot me-1"></i>
          {city?.name}
        </div>
        
        <Link to={`/experiences/${experience.id}`} className="details-btn">
          {t("showDetails")}
        </Link>
      </div>
    </Link>
  );
}
