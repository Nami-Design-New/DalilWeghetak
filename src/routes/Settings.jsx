import { Link } from "react-router";
import useGetProfile from "../hooks/account/useGetProfile";
import useGetSettings from "../hooks/useGetSettings";
import Loader from "../ui/loader/Loader";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Settings() {
  const { t } = useTranslation();
  const { data, isLoading } = useGetProfile();
  const { settings = {} } = useGetSettings();
  const { client } = useSelector((state) => state.clientData);
  const isUser = client?.type === "user";
  if (isLoading) return <Loader />;

  return (
    <div className="settings_page">
      <div className="container">
        <div className="user_card">
          <div className="d-flex align-items-center gap-2">
            <div className="avatar">
              <img src={data.image} alt={data.name} />
            </div>
            <div className="info">
              <h6>{data.name}</h6>
              <p>{t("settings.welcome")}</p>
            </div>
          </div>
          <Link to="/edit-profile" className="edit-icon">
            <i className="fa-regular fa-pen-to-square"></i>
          </Link>
        </div>

        <div className="settings_list">
          <Link to="/my-bookings" className="settings_item">
            <div className="icon">
              <i className="fa-regular fa-ticket"></i>
            </div>
            <span>{t("settings.myBookings")}</span>
            <i className="fa-solid fa-chevron-left arrow"></i>
          </Link>
          {!isUser && (
            <Link to="/my-events" className="settings_item">
              <div className="icon">
                <i className="fa-regular fa-calendar-check"></i>
              </div>
              <span>{t("settings.myEvents")}</span>
              <i className="fa-solid fa-chevron-left arrow"></i>
            </Link>
          )}

          <Link to="/wallet" className="settings_item">
            <div className="icon">
              <i className="fa-regular fa-wallet"></i>
            </div>
            <span>{t("settings.wallet")}</span>
            <i className="fa-solid fa-chevron-left arrow"></i>
          </Link>

          <Link to="/change-password" className="settings_item">
            <div className="icon">
              <i className="fa-regular fa-lock"></i>
            </div>
            <span>{t("settings.changePassword")}</span>
            <i className="fa-solid fa-chevron-left arrow"></i>
          </Link>

          <Link to="/contact" className="settings_item">
            <div className="icon">
              <i className="fa-regular fa-message"></i>
            </div>
            <span>{t("settings.contactUs")}</span>
            <i className="fa-solid fa-chevron-left arrow"></i>
          </Link>

          <Link to={settings.terms_link} className="settings_item">
            <div className="icon">
              <i className="fa-regular fa-file-lines"></i>
            </div>
            <span>{t("settings.terms")}</span>
            <i className="fa-solid fa-chevron-left arrow"></i>
          </Link>

          <Link
            to={settings.delete_account_link || "/delete-account"}
            className="settings_item"
          >
            <div className="icon">
              <i className="fa-regular fa-file-lines"></i>
            </div>
            <span>{t("settings.deleteAccount")}</span>
            <i className="fa-solid fa-chevron-left arrow"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
