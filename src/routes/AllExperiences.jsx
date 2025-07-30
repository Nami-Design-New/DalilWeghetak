import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { useMemo } from "react";
import { useSearchParams } from "react-router";
import useGetCities from "../hooks/home/useCities";
import useGetHighLights from "../hooks/hightlights/useGetHighLights";
import EventCardLoader from "../ui/loader/EventCardLoader";
import ExperienceCard from "../ui/cards/ExperienceCard";
import useGetCategories from "../hooks/home/useGetCategories";

export default function AllExperiences() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategoryId = searchParams.get("category");

  const { data: highlights, isLoading } = useGetHighLights();
  const { data: cities = [] } = useGetCities();
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
          <h1 className="page-title">{t("allExperiences")}</h1>

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
          {isLoading
            ? Array(4)
                .fill()
                .map((_, i) => (
                  <div className="col-lg-4 col-md-6 p-2" key={i}>
                    <EventCardLoader />
                  </div>
                ))
            : highlights.map((exp) => {
                const city = cities.find(
                  (c) => Number(c.id) === Number(exp.city_id)
                );

                return (
                  <div className="col-lg-4 col-md-6 p-2" key={exp.id}>
                    <ExperienceCard experience={exp} city={city} />
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
}
