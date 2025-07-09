import { useState } from "react";
import { Link } from "react-router";
import InputField from "../../ui/forms/InputField";
import SubmitButton from "../../ui/forms/SubmitButton";

export default function Step1() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم إدخال الإيميل:", email);
  };

  return (
    <>
      <h3 className="section_title">استعادة كلمة المرور</h3>
      <p className="section_description">
        أدخل بريدك الإلكتروني وسنرسل لك رمز التحقق.
      </p>

      <form className="form_ui mt-5" onSubmit={handleSubmit}>
        <div className="form_group mb-4">
          <InputField
            label="البريد الإلكتروني"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
          />
        </div>

        <div className="reset_btns d-flex justify-content-between align-items-center">
          <Link to="/signin" aria-label="العودة" className="back_btn">
            <i className="fal fa-arrow-right "></i> 
          </Link>

          <SubmitButton text="إرسال" loading={false} />
        </div>
      </form>
    </>
  );
}
