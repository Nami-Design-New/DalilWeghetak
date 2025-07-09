import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

function ResponsiveNav() {
  const { t } = useTranslation();

  return (
    <div className="small_menu">
         <NavLink to="/notifications" className="menu_item">
        <i className="fa-regular fa-bell"></i>
        <span>{t("Notifications")}</span>
      </NavLink>
      <NavLink to="/" className="menu_item">
        <i className="fa-solid fa-house"></i>
        <span>{t("Home")}</span>
      </NavLink>

      <NavLink to="/settings" className="menu_item">
        <i className="fa-solid fa-gear"></i>
        <span>{t("Settings")}</span>
      </NavLink>

   
    </div>
  );
}

export default ResponsiveNav;
