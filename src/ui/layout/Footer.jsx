import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer text-white pt-5 pb-3">
      <img
        src="/images/footerpatt.PNG"
        alt="footer pattern"
        className="footer-pattern"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 p-2 d-flex flex-column align-items-start">
            <img src="/images/logo.svg" alt="logo" className="mb-3 logo" />
            <p className="footer-desc">{t("footer.description")}</p>
          </div>

          <div className="col-lg-4 col-md-6 p-2">
            <h5>{t("footer.usefulLinks")}</h5>
            <ul>
              <li>
                <Link to="/">{t("footer.home")}</Link>
              </li>
              <li>
                <Link to="/about">{t("footer.about")}</Link>
              </li>
              <li>
                <Link to="/terms">{t("footer.terms")}</Link>
              </li>
              <li>
                <Link to="/privacy">{t("footer.privacy")}</Link>
              </li>
              {/* <li>
                <Link to="/faq">{t("footer.FAQs")}</Link>
              </li> */}
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 p-2">
            <h5>{t("footer.downloadApp")}</h5>
            <div className="d-flex gap-3">
              <img src="/icons/googleplay.svg" alt="google play" />
              <img src="/icons/appstore.svg" alt="app store" />
            </div>
          </div>
        </div>

        <div className="text-center mt-4 footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.copyright")}{" "}
            {t("footer.dalilweghetak")}
          </p>
        </div>
      </div>
    </footer>
  );
}
