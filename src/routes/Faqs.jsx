import React, { useState } from "react";

const faqs = [
  {
    question: "كيف يمكنني حجز فعالية؟",
    answer: "قم بتسجيل الدخول إلى حسابك، ثم اختر الفعالية، واضغط على زر الحجز واتبع التعليمات.",
  },
  {
    question: "هل يمكنني استرداد المبلغ بعد الحجز؟",
    answer: "نعم، يمكنك الاسترداد حسب سياسة الفعالية الموضحة في صفحة التفاصيل.",
  },
  {
    question: "هل يتطلب الدخول طباعة التذكرة؟",
    answer: "لا، يمكنك استخدام التذكرة الإلكترونية الموجودة في حسابك.",
  },
   {
    question: "هل يتطلب الدخول طباعة التذكرة؟",
    answer: "لا، يمكنك استخدام التذكرة الإلكترونية الموجودة في حسابك.",
  },
];

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (idx) => {
    setActiveIndex(idx === activeIndex ? null : idx);
  };

  return (
    <div className="faq-page mt-80">
      <div className="container">
        <div className="row">
        <div className="col-md-5 info">
          <h2 className="section-title">الأسئلة الشائعة</h2>
          <p className="section-subtitle">
            كل ما تحتاج معرفته عن الحجز، الفعاليات، والتذاكر.
          </p>
          <img src="/icons/faqs.svg" alt="FAQ" className="d-none d-md-block" />
        </div>

        <div className="col-md-7 faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-card ${activeIndex === idx ? "active" : ""}`}
              onClick={() => toggle(idx)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="icon">{activeIndex === idx ? "-" : "+"}</span>
              </div>
              {activeIndex === idx && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
