import { useTranslation } from "react-i18next";
import InputField from "../../ui/forms/InputField";
import SubmitButton from "../../ui/forms/SubmitButton";
import SelectField from "../../ui/forms/SelectField";
import useGetCategories from "../../hooks/home/useGetCategories";
import { useFormContext } from "react-hook-form";

export default function Step2({ onBack, isPending }) {
  const { t } = useTranslation();
  const { data: categorries } = useGetCategories();
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const AUDIENCE = [
    { value: "all", name: t("addEventForm.all") },
    { value: "female", name: t("addEventForm.women") },
    { value: "male", name: t("addEventForm.men") },
    { value: "adult", name: t("addEventForm.adults") },
    { value: "age", name: t("addEventForm.customAge") },
  ];

  return (
    <>
      <h6>{t("addEventForm.categories")}</h6>
      <div className="check_boxes">
        {categorries?.map((category) => (
          <div className="checkbox_group" key={category.id}>
            <input
              type="checkbox"
              id={category.id}
              name={category.name}
              value={category.id}
            />
            <label htmlFor={category.id}>
              <img src={category.icon} alt="" />
              {category.name}
            </label>
          </div>
        ))}
      </div>

      <div className="form_group">
        <InputField
          label={t("addEventForm.eventStartDate")}
          type="date"
          {...register("from_date")}
          error={errors.from_date?.message}
        />
        <InputField
          label={t("addEventForm.eventEndDate")}
          type="date"
          {...register("to_date")}
          error={errors.to_date?.message}
        />
      </div>

      <div className="form_group">
        <InputField
          label={t("addEventForm.eventStartTime")}
          type="time"
          {...register("from_time")}
          error={errors.from_time?.message}
        />
        <InputField
          label={t("addEventForm.eventStartTime")}
          type="time"
          {...register("to_time")}
          error={errors.to_time?.message}
        />
      </div>

      <div className="form_group">
        <SelectField
          label={t("addEventForm.audience")}
          options={AUDIENCE}
          defaultSelect={t("addEventForm.selectAudience")}
          {...register("audience")}
          error={errors.audience?.message}
        />
      </div>

      {watch("audience") === "age" && (
        <div className="form_group">
          <InputField
            label={t("addEventForm.ageFrom")}
            type="number"
            placeholder="00"
            {...register("from_age")}
            error={errors.from_age?.message}
          />
          <InputField
            label={t("addEventForm.ageTo")}
            type="number"
            placeholder="00"
            {...register("to_age")}
            error={errors.to_age?.message}
          />
        </div>
      )}

      <div className="form_group">
        <InputField
          label={t("addEventForm.returnTermsAr")}
          placeholder={t("addEventForm.returnTermsAr")}
          as="textarea"
        />
      </div>

      <div className="form_group">
        <InputField
          label={t("addEventForm.returnTermsEn")}
          placeholder={t("addEventForm.returnTermsAr")}
          as="textarea"
        />
      </div>

      <div className="d-flex w-100 justify-content-between">
        <button
          className="back"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
        >
          {t("addEventForm.back")}
        </button>

        <SubmitButton
          text={t("addEventForm.addEvent")}
          className={"w-25"}
          loading={isPending}
        />
      </div>
    </>
  );
}
