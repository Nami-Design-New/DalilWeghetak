import { useState } from "react";
import { Link } from "react-router";
import InputField from "../../ui/forms/InputField";
import SubmitButton from "../../ui/forms/SubmitButton";
import { useTranslation } from "react-i18next";

export default function Step1() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم إدخال الإيميل:", email);
  };

  return (
    <>
      <h3 className="section_title">{t("resetPassword.title")}</h3>
      <p className="section_description">{t("resetPassword.description")}</p>

      <form className="form_ui mt-5" onSubmit={handleSubmit}>
        <div className="form_group mb-4">
          <InputField
            label={t("resetPassword.emailLabel")}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder={t("resetPassword.emailPlaceholder")}
          />
        </div>

        <div className="reset_btns d-flex justify-content-between align-items-center">
          <Link to="/signin" aria-label={t("resetPassword.back")} className="back_btn">
            <i className="fal fa-arrow-right "></i>
          </Link>

          <SubmitButton text={t("resetPassword.send")} loading={false} />
        </div>
      </form>
    </>
  );
}
