import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import InputField from "../ui/forms/InputField";
import SubmitButton from "../ui/forms/SubmitButton";
import TextareaField from "../ui/forms/TextareaField";
import { useState } from "react";

export default function AddEventForm() {
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
          <div className="col-12 p-3">
            <Form className="form_ui" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="section_title">أضف فعالية جديدة</h3>
              <p className="section_description">
                املأ بيانات الفعالية ليتم نشرها في دليل الوجهات.
              </p>

              <div className="form_group">
                <label className="upload_box">
                  {selectedImage ? (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="فعالية"
                    />
                  ) : (
                    <div className="upload_placeholder">
                      <i className="fa-solid fa-cloud-arrow-up"></i>
                      <p>قم بتحميل صورة الفعالية</p>
                      <span>اضغط على الصندوق لتحديدها</span>
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
                  label="القسم الأساسي"
                  placeholder="مثال: فعاليات ترفيهية"
                  {...register("mainCategory", {
                    required: "القسم الأساسي مطلوب",
                  })}
                />
                <InputField
                  label="القسم الفرعي"
                  placeholder="مثال: حفلات موسيقية"
                  {...register("subCategory", {
                    required: "القسم الفرعي مطلوب",
                  })}
                />
              </div>

              <div className="form_group d-flex gap-3 flex-column flex-md-row">
                <InputField
                  label="المحافظة"
                  placeholder="اختر المحافظة"
                  {...register("region", { required: "المحافظة مطلوبة" })}
                />
                <InputField
                  label="المدينة"
                  placeholder="اختر المدينة"
                  {...register("city", { required: "المدينة مطلوبة" })}
                />
              </div>

              <div className="form_group">
                <InputField
                  label="السعر"
                  placeholder="200 ريال"
                  {...register("price", { required: "السعر مطلوب" })}
                />
              </div>

              <div className="form_group d-flex gap-3 flex-column flex-md-row">
                <InputField
                  type="date"
                  label="تاريخ البدء"
                  {...register("startDate", { required: "تاريخ البدء مطلوب" })}
                />
                <InputField
                  type="date"
                  label="تاريخ الانتهاء"
                  {...register("endDate", { required: "تاريخ الانتهاء مطلوب" })}
                />
              </div>

              <div className="form_group d-flex gap-3 flex-column flex-md-row">
                <InputField
                  type="time"
                  label="وقت البدء"
                  {...register("startTime", { required: "وقت البدء مطلوب" })}
                />
                <InputField
                  type="time"
                  label="وقت الانتهاء"
                  {...register("endTime", { required: "وقت الانتهاء مطلوب" })}
                />
              </div>

              {/* حول الفعالية */}
              <div className="form_group">
                <TextareaField
                  label="حول الفعالية"
                  rows={4}
                  {...register("aboutEvent", {
                    required: "مطلوب إدخال تفاصيل الفعالية",
                  })}
                  error={errors.aboutEvent?.message}
                />
              </div>

              <SubmitButton text="أضف الفعالية الآن" />
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
