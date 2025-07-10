import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import InputField from "../ui/forms/InputField";
import SubmitButton from "../ui/forms/SubmitButton";
import TextareaField from "../ui/forms/TextareaField";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AddEventForm() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedImage, setSelectedImage] = useState(null);

  const onSubmit = (data) => {
    console.log("Event Data:", data);
    console.log("Selected Image:", selectedImage);
  };

  return (
    <section className="auth_section mt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-3">
            <Form className="form_ui" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="section_title">{t("addEvent.title")}</h3>
              <p className="section_description">{t("addEvent.description")}</p>

              <div className="form_group">
                <label className="upload_box">
                  {selectedImage ? (
                    <img src={URL.createObjectURL(selectedImage)} alt="event" />
                  ) : (
                    <div className="upload_placeholder">
                      <i className="fa-solid fa-cloud-arrow-up"></i>
                      <p>{t("addEvent.upload")}</p>
                      <span>{t("addEvent.clickToSelect")}</span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>

              <div className="form_group d-flex gap-3 flex-column flex-md-row">
                <InputField
                  label={t("addEvent.mainCategory")}
                  placeholder={t("addEvent.mainCategoryPlaceholder")}
                  {...register("mainCategory", {
                    required: t("addEvent.mainCategoryRequired"),
                  })}
                />
                <InputField
                  label={t("addEvent.subCategory")}
                  placeholder={t("addEvent.subCategoryPlaceholder")}
                  {...register("subCategory", {
                    required: t("addEvent.subCategoryRequired"),
                  })}
                />
              </div>

              <div className="form_group d-flex gap-3 flex-column flex-md-row">
                <InputField
                  label={t("addEvent.region")}
                  placeholder={t("addEvent.regionPlaceholder")}
                  {...register("region", {
                    required: t("addEvent.regionRequired"),
                  })}
                />
                <InputField
                  label={t("addEvent.city")}
                  placeholder={t("addEvent.cityPlaceholder")}
                  {...register("city", {
                    required: t("addEvent.cityRequired"),
                  })}
                />
              </div>

              <div className="form_group">
                <InputField
                  label={t("addEvent.price")}
                  placeholder={t("addEvent.pricePlaceholder")}
                  {...register("price", {
                    required: t("addEvent.priceRequired"),
                  })}
                />
              </div>

              <div className="form_group d-flex gap-3 flex-column flex-md-row">
                <InputField
                  type="date"
                  label={t("addEvent.startDate")}
                  {...register("startDate", {
                    required: t("addEvent.startDateRequired"),
                  })}
                />
                <InputField
                  type="date"
                  label={t("addEvent.endDate")}
                  {...register("endDate", {
                    required: t("addEvent.endDateRequired"),
                  })}
                />
              </div>

              <div className="form_group d-flex gap-3 flex-column flex-md-row">
                <InputField
                  type="time"
                  label={t("addEvent.startTime")}
                  {...register("startTime", {
                    required: t("addEvent.startTimeRequired"),
                  })}
                />
                <InputField
                  type="time"
                  label={t("addEvent.endTime")}
                  {...register("endTime", {
                    required: t("addEvent.endTimeRequired"),
                  })}
                />
              </div>

              <div className="form_group">
                <TextareaField
                  label={t("addEvent.about")}
                  rows={4}
                  {...register("aboutEvent", {
                    required: t("addEvent.aboutRequired"),
                  })}
                  error={errors.aboutEvent?.message}
                />
              </div>

              <SubmitButton text={t("addEvent.submit")} />
            </Form>
          </div>
           <div className="col-lg-6 d-none d-lg-block p-3">
              <div className="auth-image-wrapper">
                <img src="/images/add.jpg" alt="Saudi Travel" />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
