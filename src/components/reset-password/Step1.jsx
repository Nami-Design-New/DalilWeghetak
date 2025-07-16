import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { toast } from "sonner";
import InputField from "../../ui/forms/InputField";
import SubmitButton from "../../ui/forms/SubmitButton";
import axiosInstance from "../../utils/axiosInstance";

export default function Step1({ setStep, phone, setPhone,setHashedCode }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosInstance.post("/user/check_phone", {
        phone: phone.trim(),
        type: "reset_password",
      });

      if (res.data?.code === 200) {
        toast.success(t("auth.resetLinkSent", { phone }));
        setHashedCode(res.data?.data); 
        setStep(2);
      } else {
        toast.error(t("auth.phoneNotFound"));
      }
    } catch (error) {
      toast.error(t("auth.phoneNotFound"));
      console.log("error in step 1", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
       <h3 className="section_title">{t("auth.resetPasswordTitle")}</h3>
      <p className="section_description">{t("auth.resetPasswordSubtitle")}</p>

      <form className="form_ui mt-5" onSubmit={handleSubmit}>
        <div className="form_group mb-4">
          <InputField
            label={t("auth.phone")}
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder={t("auth.enterPhoneNumber")}
          />
        </div>

        <div className="reset_btns d-flex justify-content-between align-items-center">
          <Link to="/signin" aria-label="Back" className="back_btn">
            <i className="fal fa-arrow-right"></i>
          </Link>

          <SubmitButton text={t("auth.send")} loading={loading} />
        </div>
      </form>
    </>
  );
}
