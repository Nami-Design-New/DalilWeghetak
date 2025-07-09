import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Link } from "react-router";
import InputField from "../ui/forms/InputField";
import PasswordField from "../ui/forms/PasswordField";
import SubmitButton from "../ui/forms/SubmitButton";
import ImageUpload from "../ui/forms/ImageUpload";

export default function UserRegister() {
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
              <h3 className="section_title">إنشاء حساب جديد</h3>
              <p className="section_description">
                سجّل الآن للوصول إلى أفضل التجارب والعروض السياحية المميزة.
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
                  label="الاسم"
                  placeholder="أدخل اسمك"
                  {...register("name", { required: "الاسم مطلوب" })}
                  error={errors.name?.message}
                />
           
                <InputField
                  type="tel"
                  label="رقم الهاتف"
                  placeholder="أدخل رقم الهاتف"
                  {...register("phone", { required: "رقم الهاتف مطلوب" })}
                  error={errors.phone?.message}
                />
              </div>

              <div className="form_group d-flex gap-3 flex-column flex-md-row">
                <InputField
                  label="البريد الإلكتروني"
                  placeholder="أدخل بريدك الإلكتروني"
                  {...register("email", {
                    required: "البريد الإلكتروني مطلوب",
                  })}
                  error={errors.email?.message}
                />
     
                <PasswordField
                  label="كلمة المرور"
                  placeholder="أدخل كلمة المرور"
                  {...register("password", {
                    required: "كلمة المرور مطلوبة",
                  })}
                  error={errors.password?.message}
                />
              </div>

              <Form.Check
                type="checkbox"
                label={
                  <>
                    قرأت و أوافق على{" "}
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

              <p className="note mt-3">
                لديك حساب؟ <Link to="/signin">سجّل الدخول</Link>
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
