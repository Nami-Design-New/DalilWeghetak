import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ActivityCard from "../../ui/cards/ActivityCard"; 
import { useTranslation } from "react-i18next";

const categories = [
  {
    id: "الكل",
    label: "الكل",
    icon: "fas fa-check",
  },
  {
    id: "مواقع طبيعية",
    label: "مواقع طبيعية",
    icon: "fas fa-tree",
  },
  {
    id: "اماكن تراثية",
    label: "اماكن تراثية",
    icon: "fas fa-landmark",
  },
  {
    id: "اماكن ترفيهية",
    label: "اماكن ترفيهية",
    icon: "fas fa-bag-shopping",
  },
 
];

const activities = [
  {
    id: 1,
    title: "اكتشف عراقة المملكة وحاضرها المزدهر",
    city: "الرياض",
    category: "اماكن ترفيهية",
    price: "500",
    image: "/images/cat1.png",
  },
  {
    id: 2,
    title: "اكتشف عراقة المملكة وحاضرها المزدهر",
    city: "العلا",
    category: "اماكن تراثية",
    price: "500",
    image: "/images/cat2.png",
  },
  {
    id: 3,
    title: "اكتشف عراقة المملكة وحاضرها المزدهر",
    city: "العلا",
    category: "مواقع طبيعية",
    price: "500",
    image: "/images/cat3.jpg",
  },
  {
    id: 4,
    title: "اكتشف عراقة المملكة وحاضرها المزدهر",
    city: "العلا",
    category: "اماكن تراثية",
    price: "500",
    image: "/images/cat1.png",
  },
   {
    id: 5,
    title: "اكتشف عراقة المملكة وحاضرها المزدهر",
    city: "العلا",
    category: "اماكن تراثية",
    price: "500",
    image: "/images/cat2.png",
  },
    {
    id: 6,
    title: "اكتشف عراقة المملكة وحاضرها المزدهر",
    city: "العلا",
    category: "اماكن تراثية",
    price: "500",
    image: "/images/cat3.jpg",
  },
 ,
];

export default function Activities() {
const lang = localStorage.getItem("lang") || "ar";
    const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const filteredActivities =
    selectedCategory === "الكل"
      ? activities
      : activities.filter((act) => act.category === selectedCategory);

  return (
    <section className="activities-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
             <span className="text-dark">{t("activities.titleDark")}</span>
            <span className="text-main">{t("activities.titleMain")}</span>
          </h2>
        </div>

     <div className="tabs">
  {categories.map((cat) => (
    <button
      key={cat.id}
      className={`tab-button ${selectedCategory === cat.id ? "active" : ""}`}
      onClick={() => setSelectedCategory(cat.id)}
    >
      <i className={`tab-icon ${cat.icon}`}></i>
      <span className="tab-label">{cat.label}</span>
      {selectedCategory === cat.id }
    </button>
  ))}
</div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={5}
          slidesPerView={4}
          loop={true}
          dir={lang === "ar" ? "rtl" : "ltr"} 
          key={lang} 
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {filteredActivities.map((act) => (
            <SwiperSlide key={act.id} className="SwiperSlide">
              <ActivityCard activity={act} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
