import { useState } from "react";
import SubmitButton from "../../ui/forms/SubmitButton";
import PasswordField from "../../ui/forms/PasswordField";
import { useTranslation } from "react-i18next";

export default function Step3({ setStep }) {
  const { t } = useTranslation();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    console.log("كلمة المرور الجديدة:", password);
    console.log("تأكيد كلمة المرور:", passwordConfirm);
  };

  return (
    <>
      <h3 className="section_title">{t("resetPassword2.title")}</h3>
      <p className="section_description">
        {t("resetPassword2.description")}
      </p>

      <form className="form_ui mt-5" onSubmit={handleReset}>
        <div className="form_group mb-4">
          <PasswordField
            label={t("resetPassword2.newPassword")}
            placeholder={t("resetPassword2.newPasswordPlaceholder")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form_group mb-4">
          <PasswordField
            label={t("resetPassword2.confirmPassword")}
            placeholder={t("resetPassword2.confirmPasswordPlaceholder")}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <div className="reset_btns d-flex justify-content-between align-items-center">
          <div
            aria-label={t("resetPassword2.back")}
            className="back_btn"
            onClick={() => setStep(2)}
          >
            <i className="fal fa-arrow-right me-2"></i> {t("resetPassword2.back")}
          </div>

          <SubmitButton text={t("resetPassword2.confirm")} loading={loading} />
        </div>
      </form>
    </>
  );
}
