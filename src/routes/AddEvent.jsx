import { useState } from "react";
import { useTranslation } from "react-i18next";
import Step1 from "../components/add-event/Step1";
import Step2 from "../components/add-event/Step2";
import useAddEventForm from "../hooks/addEventsForm/useAddEventForm";

export default function AddEvent() {
  const [step, setStep] = useState(1);
  const { t } = useTranslation();
  const { methods, triggerStep, FormProvider, isPending, addEventMutation } =
    useAddEventForm();

  const handleNext = async () => {
    const valid = await triggerStep(step);
    if (valid) setStep(step + 1);
  };

  return (
    <section className="auth_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-3">
            <FormProvider {...methods}>
              <form
                className="form_ui"
                onSubmit={methods.handleSubmit(addEventMutation)}
              >
                <div className="steps">
                  <div className={`step ${step >= 1 ? "active" : ""}`}>
                    <div className="icon">
                      <img src="/icons/event-details.svg" alt="" />
                    </div>
                    <span>{t("addEventForm.step1")}</span>
                  </div>
                  <div className={`step ${step === 2 ? "active" : ""}`}>
                    <div className="icon">
                      <img src="/icons/check.svg" alt="" />
                    </div>
                    <span>{t("addEventForm.step2")}</span>
                  </div>
                </div>

                {step === 1 && <Step1 onNext={handleNext} />}
                {step === 2 && (
                  <Step2 onBack={() => setStep(1)} isPending={isPending} />
                )}
              </form>
            </FormProvider>
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
