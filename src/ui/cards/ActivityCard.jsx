import React from "react";
import { Link } from "react-router";

export default function ActivityCard({ activity }) {
  return (
    <Link to={`/activity/${activity.id}`} className="activity-card-link">
      <div className="activity-card">
        <img src={activity.image} alt={activity.title} className="card-img" />
        <div className="card-body">
          <p className="price">يبدأ من {activity.price} ريال</p>
          <p className="meta">
            <i className="fa-solid fa-location-dot ms-1"></i>
            {activity.city} | {activity.category}
          </p>
          <h5 className="title">{activity.title}</h5>
          <div className="actions">
            <button className="details-btn">عرض التفاصيل</button>
            <button className="like-btn">
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
