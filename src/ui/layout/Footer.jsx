import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer text-white pt-5 pb-3">
      <div className="container">
        <div className="app-links d-flex justify-content-between align-items-center flex-wrap mb-4">
          <div className="newsletter d-flex">
            <Form.Control
              type="email"
              placeholder={t("footer.email")}
              className="me-2"
            />
            <button className="btn join-btn">{t("footer.subscribe")}</button>
          </div>

          <div className="d-flex gap-3">
            <img src="/icons/googleplay.svg" alt="google play" />
            <img src="/icons/appstore.svg" alt="app store" />
          </div>
        </div>
      </div>

      <img
        src="/images/footerpatt.PNG"
        alt="footer pattern"
        className="footer-pattern"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 p-2 d-flex flex-column align-items-start">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="mb-3 logo"
            />
            <img src="/images/saudilogo.png" alt="tourism" className="mb-3 tourism" />
          </div>

          {/* Discover Saudi */}
          <div className="col-lg-3 col-md-6 p-2">
            <h5>{t("footer.services")}</h5>
            <ul>
              <li><Link to="#">{t("footer.ser1")}</Link></li>
              <li><Link to="#">{t("footer.ser2")}</Link></li>
              <li><Link to="#">{t("footer.ser3")}</Link></li>
              <li><Link to="#">{t("footer.ser4")}</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-lg-3 col-md-6 p-2">
            <h5>{t("footer.usefulLinks")}</h5>
            <ul>
              <li><Link to="/">{t("footer.home")}</Link></li>
              <li><Link to="/about">{t("footer.about")}</Link></li>
              <li><Link to="/terms">{t("footer.terms")}</Link></li>
              <li><Link to="/privacy">{t("footer.privacy")}</Link></li>
              <li><Link to="/faq">{t("footer.FAQs")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6 p-2">
            <h5>{t("footer.contact")}</h5>
            <p className="footer-desc">{t("footer.description")}</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons mt-4 d-flex gap-3">
          <Link to="#"><i className="fab fa-facebook-f"></i></Link>
          <Link to="#"><i className="fab fa-instagram"></i></Link>
          <Link to="#"><i className="fab fa-youtube"></i></Link>
        </div>

        {/* CopyRights */}
        <div className="text-center mt-4 footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.copyright")} {t("footer.dalilweghetak")}
          </p>
        </div>
      </div>
    </footer>
  );
}
