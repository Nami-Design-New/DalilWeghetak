import React, { useState } from "react";
import useGetMyBooking from "../hooks/useGetMyBooking";
import BookingCard from "../ui/cards/BookingCard";
import { useTranslation } from "react-i18next";

export default function MyBooking() {
  const [activeTab, setActiveTab] = useState("current");
  const { t } = useTranslation();
  const { data: bookings = [], isLoading } = useGetMyBooking(activeTab);

  return (
    <div className="my-booking-page  py-5">
      <div className="container">
        <div className="tabs-wrapper d-flex justify-content-center gap-3 mb-5 flex-wrap">
          <div
            className={`tab-card ${activeTab === "current" ? "active" : ""}`}
            onClick={() => setActiveTab("current")}
          >
            <i className="fa-solid fa-calendar-check mb-2"></i>
            <span>
           {t("dropdown.current_bookings")}
              </span>
          </div>
          <div
            className={`tab-card ${activeTab === "previous" ? "active" : ""}`}
            onClick={() => setActiveTab("previous")}
          >
            <i className="fa-solid fa-clock-rotate-left mb-2"></i>
            <span>
               {t("dropdown.previous_bookings")}
              </span>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : bookings.length > 0 ? (
          <div className="row g-4">
            {bookings.map((booking, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <BookingCard booking={booking} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-bookings">
            <img
              src="/icons/nobooking.svg"
              alt="no bookings"
              className="no-booking-img"
            />
            <h5 className="text-muted">
               {t("dropdown.no-book")}
              </h5>
          </div>
        )}
      </div>
    </div>
  );
}
