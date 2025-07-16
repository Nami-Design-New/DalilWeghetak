import React from "react";
import { useParams } from "react-router";
import BookTicketModal from "../ui/modals/BookTicketModal";
import { useState } from "react";

export default function ActivityDetails() {
  const { id } = useParams();
  const [showBookingModal, setShowBookingModal] = useState(false);

  const activities = [
    {
      id: "1",
      title: "فعاليات الرياض",
      subtitle: "لاستكشاف عالم جديد",
      dateFrom: "13 أكتوبر 2024",
      dateTo: "15 أكتوبر 2024",
      startTime: "10:00 صباحًا",
      endTime: "8:00 مساءً",
      audience: "عائلات",
      category: "ترفيهيات",
      imageUrl: "/images/cat1.png",
      price: "700",
      description:
        "حققت الأمريكية أليسون لي لقب منافسات الأفراد في سلسلة بطولات أرامكو للفِرق المقدَّمة من صندوق الاستثمارات العامة تحت مظلة الجولة الأوروبية لجولف السيدات، التي أقيمت في ملعب نادي الرياض للجولف في الفترة من 27 إلى 29 أكتوبر 2023، وتعتبر أول بطولة احترافية للجولف تقام في العاصمة الرياض، بمجموع جوائز يبلغ مليون دولار (500.000 دولار لكل من منافسات الفِرق والأفراد).",
      policy:
        "يمكنك استرداد المبلغ المدفوع قبل أسبوع من الفعالية بخصم 20% من المبلغ.",
      location: "الرياض",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8532509245557!2d46.68363117518367!3d24.713551278048956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03360a64c7f9%3A0xa60ed90e2998878e!2z2KfZhNi52LHYqSDYp9mE2YPYp9iv2KfZhCDZgtin2YUg2KfZhNmF2YbYp9iqINin2YTYqtmI2KfZhtmK!5e0!3m2!1sar!2ssa!4v1720773774704!5m2!1sar!2ssa",
    },
    {
      id: "2",
      title: "فعاليات الرياض",
      subtitle: "لاستكشاف عالم جديد",
      dateFrom: "13 أكتوبر 2024",
      dateTo: "15 أكتوبر 2024",
      startTime: "10:00 صباحًا",
      endTime: "8:00 مساءً",
      audience: "عائلات",
      category: "ترفيهيات",
      imageUrl: "/images/cat2.png",
      price: "700",
      description:
        "حققت الأمريكية أليسون لي لقب منافسات الأفراد في سلسلة بطولات أرامكو للفِرق المقدَّمة من صندوق الاستثمارات العامة تحت مظلة الجولة الأوروبية لجولف السيدات، التي أقيمت في ملعب نادي الرياض للجولف في الفترة من 27 إلى 29 أكتوبر 2023، وتعتبر أول بطولة احترافية للجولف تقام في العاصمة الرياض، بمجموع جوائز يبلغ مليون دولار (500.000 دولار لكل من منافسات الفِرق والأفراد).",
      policy:
        "يمكنك استرداد المبلغ المدفوع قبل أسبوع من الفعالية بخصم 20% من المبلغ.",
      location: "الرياض",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8532509245557!2d46.68363117518367!3d24.713551278048956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03360a64c7f9%3A0xa60ed90e2998878e!2z2KfZhNi52LHYqSDYp9mE2YPYp9iv2KfZhCDZgtin2YUg2KfZhNmF2YbYp9iqINin2YTYqtmI2KfZhtmK!5e0!3m2!1sar!2ssa!4v1720773774704!5m2!1sar!2ssa",
    },
  ];

  const activity = activities.find((a) => a.id === id);

  if (!activity) {
    return (
      <div className="container py-5 text-center">
        <h3>عذرًا، لم يتم العثور على هذه الفعالية</h3>
      </div>
    );
  }
  return (
    <>
      <section className="activity-details">
        <div
          className="hero-banner"
          style={{ backgroundImage: `url(${activity.imageUrl})` }}
        >
          <div className="overlay">
            <div className="text-content container text-center">
              <h1>{activity.title}</h1>
              <p className="lead">{activity.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="info-cards container ">
          <div className="row g-4">
            {[
              { icon: "calendar", label: "من", value: activity.dateFrom },
              { icon: "calendar-alt", label: "إلى", value: activity.dateTo },
              { icon: "clock", label: "وقت البدء", value: activity.startTime },
              { icon: "clock", label: "وقت الانتهاء", value: activity.endTime },
              { icon: "tags", label: "الفئة", value: activity.category },
              { icon: "users", label: "الجمهور", value: activity.audience },
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
                  <p className="text-body">{activity.description}</p>
                </div>

                <div className="policy-section">
                  <h4 className="section-title">سياسة الاسترجاع</h4>
                  <div className="policy-card">
                    <p>{activity.policy}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="map-section h-100">
                  <h4 className="section-title">موقع الفعالية</h4>
                  <div className="map-wrapper shadow-sm rounded overflow-hidden h-100">
                    <iframe
                      src={activity.mapSrc}
                      width="100%"
                      height="100%"
                      style={{ minHeight: "400px", border: 0 }}
                      allowFullScreen
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
            <span className="price"> {activity.price}</span>ريال للفرد
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
        price={activity.price}
      />
    </>
  );
}
