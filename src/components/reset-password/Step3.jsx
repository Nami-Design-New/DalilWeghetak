import { useState } from "react";
import SubmitButton from "../../ui/forms/SubmitButton";
import PasswordField from "../../ui/forms/PasswordField";

export default function Step3({ setStep }) {
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
      <h3 className="section_title">إعادة تعيين كلمة المرور</h3>
      <p className="section_description">
        أنشئ كلمة مرور جديدة لحسابك.
      </p>

      <form className="form_ui mt-5" onSubmit={handleReset}>
        <div className="form_group mb-4">
          <PasswordField
            label="كلمة المرور الجديدة"
            placeholder="أدخل كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form_group mb-4">
          <PasswordField
            label="تأكيد كلمة المرور"
            placeholder="أعد إدخال كلمة المرور"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <div className="reset_btns d-flex justify-content-between align-items-center">
          <div
            aria-label="Back"
            className="back_btn"
            onClick={() => setStep(2)}
          >
            <i className="fal fa-arrow-right me-2"></i> الرجوع
          </div>

          <SubmitButton text="تأكيد" loading={loading} />
        </div>
      </form>
    </>
  );
}
