import React, { useState } from "react";

const bookings = [
  {
    id: "F6DGF6",
    title: "فعاليات الرياض",
    image: "/images/cat1.png",
    date: "10 فبراير 2024",
    time: "10 مساءً",
    count: 2,
    reservedDate: "10 أكتوبر 2024",
    status: "current",
  },
  {
    id: "F6DGF6",
    title: "تجربة الغوص تحت الماء",
    image: "/images/cat2.png",
    date: "10 فبراير 2024",
    time: "10 مساءً",
    count: 2,
    reservedDate: "10 أكتوبر 2024",
    status: "current",
  },
  {
    id: "ABC123",
    title: "مهرجان الألوان",
    image: "/images/cat3.jpg",
    date: "1 يناير 2024",
    time: "7 مساءً",
    count: 1,
    reservedDate: "28 ديسمبر 2023",
    status: "past",
  },
];

export default function MyBooking() {
  const [activeTab, setActiveTab] = useState("current");

  const filteredBookings = bookings.filter((b) => b.status === activeTab);

  return (
    <div className="my-booking-page mt-80">
      <div className="container">
        <div className="d-flex justify-content-center gap-4 mb-4">
          <button
            className={`btn btn-link ${
              activeTab === "current"
                ? "active-tab"
                : "inactive-tab"
            }`}
            onClick={() => setActiveTab("current")}
          >
            الحجوزات الحالية
          </button>
          <button
            className={`btn btn-link ${
              activeTab === "past"
                ? "active-tab"
                : "inactive-tab"
            }`}
            onClick={() => setActiveTab("past")}
          >
            الحجوزات السابقة
          </button>
        </div>

        <div className="row g-4">
          {filteredBookings.map((booking, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="booking-card shadow-sm">
                <div className="image-section ">
                  <img
                    src={booking.image}
                    alt={booking.title}
                    className="img-fluid rounded-top"
                  />
                  <div className="ticket-id">
                    TICKET ID: <span>{booking.id}</span>
                  </div>
                  {booking.status === "current" && (
                    <div className="check-icon">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                  )}
                  <div className="overlay-text">
                    <h5 className="title">{booking.title}</h5>
                    <p className="reserve-date">
                      تم الحجز بتاريخ {booking.reservedDate}
                    </p>
                  </div>
                </div>

                <div className="details-section ">
                  <div className="text-center">
                    <div className="small">عدد الأفراد</div>
                    <div  className="title">{booking.count}</div>
                  </div>
                  <div className="text-center">
                    <div className="small">التاريخ</div>
                    <div  className="title">{booking.date}</div>
                  </div>
                  <div className="text-center">
                    <div className="small">التوقيت</div>
                    <div className="title">{booking.time}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredBookings.length === 0 && (
            <div className="text-center text-muted mt-4">
              لا توجد حجوزات في هذا القسم حاليًا.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
