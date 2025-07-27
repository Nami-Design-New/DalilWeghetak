import { useState } from "react";
import { useParams } from "react-router";
import useGetEventDetails from "../hooks/events/useGetEventDetails";
import Loader from "../ui/loader/Loader";
import BookTicketModal from "../ui/modals/BookTicketModal";

export default function EventDetails() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const { eventDetails, isLoading } = useGetEventDetails();
  const { id } = useParams();
  if (isLoading) return <Loader />;

  return (
    <>
      <section className="event-details">
        <div className="hero-banner">
          <img src={eventDetails?.image} alt="" />
          <div className="overlay">
            <div className="text-content container text-center">
              <h1>{eventDetails.title}</h1>
              {/* <p className="lead">{eventDetails.description}</p> */}
            </div>
          </div>
        </div>

        <div className="info-cards container">
          <div className="row g-4">
            {[
              { icon: "calendar", label: "من", value: eventDetails.from_date },
              {
                icon: "calendar-alt",
                label: "إلى",
                value: eventDetails.to_date,
              },
              {
                icon: "clock",
                label: "وقت البدء",
                value: eventDetails.from_time,
              },
              {
                icon: "clock",
                label: "وقت الانتهاء",
                value: eventDetails.to_time,
              },
              { icon: "tags", label: "النوع", value: eventDetails.type },
              { icon: "users", label: "الجمهور", value: eventDetails.audience },
            ].map((item, index) => (
              <div className="col-6 col-md-4" key={index}>
                <div className="info_card">
                  <i className={`fas fa-${item.icon} icon mb-3`}></i>
                  <h6 className="text-muted">{item.label}</h6>
                  <h5>{item.value}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="details">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="description-section mb-4">
                  <h3 className="section-title">عن الفعالية</h3>
                  <p className="text-body">{eventDetails.description}</p>
                </div>

                <div className="policy-section">
                  <h4 className="section-title">سياسة الاسترجاع</h4>
                  <div className="policy-card">
                    {/* <p>{eventDetails.policy}</p> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="map-section h-100">
                  <h4 className="section-title">موقع الفعالية</h4>
                  <div className="map-wrapper shadow-sm rounded overflow-hidden h-100">
                    <iframe
                      src={`https://www.google.com/maps?q=${eventDetails.lat},${eventDetails.lng}&z=15&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ minHeight: "400px", border: 0 }}
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      loading="lazy"
                      title="الموقع"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="purchase-bar">
        <div className="container d-flex justify-content-between align-items-center">
          <strong>
            <span className="price">{eventDetails.price}</span> ريال للفرد
          </strong>
          <button
            className="btn btn-main"
            onClick={() => setShowBookingModal(true)}
          >
            احجز تذكرتك الآن
          </button>
        </div>
      </div>

      <BookTicketModal
        show={showBookingModal}
        handleClose={() => setShowBookingModal(false)}
        price={eventDetails.price}
        eventId={id}
      />
    </>
  );
}
