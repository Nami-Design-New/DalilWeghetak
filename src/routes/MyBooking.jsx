import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router";
import useGetMyBooking from "../hooks/useGetMyBooking";
import BookingCard from "../ui/cards/BookingCard";

export default function MyBooking() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialTab = searchParams.get("tab") || "current";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab, setSearchParams]);

  const handleTab = (type) => {
    setActiveTab(type);
  };

  const { myBookings, isLoading } = useGetMyBooking(activeTab);

  return (
    <div className="my-booking-page mt-80 py-5">
      <div className="container">
        <div className="tabs-wrapper d-flex justify-content-center gap-3 mb-5 flex-wrap">
          <div
            className={`tab-card ${activeTab === "current" ? "active" : ""}`}
            onClick={() => handleTab("current")}
          >
            <i className="fa-solid fa-calendar-check mb-2"></i>
            <span>{t("dropdown.current_bookings")}</span>
          </div>
          <div
            className={`tab-card ${activeTab === "previous" ? "active" : ""}`}
            onClick={() => handleTab("previous")}
          >
            <i className="fa-solid fa-clock-rotate-left mb-2"></i>
            <span>{t("dropdown.previous_bookings")}</span>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : myBookings?.length > 0 ? (
          <div className="row g-4">
            {myBookings.map((booking, idx) => (
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
            <h5 className="text-muted">{t("dropdown.no-book")}</h5>
          </div>
        )}
      </div>
    </div>
  );
}
