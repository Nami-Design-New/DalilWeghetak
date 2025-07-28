import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ar } from "date-fns/locale";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useSearchParams } from "react-router";
import InputField from "../../ui/forms/InputField";
import useGetCities from "../../hooks/home/useCities";
import useGetCategories from "../../hooks/home/useGetCategories";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function TopFilter() {
  const { t } = useTranslation();
  const { data: cities = [] } = useGetCities();
  const { data: categories = [] } = useGetCategories();

  const [searchParams, setSearchParams] = useSearchParams();
  const [showDate, setShowDate] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const cityParam = searchParams.get("city");
    const categoriesParam = searchParams.get("categories");
    const search = searchParams.get("search");

    if (search) setSearchText(search);

    if (from && to) {
      setDateRange([
        {
          startDate: new Date(from),
          endDate: new Date(to),
          key: "selection",
        },
      ]);
    }

    if (cityParam) {
      setSelectedCity(cityParam);
    }

    if (categoriesParam) {
      setSelectedCategories(categoriesParam.split("-"));
    }
  }, [searchParams]);

  const handleCategoryToggle = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const startDate = format(dateRange[0].startDate, "yyyy-MM-dd");
    const endDate = format(dateRange[0].endDate, "yyyy-MM-dd");

    const params = {
      from: startDate,
      to: endDate,
    };

    if (searchText) params.search = searchText;
    if (selectedCity) params.city = selectedCity;
    if (selectedCategories.length)
      params.categories = selectedCategories.join("-");

    setSearchParams(params);
  };

  return (
    <div className="top_filter">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <InputField
            placeholder={t("search")}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {/* Cities Dropdown (واحد فقط) */}
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-cities">
              {selectedCity
                ? `${t("places")}: ${
                    cities.find((c) => String(c.id) === selectedCity)?.name ||
                    ""
                  }`
                : t("places")}
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ padding: "10px" }}
              onClick={(e) => e.stopPropagation()}
            >
              {cities.map((city) => (
                <div className="dropdown-item" key={city.id}>
                  <input
                    type="radio"
                    name="city"
                    id={`city-${city.id}`}
                    className="me-2"
                    checked={String(city.id) === selectedCity}
                    onChange={() => setSelectedCity(String(city.id))}
                  />
                  <label htmlFor={`city-${city.id}`}>{city.name}</label>
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Categories Dropdown (متعدد) */}
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-categories">
              {selectedCategories.length
                ? `${t("categories")}: ${selectedCategories
                    .map(
                      (id) =>
                        categories.find((cat) => String(cat.id) === id)?.name
                    )
                    .filter(Boolean)
                    .join(", ")}`
                : t("categories")}
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ padding: "10px" }}
              onClick={(e) => e.stopPropagation()}
            >
              {categories.map((category) => (
                <div className="dropdown-item" key={category.id}>
                  <input
                    type="checkbox"
                    name="category"
                    id={`cat-${category.id}`}
                    className="me-2"
                    checked={selectedCategories.includes(String(category.id))}
                    onChange={() => handleCategoryToggle(String(category.id))}
                  />
                  <label htmlFor={`cat-${category.id}`}>{category.name}</label>
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Dates Dropdown */}
          <Dropdown show={showDate} onToggle={() => setShowDate(!showDate)}>
            <Dropdown.Toggle variant="success" id="dropdown-dates">
              {t("dates")}: {format(dateRange[0].startDate, "yyyy-MM-dd")} -{" "}
              {format(dateRange[0].endDate, "yyyy-MM-dd")}
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ padding: "10px", width: "fit-content" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ direction: "rtl" }}>
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDateRange([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                  locale={ar}
                />
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <button type="submit" className="submit">
            <i className="fa-regular fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

