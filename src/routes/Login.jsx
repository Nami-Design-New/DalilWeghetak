import { useState } from "react";
import { Link } from "react-router";
import InputField from "../ui/forms/InputField";
import PasswordField from "../ui/forms/PasswordField";
import SubmitButton from "../ui/forms/SubmitButton";
import AccountTypeModal from "../ui/modals/AccountTypeModal";

export default function Login() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="auth_section mt-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 p-3">
              <form className="form_ui">
                <h3 className="section_title">مرحبًا بعودتك إلى دليل وجهتك</h3>
                <p className="section_description">
                  سجّل دخولك لتتمكن من استكشاف وجهاتك، متابعة رحلاتك، وحفظ الأماكن المفضلة لديك.
                </p>

                <div className="form_group">
                  <InputField
                    label="رقم الهاتف"
                    type="Phone"
                    placeholder="أدخل رقم الهاتف"
                  />
                </div>

                <div className="form_group">
                  <PasswordField
                    label="كلمة المرور"
                    placeholder="أدخل كلمة المرور"
                  />
                </div>

                <Link to="/reset-password" className="link">
                  نسيت كلمة المرور؟
                </Link>

                <SubmitButton text="تسجيل الدخول" className="mt-3" />

                <p className="note">
                  ليس لديك حساب؟{" "}
                  <span
                    onClick={() => setShowModal(true)}
                    className="link"
                  >
                    إنشاء حساب جديد
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
