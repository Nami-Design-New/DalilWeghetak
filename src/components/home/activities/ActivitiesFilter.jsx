import { useSearchParams } from "react-router";
import useGetCategories from "../../../hooks/home/useGetCategories";
import { useTranslation } from "react-i18next";

export default function ActivitiesFilter() {
  const { t } = useTranslation();
  const { data: categories, isLoading } = useGetCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategories = searchParams.get("categories_id")
    ? searchParams
        .get("categories_id")
        .split("-")
        .map((id) => parseInt(id))
    : [];

  const handleActivitiesFilter = (id) => {
    let updatedCategories;

    if (selectedCategories.includes(id)) {
      // Remove category if it's already selected
      updatedCategories = selectedCategories.filter((catId) => catId !== id);
    } else {
      // Add new category
      updatedCategories = [...selectedCategories, id];
    }
    // Update the URL with the new format
    setSearchParams({
      categories_id: updatedCategories.join("-"),
    });
  };
  if (isLoading) return null;

  return (
    <div className="tabs">
      <button className="tab-button" onClick={() => handleActivitiesFilter("")}>
        <img src="/icons/all.svg" alt="" className="tab-icon" />
        <span className="tab-label">{t("all")}</span>
      </button>

      {categories.map((cat) => {
        const isSelected = selectedCategories.includes(cat.id);

        return (
          <button
            key={cat.id}
            type="button"
            className={`tab-button ${isSelected ? "active" : ""}`}
            onClick={() => handleActivitiesFilter(cat.id)}
          >
            <img src={cat.icon} className="tab-icon" />
            <span className="tab-label">{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}
