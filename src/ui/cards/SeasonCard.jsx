import React from "react";

export default function SeasonCard({ season }) {
  return (
    <div className="season-card text-center">
      <img src={season.image} alt={season.title} className="season-img" />
      <p className="season-date">{season.startDate} - {season.endDate}</p>
      <h5 className="season-title">{season.title}</h5>
    </div>
  );
}
