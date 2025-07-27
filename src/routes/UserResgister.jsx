import { useState } from "react";
import { FormProvider } from "react-hook-form";
import UserForm from "../components/register/UserForm";
import ConfirmCode from "../components/register/ConfirmCode";
import useRegister from "../hooks/auth/useRegister";

export default function UserRegister() {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  const [hashedCode, setHashedCode] = useState("");

  const type = "user";

  const methods = useRegister({
    type,
    setStep,
    code,
    setCode,
    hashedCode,
    setHashedCode,
  });

  return (
    <section className="auth_section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 p-3">
            <FormProvider {...methods}>
              {step === 1 && <UserForm type={type} />}
              {step === 2 && <ConfirmCode />}
            </FormProvider>
          </div>

          <div className="col-lg-6 d-none d-lg-block p-3">
            <div className="auth-image-wrapper">
              <img src="/images/auth.jpg" alt="دليل وجهتك" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
