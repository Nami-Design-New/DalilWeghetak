import React from 'react';

export default function Statistics() {
  return (
    <section className="statistics-section" >
      <div className="container">
         <h2 className="section-title">
          <span className="text-dark">استكشف </span>
          <span className="text-main">السعودية بالأرقام</span>
        </h2>

        <div className="statistics-grid">
          <div className="stats-cards">
         <div className="card large-card with-pattern">
  <div className="card-content">
    <h3><span className="highlight">+383</span> معلم سياحي بانتظارك!</h3>
  </div>
  <div className="card-image">
    <img src="/images/stat.png" alt="استكشاف" />
  </div>
</div>


            <div className="card-row">
              <div className="card small-card with-pattern">
                <h3><span className="highlight">20</span> وجهة يمكنك زيارتها!</h3>
              </div>

              <div className="card small-card with-pattern">
                <h3><span className="highlight">+8</span> مواقع ضمن اليونسكو</h3>
              </div>
            </div>
          </div>

          <div className="stories-card with-pattern">
            <h3><span className="highlight">+172</span> قصة لإلهامك!</h3>
            <ul className="stories-list">
              <li><span>01</span> البحر الأحمر السعودي</li>
              <li><span>02</span> السكك الحديدية عالية السرعة</li>
              <li><span>03</span> العملة السعودية وطرق الدفع</li>
              <li><span>04</span> الثقافة والعادات السعودية</li>
              <li><span>05</span> دليل الحاج والمعتمر</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
