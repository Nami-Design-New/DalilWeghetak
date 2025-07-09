import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Link } from "react-router";
import InputField from "../ui/forms/InputField";
import SubmitButton from "../ui/forms/SubmitButton";
import PasswordField from "../ui/forms/PasswordField";
import ImageUpload from "../ui/forms/ImageUpload";
import TextareaField from "../ui/forms/TextareaField";

export default function ProviderRegister() {
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
              <h3 className="section_title">أنشئ حسابك في دليل وجهتك</h3>
              <p className="section_description">
                سجّل الآن لبدء استكشاف الوجهات السياحية، متابعة الرحلات، والوصول
                إلى تجارب مصممة خصيصًا لك.
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
                  label="الاسم "
                  placeholder="أدخل الاسم "
                  {...register("firstName", { required: "الاسم مطلوب" })}
                />
                 <InputField
                  label="البريد الإلكتروني"
                  placeholder="أدخل بريدك الإلكتروني"
                  {...register("email", {
                    required: "البريد الإلكتروني مطلوب",
                  })}
                />
              </div>

              <div className="form_group d-flex gap-3 flex-column flex-md-row">
               
                <InputField
                  type="tel"
                  label="رقم الهاتف"
                  placeholder="أدخل رقم الهاتف"
                  {...register("phone", { required: "رقم الهاتف مطلوب" })}
                />
                 <PasswordField
                  label="كلمة المرور"
                  placeholder="أدخل كلمة المرور"
                  {...register("password", { required: "كلمة المرور مطلوبة" })}
                />
              </div>
            
              <div className="form_group">
                <TextareaField
                  label=" النشاط"
                  rows={4}
                  {...register("activityOverview", {
                    required: "مطلوب إدخال وصف النشاط",
                  })}
                  error={errors.activityOverview?.message}
                />
              </div>

              <div className="form_group">
                <TextareaField
                  label="الوصف "
                  rows={6}
                  {...register("activityDescription", {
                    required: "مطلوب إدخال تفاصيل النشاط",
                  })}
                  error={errors.activityDescription?.message}
                />
              </div>

              <Form.Check
                type="checkbox"
                label={
                  <>
                    قرأت و أوافق علي{" "}
                    <Link to="/terms-conditions">الشروط والأحكام</Link>*
                  </>
                }
                {...register("terms", { required: "يجب الموافقة على الشروط" })}
                className="my-3"
              />

              {errors.terms && (
                <p className="text-danger">{errors.terms.message}</p>
              )}

              <SubmitButton text="إنشاء حساب" />

              <p className="note">
                لديك حساب بالفعل؟ <Link to="/signin">تسجيل الدخول</Link>
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
