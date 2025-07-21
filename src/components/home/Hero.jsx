import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router";
const slides = [
  {
    type: "video",
    title: "استكشف السعودية",
    description:
      "سواء كنت تبحث عن وجهات سياحية مبهرة، تجارب ثقافية غنية، أو مغامرات في الهواء الطلق، هنا تجد كل ما تحتاجه لتخطيط رحلتك.",
    src: "/images/herovideo.mp4",
  },
  {
    type: "image",
    title: "شتانا حكايه",
    description: "استعد لشتاء ما يتفوت.",
    src: "/images/slide1.png",
  },
  {
    type: "image",
    title: "البحر الأحمر في السعودية",
    description:
      "من جدة الساحرة إلى الرياض النابضة بالحياة، ومن الطائف إلى العلا حيث التاريخ يروي قصصه.",
    src: "/images/slide1.png",
  },
  {
    type: "image",
    title: "أنشطة ممتعة طوال العام",
    description: "احجز الآن واستمتع بفعاليات مذهلة تناسب الجميع!",
    src: "/images/slide1.png",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, description, src, type } = slides[activeIndex];
  const { t } = useTranslation();
  const { userType } = useSelector((state) => state.clientData);

  return (
    <section className="hero-section">
      <div className="overlay"></div>

      {type === "image" ? (
        <img className="media-bg" src={src} alt={title} key={src} />
      ) : (
        <video
          className="media-bg"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          key={src}
        ></video>
      )}

      <div className="hero-content container">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{description}</p>
        <div className="d-flex align-items-center justify-content-center gap-3">
          {userType === "service_provider" && (
            <Link to="/add-event" className="btn btn-primary cta-button">
              {t("home.addEvent")}
            </Link>
          )}
          <Link to="/add-event" className="btn btn-primary cta-button">
            {t("home.bookNow")}
          </Link>
        </div>
      </div>

      <div className="hero-tabs">
        <div className="tabs-container">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              className={`tab-button ${idx === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
