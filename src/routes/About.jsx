import React from "react";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-text">
          <span className="subtitle">رحلتك تبدأ من هنا</span>
          <h2 className="title">
            استكشف <span className="highlight">السعودية</span> مع مرشدينا
          </h2>
          <p className="desc">
            يمكنك اختيار أي مدينة سعودية والاستمتاع بأماكنها الساحرة وتجاربها الثقافية والمغامرات التي لا تُنسى.
            نقدم لك أفضل البرامج السياحية لتناسب جميع الأذواق.
          </p>
          <p className="desc">
            من الرياض النابضة بالحياة إلى العلا التاريخية، ومن أبها إلى جدة على شاطئ البحر الأحمر...
            رحلتك تبدأ معنا.
          </p>

          <div className="features">
            <p><i className="fas fa-check-circle"></i> <strong>20+</strong> سنة من الخبرة</p>
            <p><i className="fas fa-check-circle"></i> أكثر من <strong>150</strong> وجهة سياحية</p>
          </div>
        </div>

        <div className="about-image">
          <div className="image-wrapper">
            <span className="dot-pattern"></span>
            <img src="/images/about2.jpg" alt="عن السياحة" loading="lazy" />
            <div className="bg-square"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
