import useGetCategories from "../../hooks/useGetCategories";
import { useTranslation } from "react-i18next";

export default function CategorySelect({ selectedCategory, onChange }) {
  const { data: categories = [], isLoading, isError } = useGetCategories();
  const { t } = useTranslation();

  if (isError) return <p>حدث خطأ أثناء جلب الفئات</p>;

  return (
    <div className="category_select">
      <label>{t("addEvent.addcat")}
        </label>
      <div className="category_list">
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="skeleton_card">
                <div className="skeleton_icon" />
                <div className="skeleton_text" />
              </div>
            ))
          : categories.map((cat) => (
              <label
                key={cat.id}
                htmlFor={`category-${cat.id}`}
                className={`category_card ${
                  selectedCategory === cat.id ? "active" : ""
                }`}
              >
                <input
                  type="radio"
                  name="category"
                  id={`category-${cat.id}`}
                  checked={selectedCategory === cat.id}
                  onChange={() => onChange(cat.id)}
                />
                <img src={cat.icon} alt={cat.name} />
                <span>{cat.name}</span>
              </label>
            ))}
      </div>
    </div>
  );
}
