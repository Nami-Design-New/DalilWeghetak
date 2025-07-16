import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import SubmitButton from "../../ui/forms/SubmitButton";
import OtpContainer from "../../ui/forms/OtpContainer";
import axiosInstance from "../../utils/axiosInstance";

export default function Step2({ setStep, hashed_code }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosInstance.post("/user/check_code", {
        hashed_code: hashed_code,
        code: code,
      });
      if (res.status === 200) {
        toast.success(t("auth.codeVerified", { hashed_code }));
        setStep(3);
      }
    } catch (error) {
      toast.error(t("auth.wrongCode"));
      console.log("error in step 2", error);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      const res = await axiosInstance.post("/user/check_code", {
        hashed_code: hashed_code,
        type: "reset_password ",
      });
      if (res.status === 200) {
        toast.success(t("auth.resetLinkSent", { hashed_code }));
        setResendDisabled(true);
        setTimer(60);
      } else {
        toast.error(t("auth.emailNotFound"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h3 className="section_title">{t("auth.resetPasswordTitle2")}</h3>
      <p className="section_description">
        {t("auth.resetPasswordSubtitle2", { hashed_code})}
      </p>

      <form className="form_ui mt-5" onSubmit={handleSubmit}>
        <div className="form_group mb-4">
          <OtpContainer setCode={setCode} />
        </div>

        <div className="resend-code">
          <span className={`resend_link ${resendDisabled ? "disabled" : ""}`}>
            {t("auth.didnotReceiveCode")}
            <span
              className=""
              style={{ cursor: "pointer" }}
              onClick={handleResend}
            >
              {t("auth.resendCode")}
            </span>
          </span>
          <div
            className="timer flex-row-reverse"
            style={{ justifyContent: "end !important" }}
          >
            <span>
              {Math.floor(timer / 60)
                .toString()
                .padStart(2, "0")}
            </span>
            :<span>{(timer % 60).toString().padStart(2, "0")}</span>
          </div>
        </div>

        <div className="reset_btns">
          <div
            aria-label="Back"
            className="back_btn"
            onClick={() => setStep(1)}
          >
            <i className="fal fa-arrow-right"></i>
          </div>

          <SubmitButton text={t("auth.confirm")} loading={loading} />
        </div>
      </form>
    </>
  );
}
