import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Link } from "react-router";
import InputField from "../ui/forms/InputField";
import PasswordField from "../ui/forms/PasswordField";
import SubmitButton from "../ui/forms/SubmitButton";
import ImageUpload from "../ui/forms/ImageUpload";
import { useTranslation } from "react-i18next";

export default function UserRegister() {
  const { t } = useTranslation();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("User form data:", data);
  };

  return (
    <section className="auth_section mt-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 p-3">
            <Form className="form_ui" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="section_title">{t("userRegister.title")}</h3>
              <p className="section_description">
                {t("userRegister.description")}
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
                  label={t("userRegister.name")}
                  placeholder={t("userRegister.namePlaceholder")}
                  {...register("name", {
                    required: t("userRegister.nameRequired"),
                  })}
                  error={errors.name?.message}
                />
                <InputField
                  type="tel"
                  label={t("userRegister.phone")}
                  placeholder={t("userRegister.phonePlaceholder")}
                  {...register("phone", {
                    required: t("userRegister.phoneRequired"),
                  })}
                  error={errors.phone?.message}
                />
              </div>

              <div className="form_group d-flex gap-3 flex-column flex-md-row">
                <InputField
                  label={t("userRegister.email")}
                  placeholder={t("userRegister.emailPlaceholder")}
                  {...register("email", {
                    required: t("userRegister.emailRequired"),
                  })}
                  error={errors.email?.message}
                />
                <PasswordField
                  label={t("userRegister.password")}
                  placeholder={t("userRegister.passwordPlaceholder")}
                  {...register("password", {
                    required: t("userRegister.passwordRequired"),
                  })}
                  error={errors.password?.message}
                />
              </div>

              <Form.Check
                type="checkbox"
                label={
                  <>
                    {t("userRegister.termsText")}{" "}
                    <Link to="/terms-conditions">
                      {t("userRegister.termsLink")}
                    </Link>
                    *
                  </>
                }
                {...register("terms", {
                  required: t("userRegister.termsRequired"),
                })}
                className="my-3"
              />
              {errors.terms && (
                <p className="text-danger">{errors.terms.message}</p>
              )}

              <SubmitButton text={t("userRegister.submit")} />

              <p className="note mt-3">
                {t("userRegister.haveAccount")}{" "}
                <Link to="/signin">{t("userRegister.login")}</Link>
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
