import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { useMemo } from "react";
import { useSearchParams } from "react-router";

import ActivityCard from "../ui/cards/ActivityCard";
import useGetEvents from "../hooks/events/useGetEvents";
import EventCardLoader from "../ui/loader/EventCardLoader";
import useGetCategories from "../hooks/home/useGetCategories";

export default function AllActivities() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategoryId = searchParams.get("category");

  // Activities Data
  const { data: activities = [], isLoading: activityLoading } = useGetEvents(
    "activity",
    {
      category: selectedCategoryId,
    }
  );

  // Categories Data
  const { data: categories = [] } = useGetCategories();

  const handleCategoryToggle = (categoryId) => {
    const currentId = searchParams.get("category");
    if (currentId === String(categoryId)) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", categoryId);
    }
    setSearchParams(searchParams);
  };

  const selectedCategoryName = useMemo(() => {
    if (!selectedCategoryId) return null;
    const category = categories.find(
      (cat) => String(cat.id) === selectedCategoryId
    );
    return category?.name || selectedCategoryId;
  }, [selectedCategoryId, categories]);

  return (
    <section className="all-events-page py-5">
      <div className="container">
        <div className="d-flex justify-content-between page_head">
          <h1 className="page-title">{t("allActivities")}</h1>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-categories">
              {selectedCategoryId
                ? `${t("category")}: ${selectedCategoryName}`
                : t("categories")}
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ padding: "10px" }}
              onClick={(e) => e.stopPropagation()}
            >
              {categories.map((category) => (
                <label
                  htmlFor={`cat-${category.id}`}
                  className="dropdown-item"
                  key={category.id}
                >
                  <input
                    type="radio"
                    name="category"
                    id={`cat-${category.id}`}
                    checked={String(category.id) === selectedCategoryId}
                    onChange={() => handleCategoryToggle(category.id)}
                  />
                  <span>{category.name}</span>
                </label>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="row g-4">
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
