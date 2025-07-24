import { useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import InputField from "../ui/forms/InputField";
import PasswordField from "../ui/forms/PasswordField";
import SubmitButton from "../ui/forms/SubmitButton";
import AccountTypeModal from "../ui/modals/AccountTypeModal";
import useLogin from "../hooks/auth/useLogin";
import AccountTypeModalSocial from "../ui/modals/AccountTypeModalSocial";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const [showSocialModal, setShowSocialModal] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { register, handleSubmit, errors, isLoading } = useLogin(t);
  const [userType, setUserType] = useState("");

  const handleSelectType = (type) => {
    setUserType(type);
  };

  const handleAccountTypeSelect = (type) => {
    if (type === "user") {
      navigate("/user-signup", { state: { type } });
    } else if (type === "service_provider") {
      navigate("/provider-signup", { state: { type } });
    }
  };

  // const handleGoogleLogin = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     try {
  //       const res = await axiosInstance.post("/user/social_login", {
  //         login_from: "google",
  //         google_token: tokenResponse.access_token,
  //         type: userType
  //       });

  //       if (res.data.code === 200) {
  //         toast.success(t("auth.loginSuccess"));
  //         dispatch(setClientData(res.data.data));
  //         setCookie("token", res.data.data.token, {
  //           path: "/",
  //           secure: true,
  //           sameSite: "Strict",
  //         });
  //         setCookie("id", res.data.data.id, {
  //           path: "/",
  //           secure: true,
  //           sameSite: "Strict",
  //         });
  //         axiosInstance.defaults.headers.common[
  //           "Authorization"
  //         ] = `${res.data.data.token}`;
  //       } else {
  //         toast.error(res.data.message);
  //       }
  //     } catch (error) {
  //       toast.error(t("auth.loginErorr"));
  //       throw new Error(error.message);
  //     }
  //   },
  //   onError: (error) => {
  //     console.log("Google Login Error:", error);
  //     toast.error(error.response.data.message);
  //   },
  // });

  return (
    <>
      <section className="auth_section ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 p-3">
              <form className="form_ui" onSubmit={handleSubmit}>
                <h3 className="section_title">{t("login.title")}</h3>
                <p className="section_description">{t("login.description")}</p>

                <div className="form_group">
                  <InputField
                    label={t("login.phoneLabel")}
                    type="phone"
                    placeholder={t("login.phonePlaceholder")}
                    {...register("phone")}
                    error={errors.phone?.message}
                  />
                </div>

                <div className="form_group">
                  <PasswordField
                    label={t("login.passwordLabel")}
                    placeholder={t("login.passwordPlaceholder")}
                    {...register("password")}
                    error={errors.password?.message}
                  />
                </div>

                <span
                  className="link"
                  onClick={() => navigate("/reset-password")}
                >
                  {t("login.forgotPassword")}
                </span>

                <SubmitButton
                  text={t("login.submit")}
                  loading={isLoading}
                  className="mt-3"
                />

                <p className="note">
                  {t("login.noAccount")}{" "}
                  <span onClick={() => setShowModal(true)} className="link">
                    {t("login.createAccount")}
                  </span>
                </p>
              </form>
              <div className="social-login-buttons">
                <button onClick={() => setShowSocialModal(true)}>
                  <img src="/icons/google.png" alt="google login" />
                  <span>{t("auth.googleAccount")}</span>
                </button>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block p-3">
              <div className="auth-image-wrapper">
                <img src="/images/auth.jpg" alt="Saudi Travel" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccountTypeModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onSelect={handleAccountTypeSelect}
      />
      <AccountTypeModalSocial
        showSocialModal={showSocialModal}
        setShowSocialModal={setShowSocialModal}
        handleChangeType={handleSelectType}
      />
    </>
  );
}
