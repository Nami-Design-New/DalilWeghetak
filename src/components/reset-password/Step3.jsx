import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import * as yup from "yup";
import axiosInstance from "../../utils/axiosInstance";
import PasswordField from "../../ui/forms/PasswordField";
import SubmitButton from "../../ui/forms/SubmitButton";

export default function Step3({ setStep, code }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    password: yup
      .string()
      .required(t("validation.required"))
      .min(8, t("validation.min", { min: 8 }))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!#%*?&]{8,}$/,
        t("validation.passwordComplexity")
      ),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], t("validation.passwordMatch"))
      .required(t("validation.required")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: loading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const handleReset = async (data) => {
    try {
      const res = await axiosInstance.post("/user/update_password", {
        password: data.password,
        code: code,
      });

      if (res.data?.code === 200) {
        toast.success(t("auth.passwordChangedSuccess"));
        navigate("/login");
      } else {
        toast.error(res.data?.message || t("auth.somethingWentWrong"));
      }
    } catch (error) {
      console.log("Reset error:", error);
      toast.error(
        error?.response?.data?.message || t("auth.somethingWentWrong")
      );
    }
  };

  return (
    <>
      <h3 className="section_title">{t("resetPassword2.title")}</h3>
      <p className="section_description">{t("resetPassword2.description")}</p>

      <form className="form_ui mt-5" onSubmit={handleSubmit(handleReset)}>
        <div className="form_group mb-4">
          <PasswordField
            label={t("resetPassword2.newPassword")}
            placeholder={t("resetPassword2.newPasswordPlaceholder")}
            error={errors?.password?.message}
            {...register("password")}
          />
        </div>

        <div className="form_group mb-4">
          <PasswordField
            label={t("resetPassword2.confirmPassword")}
            placeholder={t("resetPassword2.confirmPasswordPlaceholder")}
            error={errors?.password_confirmation?.message}
            {...register("password_confirmation")}
          />
        </div>

        <div className="reset_btns d-flex justify-content-between align-items-center">
          <div className="back_btn" onClick={() => setStep(2)}>
            <i className="fal fa-arrow-right me-2"></i>
          </div>

          <SubmitButton text={t("resetPassword2.confirm")} loading={loading} />
        </div>
      </form>
    </>
  );
}
