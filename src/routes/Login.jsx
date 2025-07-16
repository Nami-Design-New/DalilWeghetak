
import { useState } from "react";
import { useNavigate } from "react-router"; 
import InputField from "../ui/forms/InputField";
import PasswordField from "../ui/forms/PasswordField";
import SubmitButton from "../ui/forms/SubmitButton";
import AccountTypeModal from "../ui/modals/AccountTypeModal";
import { useTranslation } from "react-i18next";
import useLogin from "../hooks/auth/useLogin";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { register, handleSubmit, errors, isLoading } = useLogin(t);


  const handleAccountTypeSelect = (type) => {
    if (type === "user") {
      navigate("/user-signup",  { state: { type } });
    } else if (type === "service_provider") {
      navigate("/provider-signup", { state: { type } });
    }
  };

  return (
    <>
      <section className="auth_section mt-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 p-3">
              <form className="form_ui" onSubmit={handleSubmit}>
                <h3 className="section_title">{t("login.title")}</h3>
                <p className="section_description">{t("login.description")}</p>

                <div className="form_group">
                  <InputField
                    label={t("login.phoneLabel")}
                    type="phone"
                    placeholder={t("login.phonePlaceholder")}
                    {...register("phone")}
                    error={errors.phone?.message}
                  />
                </div>

                <div className="form_group">
                  <PasswordField
                    label={t("login.passwordLabel")}
                    placeholder={t("login.passwordPlaceholder")}
                    {...register("password")}
                    error={errors.password?.message}
                  />
                </div>

                <span className="link" onClick={() => navigate("/reset-password")}>
                  {t("login.forgotPassword")}
                </span>

                <SubmitButton
                  text={t("login.submit")}
                  loading={isLoading}
                  className="mt-3"
                />

                <p className="note">
                  {t("login.noAccount")}{" "}
                  <span onClick={() => setShowModal(true)} className="link">
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

      <AccountTypeModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onSelect={handleAccountTypeSelect}
      />
    </>
  );
}
