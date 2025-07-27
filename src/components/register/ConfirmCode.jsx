import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import OtpContainer from "../../ui/forms/OtpContainer";
import SubmitButton from "../../ui/forms/SubmitButton";

export default function ConfirmCode() {
  const { t } = useTranslation();
  const {
    checkCode,
    canRegister,
    setCode,
    isLoading,
  } = useFormContext();

  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  return (
    <>
      <h3 className="section_title">{t("auth.confirmCode")}</h3>
      <p className="section_description">{t("auth.enterCodeSent")}</p>

      <form
        className="form_ui mt-5"
        onSubmit={(e) => {
          e.preventDefault();
          checkCode();
        }}
      >
        <div className="form_group mb-4">
          <OtpContainer setCode={setCode} />
        </div>

        <div className="resend-code">
          <span className={`resend_link ${resendDisabled ? "disabled" : ""}`}>
            {t("auth.didnotReceiveCode")}
            <span
              className=""
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (!resendDisabled) {
                  canRegister();
                  setResendDisabled(true);
                  setTimer(60);
                }
              }}
            >
              {t("auth.resendCode")}
            </span>
          </span>
          <div className="timer" style={{ display: "flex", justifyContent: "end" }}>
            <span>{Math.floor(timer / 60).toString().padStart(2, "0")}</span>:
            <span>{(timer % 60).toString().padStart(2, "0")}</span>
          </div>
        </div>

        <div className="reset_btns">
          <div aria-label="Back" className="back_btn" onClick={() => history.back()}>
            <i className="fal fa-arrow-right"></i>
          </div>

          <SubmitButton text={t("auth.confirm")} loading={isLoading} />
        </div>
      </form>
    </>
  );
}
