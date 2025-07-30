// import { useTranslation } from "react-i18next";
// import { Dropdown } from "react-bootstrap";
// import { useMemo } from "react";
// import { useSearchParams } from "react-router";

// import ActivityCard from "../ui/cards/ActivityCard";
// import useGetEvents from "../hooks/events/useGetEvents";
// import EventCardLoader from "../ui/loader/EventCardLoader";
// import useGetCategories from "../hooks/home/useGetCategories";

// export default function AllActivities() {
//   const { t } = useTranslation();
//   const [searchParams, setSearchParams] = useSearchParams();

//   // Extract selected categories as array
//   const selectedCategoryIds = useMemo(() => {
//     const value = searchParams.get("categories");
//     return value ? value.split("-") : [];
//   }, [searchParams]);

//   // Activities Data - pass selectedCategoryIds to hook (join by "-")
//   const { data: activities = [], isLoading: activityLoading } = useGetEvents(
//     "activity",
//     {
//       category: selectedCategoryIds.join("-"),
//     }
//   );

//   // Categories Data
//   const { data: categories = [] } = useGetCategories();

//   const handleCategoryToggle = (categoryId) => {
//     const idStr = String(categoryId);
//     const currentIds = [...selectedCategoryIds];
//     const index = currentIds.indexOf(idStr);

//     if (index > -1) {
//       currentIds.splice(index, 1); // remove
//     } else {
//       currentIds.push(idStr); // add
//     }

//     if (currentIds.length > 0) {
//       searchParams.set("categories", currentIds.join("-"));
//     } else {
//       searchParams.delete("categories");
//     }

//     setSearchParams(searchParams);
//   };

//   const selectedCategoryNames = useMemo(() => {
//     if (selectedCategoryIds.length === 0) return null;
//     const names = categories
//       .filter((cat) => selectedCategoryIds.includes(String(cat.id)))
//       .map((cat) => cat.name);
//     return names.join(", ");
//   }, [selectedCategoryIds, categories]);

//   return (
//     <section className="all-events-page py-5">
//       <div className="container">
//         <div className="d-flex justify-content-between page_head">
//           <h1 className="page-title">{t("allActivities")}</h1>

//           <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-categories">
//               {selectedCategoryIds.length > 0
//                 ? `${t("category")}: ${selectedCategoryNames}`
//                 : t("categories")}
//             </Dropdown.Toggle>
//             <Dropdown.Menu
//               style={{ padding: "10px" }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {categories.map((category) => (
//                 <label
//                   htmlFor={`cat-${category.id}`}
//                   className="dropdown-item d-flex align-items-center gap-2"
//                   key={category.id}
//                 >
//                   <input
//                     type="checkbox"
//                     name="category"
//                     id={`cat-${category.id}`}
//                     checked={selectedCategoryIds.includes(String(category.id))}
//                     onChange={() => handleCategoryToggle(category.id)}
//                   />
//                   <span>{category.name}</span>
//                 </label>
//               ))}
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>

//         <div className="row g-4">
//           {activityLoading
//             ? Array(4)
//                 .fill()
//                 .map((_, i) => (
//                   <div className="col-lg-4 col-md-6 p-2" key={i}>
//                     <EventCardLoader />
//                   </div>
//                 ))
//             : activities.map((activity) => (
//                 <div className="col-lg-4 col-md-6 p-2" key={activity.id}>
//                   <ActivityCard activity={activity} />
//                 </div>
//               ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// -------------------------------------------------------------------------------
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ActivityCard from "../ui/cards/ActivityCard";
import useGetEvents from "../hooks/events/useGetEvents";
import EventCardLoader from "../ui/loader/EventCardLoader";
import useGetCategories from "../hooks/home/useGetCategories";

export default function AllActivities() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Parse selected category IDs
  const selectedCategoryIds = useMemo(() => {
    const value = searchParams.get("categories");
    return value ? value.split("-") : [];
  }, [searchParams]);

  // Activities API
  const { data: activities = [], isLoading: activityLoading } = useGetEvents(
    "activity",
    {
      category: selectedCategoryIds.join("-"),
    }
  );

  // Categories API
  const { data: categories = [] } = useGetCategories();

  const handleCategoryToggle = (categoryId) => {
    const idStr = String(categoryId);
    const currentIds = [...selectedCategoryIds];
    const index = currentIds.indexOf(idStr);

    if (index > -1) {
      currentIds.splice(index, 1);
    } else {
      currentIds.push(idStr);
    }

    if (currentIds.length > 0) {
      searchParams.set("categories", currentIds.join("-"));
    } else {
      searchParams.delete("categories");
    }

    setSearchParams(searchParams);
  };

  const clearAllCategories = () => {
    searchParams.delete("categories");
    setSearchParams(searchParams);
  };

  const isSelected = (id) => selectedCategoryIds.includes(String(id));

  return (
    <section className="all-events-page py-5">
      <div className="container">
        <div className="page_head mb-4">
          <h1 className="page-title">{t("allActivities")}</h1>
        </div>

        {/* Categories Swiper */}
        <Swiper spaceBetween={10} slidesPerView={"auto"} centeredSlides={true}>
          {/* All Category */}
          <SwiperSlide style={{ width: "auto", height: "auto" }}>
            <div
              className={`category-chip text-center px-3 py-2 rounded ${
                selectedCategoryIds.length === 0 ? "checked " : ""
              }`}
              onClick={clearAllCategories}
              style={{ cursor: "pointer" }}
            >
              {" "}
              <img
                style={{ width: "20px", height: "20px" }}
                src={"/w-icons/all.svg"}
              />
              <div className="title">{t("all")}</div>
            </div>
          </SwiperSlide>

          {/* Dynamic Categories */}
          {categories.map((category) => (
            <SwiperSlide
              key={category.id}
              style={{ width: "auto", height: "auto" }}
            >
              <div
                className={`category-chip text-center px-3 py-2 rounded ${
                  isSelected(category.id) ? "checked" : ""
                }`}
                onClick={() => handleCategoryToggle(category.id)}
                style={{ cursor: "pointer" }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={category?.icon}
                />
                <div className="title">{category?.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Activities Grid */}
        <div className="row g-4 mt-4">
          {activityLoading
            ? Array(4)
                .fill()
                .map((_, i) => (
                  <div className="col-lg-4 col-md-6 p-2" key={i}>
                    <EventCardLoader />
                  </div>
                ))
            : activities.map((activity) => (
                <div className="col-lg-4 col-md-6 p-2" key={activity.id}>
                  <ActivityCard activity={activity} />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
