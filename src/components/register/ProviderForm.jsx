import { Form } from "react-bootstrap";
import { Link } from "react-router";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import SubmitButton from "../../ui/forms/SubmitButton";
import PasswordField from "../../ui/forms/PasswordField";
import ImageUpload from "../../ui/forms/ImageUpload";
import TextareaField from "../../ui/forms/TextareaField";

export default function ProviderForm() {
  const { t } = useTranslation();

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
    canRegister,
    canRegisterPending,
  } = useFormContext();

  return (
    <Form className="form_ui" onSubmit={handleSubmit(() => canRegister())}>
      <h3 className="section_title">{t("providerRegister.title")}</h3>
      <p className="section_description">{t("providerRegister.description")}</p>

      <div className="form_group">
        <ImageUpload
          setValue={setValue}
          watch={watch}
          error={errors.image?.message}
        />
      </div>

      <div className="form_group d-flex gap-3 flex-column flex-md-row">
        <InputField
          label={t("providerRegister.name")}
          placeholder={t("providerRegister.namePlaceholder")}
          {...register("name")}
          error={errors.name?.message}
        />
        <InputField
          label={t("providerRegister.email")}
          placeholder={t("providerRegister.emailPlaceholder")}
          {...register("email")}
          error={errors.email?.message}
        />
      </div>

      <div className="form_group d-flex gap-3 flex-column flex-md-row">
        <InputField
          type="tel"
          label={t("providerRegister.phone")}
          placeholder={t("providerRegister.phonePlaceholder")}
          {...register("phone")}
          error={errors.phone?.message}
        />
        <PasswordField
          label={t("providerRegister.password")}
          placeholder={t("providerRegister.passwordPlaceholder")}
          {...register("password")}
          error={errors.password?.message}
        />
      </div>

      <div className="form_group">
        <TextareaField
          label={t("providerRegister.activity")}
          rows={4}
          {...register("activity")}
          error={errors.activity?.message}
        />
      </div>

      <div className="form_group">
        <TextareaField
          label={t("providerRegister.descriptionLabel")}
          rows={6}
          {...register("bio")}
          error={errors.bio?.message}
        />
      </div>

      <Form.Check
        type="checkbox"
        label={
          <>
            {t("providerRegister.termsText")}{" "}
            <Link to="/terms">{t("providerRegister.termsLink")}</Link> *
          </>
        }
        {...register("terms")}
        className="my-3"
      />
      {errors.terms && <p className="text-danger">{errors.terms.message}</p>}

      <SubmitButton
        text={t("providerRegister.submit")}
        loading={canRegisterPending}
      />

      <p className="note">
        {t("providerRegister.haveAccount")}{" "}
        <Link to="/signin">{t("providerRegister.login")}</Link>
      </p>
    </Form>
  );
}
