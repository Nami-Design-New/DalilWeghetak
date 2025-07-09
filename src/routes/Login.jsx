import { useState } from "react";
import { Link } from "react-router";
import InputField from "../ui/forms/InputField";
import PasswordField from "../ui/forms/PasswordField";
import SubmitButton from "../ui/forms/SubmitButton";
import AccountTypeModal from "../ui/modals/AccountTypeModal";
import { useTranslation } from "react-i18next";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <section className="auth_section mt-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 p-3">
              <form className="form_ui">
                <h3 className="section_title">{t("login.title")}</h3>
                <p className="section_description">{t("login.description")}</p>

                <div className="form_group">
                  <InputField
                    label={t("login.phoneLabel")}
                    type="Phone"
                    placeholder={t("login.phonePlaceholder")}
                  />
                </div>

                <div className="form_group">
                  <PasswordField
                    label={t("login.passwordLabel")}
                    placeholder={t("login.passwordPlaceholder")}
                  />
                </div>

                <Link to="/reset-password" className="link">
                  {t("login.forgotPassword")}
                </Link>

                <SubmitButton text={t("login.submit")} className="mt-3" />

                <p className="note">
                  {t("login.noAccount")}{" "}
                  <span
                    onClick={() => setShowModal(true)}
                    className="link"
                  >
                    {t("login.createAccount")}
                  </span>
                </p>
              </form>
            </div>

            <div className="col-lg-6 d-none d-lg-block p-3">
              <div className="auth-image-wrapper">
                <img src="/images/auth.jpg" alt="Saudi Travel" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccountTypeModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}
