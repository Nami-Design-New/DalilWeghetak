import { Form } from "react-bootstrap";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import InputField from "../../ui/forms/InputField";
import PasswordField from "../../ui/forms/PasswordField";
import SubmitButton from "../../ui/forms/SubmitButton";
import ImageUpload from "../../ui/forms/ImageUpload";

export default function UserForm() {
  const { t } = useTranslation();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    canRegister,
    canRegisterPending,
  } = useFormContext();

  return (
    <Form className="form_ui" onSubmit={handleSubmit(() => canRegister())}>
      <h3 className="section_title">{t("userRegister.title")}</h3>
      <p className="section_description">{t("userRegister.description")}</p>

      <div className="form_group">
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
          {...register("name")}
          error={errors.name?.message}
        />
        <InputField
          type="tel"
          label={t("userRegister.phone")}
          placeholder={t("userRegister.phonePlaceholder")}
          {...register("phone")}
          error={errors.phone?.message}
        />
      </div>

      <div className="form_group d-flex gap-3 flex-column flex-md-row">
        <InputField
          label={t("userRegister.email")}
          placeholder={t("userRegister.emailPlaceholder")}
          {...register("email")}
          error={errors.email?.message}
        />
        <PasswordField
          label={t("userRegister.password")}
          placeholder={t("userRegister.passwordPlaceholder")}
          {...register("password")}
          error={errors.password?.message}
        />
      </div>

      <Form.Check
        type="checkbox"
        label={
          <>
            {t("userRegister.termsText")}{" "}
            <Link to="/terms">{t("userRegister.termsLink")}</Link> *
          </>
        }
        {...register("terms")}
        className="my-3"
      />
      {errors.terms && (
        <p className="text-danger" style={{ fontSize: "12px" }}>
          {errors.terms.message}
        </p>
      )}

      <SubmitButton
        text={t("userRegister.submit")}
        loading={canRegisterPending}
      />

      <p className="note mt-3">
        {t("userRegister.haveAccount")}{" "}
        <Link to="/signin">{t("userRegister.login")}</Link>
      </p>
    </Form>
  );
}
