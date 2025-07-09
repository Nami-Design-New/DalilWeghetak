import { useEffect, useState } from "react";
import SubmitButton from "../../ui/forms/SubmitButton";
import OtpContainer from "../../ui/forms/OtpContainer";

export default function Step2({ setStep, email }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("الكود المدخل:", code);
    setStep(3); 
  };

  const handleResend = () => {
    setResendDisabled(true);
    setTimer(60);
    console.log("إعادة إرسال الكود إلى:", email);
  };

  return (
    <>
      <h3 className="section_title">تأكيد الرمز</h3>
      <p className="section_description">
        أدخل الرمز المكون من 6 أرقام المُرسل إلى بريدك الإلكتروني: {email}
      </p>

      <form className="form_ui mt-5" onSubmit={handleSubmit}>
        <div className="form_group mb-4">
          <OtpContainer setCode={setCode} />
        </div>

        <div className="resend-code mb-3">
          <span className={`resend_link ${resendDisabled ? "disabled" : ""}`}>
            لم يصلك الرمز؟{" "}
            <span
              onClick={handleResend}
              style={{ cursor: resendDisabled ? "not-allowed" : "pointer" }}
            >
              إعادة الإرسال
            </span>
          </span>
          <div className="timer text-end mt-2">
            <span>{String(Math.floor(timer / 60)).padStart(2, "0")}</span>:
            <span>{String(timer % 60).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="reset_btns d-flex justify-content-between align-items-center">
          <div aria-label="Back" className="back_btn" onClick={() => setStep(1)}>
            <i className="fal fa-arrow-right me-2"></i> الرجوع
          </div>

          <SubmitButton text="تأكيد" loading={loading} />
        </div>
      </form>
    </>
  );
}
