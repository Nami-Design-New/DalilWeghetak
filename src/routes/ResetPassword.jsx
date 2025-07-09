import { useState } from "react";
import Step1 from "../components/reset-password/Step1";
import Step2 from "../components/reset-password/Step2";
import Step3 from "../components/reset-password/Step3";

export default function ResetPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  return (
    <section className="auth_section main_section mt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-2 d-flex flex-column justify-content-center">
            {step === 1 && <Step1 setStep={setStep} email={email} setEmail={setEmail} />}
            {step === 2 && <Step2 setStep={setStep} email={email} />}
            {step === 3 && <Step3 setStep={setStep} email={email} />}
          </div>

         <div className="col-lg-6 d-none d-lg-block p-3">
              <div className="auth-image-wrapper">
                <img src="/images/auth.jpg" alt="Saudi Travel" />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}