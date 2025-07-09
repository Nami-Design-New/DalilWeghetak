import React, { useState } from "react";
import { Link } from "react-router";

const slides = [
  {
    title: "استكشف السعودية",
    description: "سواء كنت تبحث عن وجهات سياحية مبهرة، تجارب ثقافية غنية، أو مغامرات في الهواء الطلق، هنا تجد كل ما تحتاجه لتخطيط رحلتك.",
    image: "/images/slide1.png",
  },
   {
    title: "شتانا حكايه",
    description: "استعد لشتاء ما يتفوت.",
    image: "/images/slide1.png",
  },
  {
    title: "البحر الأحمر في السعودية",
    description:
    " من جدة الساحرة على شاطئ البحر الأحمر إلى الرياض النابضة بالحياة، ومن الطائف بحدائقها الخلابة إلى العلا حيث الآثار القديمة تسرد قصص الماضي",
    image:"/images/slide1.png",
  },
   {
    title: "أنشطة ممتعة طوال العام",
    description: "احجز الآن واستمتع بفعاليات مذهلة تناسب الجميع! سواء كنت من عشاق المهرجانات أو تبحث عن مغامرات ",
    image: "/images/slide1.png",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, description, image } = slides[activeIndex];

  return (
    <section className="hero-section ">
      <div className="overlay"></div>
<img className="image-bg" src={image} alt={title} key={image} />


      <div className="hero-content container">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{description}</p>
       <Link to="/add-event" className="btn btn-primary cta-button">
  أضف فعالية
</Link>
      </div>

     <div className="hero-tabs ">
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
