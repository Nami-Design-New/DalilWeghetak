import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import useGetCities from "./../../hooks/home/useCities";
import useGetCategories from "./../../hooks/home/useGetCategories";

export default function TopFilter() {
  const { t } = useTranslation();
  const { data: cities } = useGetCities();
  const { data: categories } = useGetCategories();
  return (
    <div className="top_filter">
      <div className="container">
        <form className="form_ui">
          <InputField placeholder={t("search")} />

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {t("places")}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {cities?.map((city) => (
                <Dropdown.Item as={"div"} key={city.id}>
                  <input type="checkbox" name="city" id={city.id} />
                  <label htmlFor={city.id}>{city.name}</label>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {t("categories")}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {
              }
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {t("dates")}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
