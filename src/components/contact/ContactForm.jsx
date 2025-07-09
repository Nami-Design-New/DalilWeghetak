import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";

export default function ContactForm() {
  const { t } = useTranslation();

  return (
    <div className="row">
      <div className="col-12 p-2 mt-5 mb-3">
        <h4 className="title">{t("contact.formTitle")}</h4>
        <p className="description">{t("contact.formDescription")}</p>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <form className="form_ui d-flex flex-column gap-3">
          <InputField
            label={t("contact.name")}
            placeholder={t("contact.namePlaceholder")}
          />

          <InputField
            label={t("contact.email")}
            type="email"
            placeholder={t("contact.emailPlaceholder")}
          />

          <InputField
            label={t("contact.subject")}
            placeholder={t("contact.subjectPlaceholder")}
          />

          <InputField
            as="textarea"
            label={t("contact.message")}
            placeholder={t("contact.messagePlaceholder")}
          />

          <button className="submit_btn mt-2">
            {t("contact.sendMessage")}
          </button>
        </form>
      </div>

      <div className="col-lg-6 col-12 p-2">
        <img
          src="/images/contact.jpg"
          alt={t("contact.imageAlt")}
          className="contact_img"
        />
      </div>
    </div>
  );
}
