import React, { useState } from "react";
import { useParams } from "react-router";
import BookTicketModal from "../ui/modals/BookTicketModal";

export default function EventDetails() {
  const { id } = useParams();
  const [showBookingModal, setShowBookingModal] = useState(false);

const events = [
  {
    id: "1",
    title: "متحف مركز طارق عبد الحكيم",
    subtitle: "احتفال ثقافي رائع",
    dateFrom: "20 يوليو 2024",
    dateTo: "30 يوليو 2024",
    startTime: "6:00 مساءً",
    endTime: "11:00 مساءً",
    audience: "عائلات",
    type: "مهرجانات",
    imageUrl: "/images/ev1.png",
    price: "500",
    description:
      "معرض ثقافي يسلط الضوء على تاريخ الموسيقى السعودية من خلال مقتنيات نادرة وتجارب تفاعلية.",
    policy:
      "يمكنك استرداد المبلغ بالكامل قبل 5 أيام من بداية الفعالية، بعد ذلك لا يمكن الاسترداد.",
    location: "جدة",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8532509245557!2d46.68363117518367!3d24.713551278048956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03360a64c7f9%3A0xa60ed90e2998878e!2z2KfZhNi52LHYqSDYp9mE2YPYp9iv2KfZhCDZgtin2YUg2KfZhNmF2YbYp9iqINin2YTYqtmI2KfZhtmK!5e0!3m2!1sar!2ssa!4v1720773774704!5m2!1sar!2ssa",
  },
  {
    id: "2",
    title: "اكتشف عراقة المملكة وحاضرها المزدهر",
    subtitle: "فعالية تعليمية وترفيهية",
    dateFrom: "5 أغسطس 2024",
    dateTo: "10 أغسطس 2024",
    startTime: "4:00 مساءً",
    endTime: "10:00 مساءً",
    audience: "للجميع",
    type: "حفلات",
    imageUrl: "/images/ev2.jpg",
    price: "300",
    description:
      "رحلة عبر تاريخ المملكة وثقافتها بأسلوب تفاعلي ممتع مناسب للعائلات والأطفال.",
    policy:
      "يمكنك استرداد المبلغ بنسبة 70% قبل 3 أيام من الفعالية، بعد ذلك لا يمكن الاسترداد.",
    location: "جدة",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8532509245557!2d46.68363117518367!3d24.713551278048956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03360a64c7f9%3A0xa60ed90e2998878e!2z2KfZhNi52LHYqSDYp9mE2YPYp9iv2KfZhCDZgtin2YUg2KfZhNmF2YbYp9iqINin2YTYqtmI2KfZhtmK!5e0!3m2!1sar!2ssa!4v1720773774704!5m2!1sar!2ssa",
  },
  {
    id: "3",
    title: "موسم جدة",
    subtitle: "مهرجان ترفيهي شامل",
    dateFrom: "15 سبتمبر 2024",
    dateTo: "25 سبتمبر 2024",
    startTime: "3:00 مساءً",
    endTime: "12:00 صباحًا",
    audience: "للجميع",
    type: "فعاليات",
    imageUrl: "/images/ev1.png",
    price: "250",
    description:
      "موسم ترفيهي ضخم يحتوي على عروض حية، ألعاب، وأسواق محلية لجميع الأعمار.",
    policy:
      "الاسترداد متاح بنسبة 50% قبل يومين من بداية الموسم.",
    location: "جدة",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8532509245557!2d46.68363117518367!3d24.713551278048956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03360a64c7f9%3A0xa60ed90e2998878e!2z2KfZhNi52LHYqSDYp9mE2YPYp9iv2KfZhCDZgtin2YUg2KfZhNmF2YbYp9iqINin2YTYqtmI2KfZhtmK!5e0!3m2!1sar!2ssa!4v1720773774704!5m2!1sar!2ssa",
  },
  {
    id: "4",
    title: "حفلات الصيف",
    subtitle: "أجمل الليالي الموسيقية",
    dateFrom: "10 يوليو 2024",
    dateTo: "20 يوليو 2024",
    startTime: "7:00 مساءً",
    endTime: "12:00 صباحًا",
    audience: "شباب وعائلات",
    type: "حفلات",
    imageUrl: "/images/ev2.jpg",
    price: "450",
    description:
      "حفلات صيفية مميزة بمشاركة أشهر الفنانين وسط أجواء ممتعة ومليئة بالطاقة.",
    policy:
      "الاسترداد غير متاح قبل 48 ساعة من موعد الحفل.",
    location: "جدة",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8532509245557!2d46.68363117518367!3d24.713551278048956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03360a64c7f9%3A0xa60ed90e2998878e!2z2KfZhNi52LHYqSDYp9mE2YPYp9iv2KfZhCDZgtin2YUg2KfZhNmF2YbYp9iqINin2YTYqtmI2KfZhtmK!5e0!3m2!1sar!2ssa!4v1720773774704!5m2!1sar!2ssa",
  },
];


  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="container py-5 text-center">
        <h3>عذرًا، لم يتم العثور على هذه الفعالية</h3>
      </div>
    );
  }

  return (
    <>
      <section className="event-details">
        <div
          className="hero-banner"
          style={{ backgroundImage: `url(${event.imageUrl})` }}
        >
          <div className="overlay">
            <div className="text-content container text-center">
              <h1>{event.title}</h1>
              <p className="lead">{event.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="info-cards container">
          <div className="row g-4">
            {[
              { icon: "calendar", label: "من", value: event.dateFrom },
              { icon: "calendar-alt", label: "إلى", value: event.dateTo },
              { icon: "clock", label: "وقت البدء", value: event.startTime },
              { icon: "clock", label: "وقت الانتهاء", value: event.endTime },
              { icon: "tags", label: "النوع", value: event.type },
              { icon: "users", label: "الجمهور", value: event.audience },
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
                  <p className="text-body">{event.description}</p>
                </div>

                <div className="policy-section">
                  <h4 className="section-title">سياسة الاسترجاع</h4>
                  <div className="policy-card">
                    <p>{event.policy}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="map-section h-100">
                  <h4 className="section-title">موقع الفعالية</h4>
                  <div className="map-wrapper shadow-sm rounded overflow-hidden h-100">
                    <iframe
                      src={event.mapSrc}
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
            <span className="price">{event.price}</span> ريال للفرد
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
        price={event.price}
      />
    </>
  );
}
