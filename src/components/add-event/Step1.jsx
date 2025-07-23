import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormContext } from "react-hook-form";
import { Form } from "react-bootstrap";
import InputField from "../../ui/forms/InputField";
import SelectField from "./../../ui/forms/SelectField";
import useGetCities from "../../hooks/home/useCities";
import MapLocationField from "../../ui/forms/MapLocationField";
import SubmitButton from "./../../ui/forms/SubmitButton";
import LocationPickerModal from "../../ui/modals/LocationPickerModal";

export default function Step1({ onNext }) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  const { data: cities } = useGetCities();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="form_group flex-column gap-0">
        <label className="upload_box">
          {watch("image") ? (
            <img
              src={URL.createObjectURL(watch("image"))}
              alt="event"
            />
          ) : (
            <div className="upload_placeholder">
              <i className="fa-solid fa-cloud-arrow-up"></i>
              <p>{t("addEventForm.upload")}</p>
              <span>{t("addEventForm.clickToSelect")}</span>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setValue("image", file);
              }
            }}
          />
        </label>

        {errors.image && (
          <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
            {errors?.image?.message}
          </Form.Control.Feedback>
        )}
      </div>

      <div className="paid_free">
        <h6>{t("addEventForm.isEventFreeOrPaid")}</h6>

        <div className="radio_group">
          <div>
            <input
              type="radio"
              name="free_or_paid"
              id="free"
              checked={watch("is_free")}
              onChange={() => setValue("is_free", true)}
            />
            <label htmlFor="free">
              <span>{t("addEventForm.free")}</span>
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="free_or_paid"
              id="paid"
              checked={!watch("is_free")}
              onChange={() => setValue("is_free", false)}
            />
            <label htmlFor="paid">
              <span>{t("addEventForm.paid")}</span>
            </label>
          </div>
        </div>
      </div>

      <div className="form_group">
        <InputField
          label={t("addEventForm.titleAr")}
          placeholder={t("addEventForm.titleAr")}
          {...register("title_ar")}
          error={errors.title_ar?.message}
        />

        <InputField
          label={t("addEventForm.titleEn")}
          placeholder={t("addEventForm.titleEn")}
          {...register("title_en")}
          error={errors.title_en?.message}
        />
      </div>

      <div className="form_group">
        <InputField
          label={t("addEventForm.eventPrice")}
          placeholder={
            watch("is_free") ? t("addEventForm.free") : t("addEventForm.eventPrice")
          }
          type="number"
          disabled={watch("is_free")}
          {...register("price")}
          error={errors.price?.message}
        />

        <SelectField
          label={t("addEventForm.city")}
          defaultSelect={t("addEventForm.selectCity")}
          {...register("city_id")}
          error={errors.city_id?.message}
          options={cities?.map((city) => ({
            value: city.id,
            name: city.name,
          }))}
        />
      </div>

      <div className="form_group">
        <InputField
          label={t("addEventForm.descriptionAr")}
          placeholder={t("addEventForm.descriptionAr")}
          as="textarea"
          {...register("description_ar")}
          error={errors.description_ar?.message}
        />
      </div>

      <div className="form_group">
        <InputField
          label={t("addEventForm.descriptionEn")}
          placeholder={t("addEventForm.descriptionEn")}
          as="textarea"
          {...register("description_en")}
          error={errors.description_en?.message}
        />
      </div>

      <div className="form_group">
        <MapLocationField setShowModal={setShowModal} error={errors.lat?.message} />
      </div>

      <div className="d-flex w-100 justify-content-end">
        <SubmitButton
          text={t("addEventForm.next")}
          className={"w-25"}
          event={(e) => {
            e.preventDefault();
            onNext();
          }}
        />
      </div>

      <LocationPickerModal
        title="اختر الموقع"
        showModal={showModal}
        setShowModal={setShowModal}
        onSelect={(latlng) => {
          setValue("lat", latlng.lat);
          setValue("lng", latlng.lng);
        }}
      />
    </>
  );
}
