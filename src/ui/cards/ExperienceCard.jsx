import React from "react";
import { Link } from "react-router";

export default function ExperienceCard({ experience }) {
  return (
    <div className="experience-card">
      <img src={experience.image} alt={experience.title} className="card-image" />
      <div className="card-content">
        <h4 className="card-title">{experience.title}</h4>
         <div className="location-type">
              <i className="fa-solid fa-location-dot me-1"></i>
              {experience.city} 
            </div>
        {/* <p className="card-text">{experience.subtitle}</p> */}
        <Link to={`/activity/${experience.id}`} className="details-btn">
          عرض التفاصيل
        </Link>
      </div>
    </div>
  );
}
