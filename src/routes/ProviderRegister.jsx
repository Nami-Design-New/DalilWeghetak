import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Link } from "react-router";
import InputField from "../ui/forms/InputField";
import SubmitButton from "../ui/forms/SubmitButton";
import PasswordField from "../ui/forms/PasswordField";
import ImageUpload from "../ui/forms/ImageUpload";
import TextareaField from "../ui/forms/TextareaField";
import { useTranslation } from "react-i18next";

export default function ProviderRegister() {
  const { t } = useTranslation();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <section className="auth_section mt-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 p-3">
            <Form className="form_ui" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="section_title">{t("providerRegister.title")}</h3>
              <p className="section_description">
                {t("providerRegister.description")}
              </p>

              <div className="form_group ">
                <ImageUpload
                  register={register}
                  watch={watch}
                  error={errors.image?.message}
                />
              </div>

              <div className="form_group d-flex gap-3 flex-column flex-md-row">
                <InputField
                  label={t("providerRegister.name")}
                  placeholder={t("providerRegister.namePlaceholder")}
                  {...register("firstName", {
                    required: t("providerRegister.nameRequired"),
                  })}
                />
                <InputField
                  label={t("providerRegister.email")}
                  placeholder={t("providerRegister.emailPlaceholder")}
                  {...register("email", {
                    required: t("providerRegister.emailRequired"),
                  })}
                />
              </div>

              <div className="form_group d-flex gap-3 flex-column flex-md-row">
                <InputField
                  type="tel"
                  label={t("providerRegister.phone")}
                  placeholder={t("providerRegister.phonePlaceholder")}
                  {...register("phone", {
                    required: t("providerRegister.phoneRequired"),
                  })}
                />
                <PasswordField
                  label={t("providerRegister.password")}
                  placeholder={t("providerRegister.passwordPlaceholder")}
                  {...register("password", {
                    required: t("providerRegister.passwordRequired"),
                  })}
                />
              </div>

              <div className="form_group">
                <TextareaField
                  label={t("providerRegister.activity")}
                  rows={4}
                  {...register("activityOverview", {
                    required: t("providerRegister.activityRequired"),
                  })}
                  error={errors.activityOverview?.message}
                />
              </div>

              <div className="form_group">
                <TextareaField
                  label={t("providerRegister.descriptionLabel")}
                  rows={6}
                  {...register("activityDescription", {
                    required: t("providerRegister.descriptionRequired"),
                  })}
                  error={errors.activityDescription?.message}
                />
              </div>

              <Form.Check
                type="checkbox"
                label={
                  <>
                    {t("providerRegister.termsText")}{" "}
                    <Link to="/terms-conditions">
                      {t("providerRegister.termsLink")}
                    </Link>
                    *
                  </>
                }
                {...register("terms", {
                  required: t("providerRegister.termsRequired"),
                })}
                className="my-3"
              />

              {errors.terms && (
                <p className="text-danger">{errors.terms.message}</p>
              )}

              <SubmitButton text={t("providerRegister.submit")} />

              <p className="note">
                {t("providerRegister.haveAccount")}{" "}
                <Link to="/signin">{t("providerRegister.login")}</Link>
              </p>
            </Form>
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
