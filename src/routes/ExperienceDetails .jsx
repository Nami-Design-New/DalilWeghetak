import { useTranslation } from "react-i18next";
import useGetHighLightsDetails from "../hooks/hightlights/useGetHighLightsDetails";
import Loader from "../ui/loader/Loader";

export default function ExperienceDetails() {
  const { highlightsDetails, isLoading } = useGetHighLightsDetails();
  const { t } = useTranslation();

  if (isLoading) return <Loader />;
  console.log(highlightsDetails);
  return (
    <>
      <section className="activity-details">
        <div className="hero-banner">
          <img
            src={highlightsDetails.image}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="overlay">
            <div className="text-content container text-center">
              <h1>{highlightsDetails.title}</h1>
            </div>
          </div>
        </div>

        <div className="info-cards container ">
          <div className="row g-4">
            {[
              {
                icon: "calendar",
                label: "من",
                value: highlightsDetails.from_date,
              },
              {
                icon: "calendar-alt",
                label: "إلى",
                value: highlightsDetails.to_date,
              },
              {
                icon: "users",
                label: "الجمهور",
                value: t(`audienceTr.${highlightsDetails.audience}`),
              },
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
                  <h3 className="section-title">{t("aboutEvent")}</h3>
                  <p className="text-body">{highlightsDetails.description}</p>
                </div>

                {/* <div className="policy-section">
                  <h4 className="section-title">سياسة الاسترجاع</h4>
                  <div className="policy-card">
                    <p>{highlightsDetails.policy}</p>
                  </div>
                </div> */}
              </div>

              <div className="col-lg-6">
                <div className="map-section h-100">
                  <h4 className="section-title">{t("eventLocation")}</h4>
                  <div className="map-wrapper shadow-sm rounded overflow-hidden h-100">
                    <iframe
                      src={`https://www.google.com/maps?q=${highlightsDetails.lat},${highlightsDetails.lng}&z=15&output=embed`}
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
    </>
  );
}
