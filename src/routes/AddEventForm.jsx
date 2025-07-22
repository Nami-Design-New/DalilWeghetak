import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import InputField from "../ui/forms/InputField";
import SubmitButton from "../ui/forms/SubmitButton";
import TextareaField from "../ui/forms/TextareaField";
import FormSelector from "../ui/forms/ChooseField";
import CategorySelect from "../ui/forms/CategorySelect";
import { useState } from "react";
import useGetCities from "../hooks/home/useCities";
import { useTranslation } from "react-i18next";

export default function AddEventForm() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const category = watch("category");
  const [selectedImage, setSelectedImage] = useState(null);
  const [audience, setAudience] = useState("");
  const [step, setStep] = useState(1);
  const { data: cities = [], isLoading: isCitiesLoading } = useGetCities();
  const cityOptions = cities.map((city) => ({
    label: city.name,
    value: city.id,
  }));

  const onSubmit = (data) => {
    console.log("Event Data:", data);

    setStep(2);
  };

  return (
    <section className="auth_section ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-3">
            <Form className="form_ui" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="section_title">{t("addEvent.title")}</h3>
              <p className="section_description">{t("addEvent.description")}</p>

              {step === 1 && (
                <>
                  {/* STEP 1 */}
                  <div className="form_group">
                    <label className="upload_box">
                      {selectedImage ? (
                        <img
                          src={URL.createObjectURL(selectedImage)}
                          alt="event"
                        />
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
                      label={t("addEvent.titleLabel")}
                      placeholder={t("addEvent.titlePlaceholder")}
                      {...register("title", {
                        required: t("addEvent.titleRequired"),
                      })}
                      error={errors.title?.message}
                    />
                    <FormSelector
                      label={t("addEvent.city")}
                      placeholder={t("addEvent.cityPlaceholder")}
                      options={cityOptions}
                      {...register("city", {
                        required: t("addEvent.cityRequired"),
                      })}
                      error={errors.city?.message}
                    />
                  </div>

                  <div className="form_group">
                    <TextareaField
                      label={t("addEvent.descriptionLabel")}
                      rows={4}
                      placeholder={t("addEvent.descriptionPlaceholder")}
                      {...register("description", {
                        required: t("addEvent.descriptionRequired"),
                      })}
                      error={errors.description?.message}
                    />
                  </div>

                  <div className="form_group d-flex flex-column">
                    <div className="w-100">
                      <label className="mb-2">العنوان على الخريطة</label>
                      <div className="map-placeholder border rounded overflow-hidden">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=..."
                          width="100%"
                          height="200"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="event-map"
                        ></iframe>
                        <div className="text-center p-2 bg-white fw-bold text-primary">
                          تحديد عنوان
                        </div>
                      </div>
                    </div>
                  </div>

<SubmitButton text={t("addEvent.next")} onClick={() => setStep(2)} />
                </>
              )}

              {step === 2 && (
                <>
                  {/* STEP 2 */}
                  <div className="form_group">
                    <CategorySelect
                      selectedCategory={category}
                      onChange={(val) => setValue("category", val)}
                    />
                  </div>

                  <div className="form_group d-flex gap-3 flex-column flex-md-row">
                    <InputField
                      label={t("addEvent.startDate")}
                      type="date"
                      {...register("eventStartDate", {
                        required: t("addEvent.startDateRequired"),
                      })}
                      error={errors.eventStartDate?.message}
                    />
                    <InputField
                      label={t("addEvent.endDate")}
                      type="date"
                      {...register("eventEndDate", {
                        required: t("addEvent.endDateRequired"),
                      })}
                      error={errors.eventEndDate?.message}
                    />
                  </div>

                  <div className="form_group d-flex gap-3 flex-column flex-md-row">
                    <InputField
                      label={t("addEvent.startTime")}
                      type="time"
                      {...register("eventStartTime", {
                        required: t("addEvent.startTimeRequired"),
                      })}
                      error={errors.eventStartTime?.message}
                    />
                    <InputField
                      label={t("addEvent.endTime")}
                      type="time"
                      {...register("eventEndTime", {
                        required: t("addEvent.endTimeRequired"),
                      })}
                      error={errors.eventEndTime?.message}
                    />
                  </div>

                  <div className="form_group">
                    <FormSelector
                      label={t("addEvent.audience")}
                      options={[
                        { label: t("addEvent.men"), value: "men" },
                        { label: t("addEvent.women"), value: "women" },
                        { label: t("addEvent.children"), value: "children" },
                        { label: t("addEvent.customAge"), value: "customAge" },
                      ]}
                      value={audience}
                      onChange={(e) => {
                        const value = e.target.value;
                        setAudience(value);
                        setValue("audience", value);
                      }}
                      error={errors.audience?.message}
                    />
                  </div>

                  {audience === "customAge" && (
                    <div className="form_group d-flex gap-3 flex-column flex-md-row">
                      <InputField
                        label={t("addEvent.ageFrom")}
                        placeholder="مثلاً 10"
                        type="number"
                        {...register("ageFrom", {
                          required: t("addEvent.ageFromRequired"),
                        })}
                        error={errors.ageFrom?.message}
                      />
                      <InputField
                        label={t("addEvent.ageTo")}
                        placeholder="مثلاً 18"
                        type="number"
                        {...register("ageTo", {
                          required: t("addEvent.ageToRequired"),
                        })}
                        error={errors.ageTo?.message}
                      />
                    </div>
                  )}

                  <div className="form_group">
                    <TextareaField
                      label={t("addEvent.refundPolicy")}
                      rows={4}
                      placeholder={t("addEvent.refundPolicyPlaceholder")}
                      {...register("refundPolicy", {
                        required: t("addEvent.refundPolicyRequired"),
                      })}
                      error={errors.refundPolicy?.message}
                    />
                  </div>
                  <div className="reset_btns d-flex justify-content-between align-items-center">
                    <div className="back_btn" onClick={() => setStep(1)}>
                      <i className="fal fa-arrow-right me-2"></i>
                    </div>

                    <SubmitButton text={t("addEvent.submit")} />
                  </div>
                </>
              )}
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
