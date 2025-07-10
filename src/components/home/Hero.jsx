import React, { useState } from "react";
import { Link } from "react-router";
const slides = [
  {
    type: "video",
    title: "استكشف السعودية",
    description: "سواء كنت تبحث عن وجهات سياحية مبهرة، تجارب ثقافية غنية، أو مغامرات في الهواء الطلق، هنا تجد كل ما تحتاجه لتخطيط رحلتك.",
  src: "/images/video.mp4",

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
    description: "من جدة الساحرة إلى الرياض النابضة بالحياة، ومن الطائف إلى العلا حيث التاريخ يروي قصصه.",
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
        <Link to="/add-event" className="btn btn-primary cta-button">
          أضف فعالية
        </Link>
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
