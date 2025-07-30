import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import i18next from "i18next";
import UserDropDown from "./UserDropDown";

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem("lang") || "ar");
  const [cookies] = useCookies(["token"]);
  const isAuthed = Boolean(cookies.token);

  const handleLanguageChange = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    i18next.changeLanguage(newLang);

    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.classList.toggle("en", newLang === "en");
    }

    window.location.reload();
  };

  useEffect(() => {
    const header = document.querySelector(".header");
    const nav = header?.querySelector("nav");

    const handleScroll = () => {
      const isSticky = window.scrollY > 0;
      header.classList.toggle("sticky", isSticky);
      nav?.classList.toggle("scrolled", isSticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const menu = document.querySelector(".nav_links");
      const toggleMenu = document.querySelector(".toggle_menu");
      if (
        !menu.contains(e.target) &&
        !toggleMenu.contains(e.target) &&
        !e.target.closest(".nav_links a")
      ) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleNavLinkClick = (e) => {
    setOpenMenu(false);
    navigate(e.target.getAttribute("to"));
  };

  return (
    <header className="header">
      <nav className="container">
        <div className={`layer ${openMenu ? "open" : ""}`}></div>

        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </Link>

        <div className={`nav_links ${openMenu ? "open" : ""}`}>
          <Link to="/" className="logo">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
          <NavLink to="/" onClick={handleNavLinkClick}>
            {t("header.home")}
          </NavLink>
          <NavLink to="/about" onClick={handleNavLinkClick}>
            {t("header.about")}
          </NavLink>
          <NavLink to="/plan" onClick={handleNavLinkClick}>
            {t("header.plan")}
          </NavLink>
          <NavLink to="/map" onClick={handleNavLinkClick}>
            {t("header.map")}
          </NavLink>
          <NavLink to="/contact" onClick={handleNavLinkClick}>
            {t("header.contact")}
          </NavLink>
        </div>

        <div className="actions">
          <button onClick={handleLanguageChange}>
            {lang === "ar" ? "EN" : "AR"}{" "}
            <i className="fa-regular fa-globe"></i>
          </button>
          {isAuthed && (
            <Link to="/notifications">
              {" "}
              <i
                className="fa-solid fa-bell"
                style={{ color: "#0048aa" }}
              ></i>{" "}
            </Link>
          )}

          {isAuthed ? (
            <UserDropDown />
          ) : (
            <Link to="/signin" className="login">
              {t("header.login")}
            </Link>
          )}

          <button className="toggle_menu" onClick={handleToggleMenu}>
            <i className="fa-regular fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
