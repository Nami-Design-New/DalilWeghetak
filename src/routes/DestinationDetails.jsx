import { useParams } from "react-router";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import ActivityCard from "../ui/cards/ActivityCard";
import EventCard from "../ui/cards/EventCard";
import ExperienceCard from "../ui/cards/ExperienceCard";

const cities = [
  { name: "الرياض", image: "/images/1.png" },
  { name: "مكة", image: "/images/2.png" },
  { name: "الدمام", image: "/images/3.png" },
  { name: "جدة", image: "/images/4.png" },
  { name: "أبها", image: "/images/1.png" },
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
    title: "تجربة مغامرة في الصحراء",
    city: "الرياض",
    category: "مواقع طبيعية",
    price: "400",
    image: "/images/cat2.png",
  },
  {
    id: 3,
    title: "زيارة المواقع التراثية",
    city: "الرياض",
    category: "اماكن تراثية",
    price: "350",
    image: "/images/cat3.jpg",
  },
  {
    id: 4,
    title: "رحلة ترفيهية ممتعة",
    city: "الرياض",
    category: "اماكن ترفيهية",
    price: "300",
    image: "/images/cat1.png",
  },
];

const events = [
  {
    name: "متحف مركز طارق عبد الحكيم",
    image: "/images/ev1.png",
    price: 500,
    startDate: "20 يوليو 2024",
    endDate: "30 يوليو 2024",
    city: "الرياض",
    type: "مهرجانات",
  },
  {
    name: "اكتشف عراقه المملكه وحاضرها المزدهر",
    image: "/images/ev2.jpg",
    price: 300,
    startDate: "5 أغسطس 2024",
    endDate: "10 أغسطس 2024",
    city: "الرياض",
    type: "حفلات",
  },
  {
    name: "موسم جدة",
    image: "/images/ev1.png",
    price: 250,
    startDate: "15 سبتمبر 2024",
    endDate: "25 سبتمبر 2024",
    city: "الرياض",
    type: "فعاليات",
  },
  {
    name: "حفلات الصيف",
    image: "/images/ev2.jpg",
    price: 450,
    startDate: "10 يوليو 2024",
    endDate: "20 يوليو 2024",
    city: "الرياض",
    type: "حفلات",
  },
];

const experiences = [
  {
    id: 1,
    title: "تجربة الطهي السعودي",
    subtitle: "تعلم وصفات تقليدية مع طهاة محليين",
    image: "/images/1.png",
    city: "الرياض",
  },
  {
    id: 2,
    title: "جولة بالدراجات في الصحراء",
    subtitle: "رحلة بالدراجات مع مرشدين محترفين",
    image: "/images/2.png",
    city: "الرياض",
  },
  {
    id: 3,
    title: "جلسة تصوير في المواقع التراثية",
    subtitle: "صور احترافية في أجواء تاريخية",
    image: "/images/3.png",
    city: "الرياض",
  },
  {
    id: 4,
    title: "جلسة تصوير في المواقع التراثية",
    subtitle: "صور احترافية في أجواء تاريخية",
    image: "/images/3.png",
    city: "الرياض",
  },
  {
    id: 3,
    title: "جلسة تصوير في المواقع التراثية",
    subtitle: "صور احترافية في أجواء تاريخية",
    image: "/images/3.png",
    city: "جدة",
  },
];

export default function DestinationDetails() {
  const { name } = useParams();

  const city = cities.find((c) => c.name === name);
  const cityActivities = activities.filter((a) => a.city === name);
  const cityEvents = events.filter((e) => e.city === name);
  const cityExperiences = experiences.filter((exp) => exp.city === name);

  if (!city) {
    return (
      <div className="container py-5 text-center">
        <h3>عذرًا، لم يتم العثور على المدينة</h3>
      </div>
    );
  }

  return (
    <section className="destination-details">
      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${city.image})` }}
      >
        <div className="overlay">
          <div className="text-content container text-center text-white">
            <h1>{city.name}</h1>
            <p className="lead">مرحبًا بك في مدينة {city.name} الساحرة</p>
          </div>
        </div>
      </div>

      <div className="container py-5">

      {cityActivities.length > 0 && (
  <>
    <div className="section-header d-flex justify-content-between align-items-center mb-3">
      <h2 className="section-title">
        <span className="text-dark">أنشطة </span>
        <span className="text-main">تقوم بها في {city.name}</span>
      </h2>
    </div>

    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      spaceBetween={15}
      slidesPerView={4}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      }}
    >
      {cityActivities.map((act) => (
        <SwiperSlide key={act.id}>
          <ActivityCard activity={act} />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
)}


      {cityEvents.length > 0 && (
  <>
    <div className="section-header d-flex justify-content-between align-items-center mt-5 mb-3">
      <h2 className="section-title">
        <span className="text-dark">فعاليات </span>
        <span className="text-main">تُقام في {city.name}</span>
      </h2>
    </div>

    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      spaceBetween={15}
      slidesPerView={3}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
    >
      {cityEvents.map((event) => (
        <SwiperSlide key={event.id}>
          <EventCard event={event} />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
)}

       {cityExperiences.length > 0 && (
  <>
    <div className="section-header d-flex justify-content-between align-items-center mt-5 mb-3">
      <h2 className="section-title">
        <span className="text-dark">تجارب </span>
        <span className="text-main">تستحق التجربة في {city.name}</span>
      </h2>
    </div>

    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      spaceBetween={15}
      slidesPerView={3}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
    >
      {cityExperiences.map((exp) => (
        <SwiperSlide key={exp.id}>
          <ExperienceCard experience={exp} />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
)}

      </div>
    </section>
  );
}
