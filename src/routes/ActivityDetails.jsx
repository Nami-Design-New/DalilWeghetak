import { useState } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import BookTicketModal from "../ui/modals/BookTicketModal";
import useGetEventDetails from "../hooks/events/useGetEventDetails";
import Loader from "../ui/loader/Loader";

export default function ActivityDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [showBookingModal, setShowBookingModal] = useState(false);

  const { eventDetails, isLoading } = useGetEventDetails();

  console.log(eventDetails);

  if (isLoading) return <Loader />;

  return (
    <>
      <section className="activity-details">
        <div className="hero-banner">
          <img
            src={eventDetails.image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="overlay">
            <div className="text-content container text-center">
              <h1>{eventDetails.title}</h1>
              {/* <p className="lead">{eventDetails.description}</p> */}
            </div>
          </div>
        </div>

        <div className="info-cards container ">
          <div className="row g-4">
            {[
              {
                icon: "calendar",
                label: "from",
                value: eventDetails.from_date,
              },
              {
                icon: "calendar-alt",
                label: "to",
                value: eventDetails.to_date,
              },
              {
                icon: "clock",
                label: "startTime",
                value: eventDetails.from_time,
              },
              {
                icon: "clock",
                label: "endTime",
                value: eventDetails.to_time,
              },
              {
                icon: "tags",
                label: "category",
                value: eventDetails.categories?.[0]?.name,
              },
              {
                icon: "users",
                label: "audience",
                value: t(`audienceTr.${eventDetails.audience}`),
              },
            ].map((item, index) => (
              <div className="col-6 col-md-4" key={index}>
                <div className="info_card">
                  <i className={`fas fa-${item.icon} icon mb-3`}></i>
                  <h6 className="text-muted">{t(item.label)}</h6>
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
                  <h3 className="section-title">{t("aboutEvent")}</h3>
                  <p className="text-body">{eventDetails.description}</p>
                </div>

                {/* <div className="policy-section">
                  <h4 className="section-title">سياسة الاسترجاع</h4>
                  <div className="policy-card">
                    <p>{eventDetails.policy}</p>
                  </div>
                </div> */}
              </div>

              <div className="col-lg-6">
                <div className="map-section h-100">
                  <h4 className="section-title">{t("eventLocation")}</h4>
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
            {" "}
            <span className="price"> {eventDetails.price}</span>{" "}
            {t("pricePerPerson")}
          </strong>

          {new Date(eventDetails.from_date) > new Date() ? (
            <button
              className="btn btn-main"
              onClick={() => setShowBookingModal(true)}
            >
              {t("bookNow")}
            </button>
          ) : (
            t("eventExpired")
          )}
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
