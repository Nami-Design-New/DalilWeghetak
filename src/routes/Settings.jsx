import { Link, useNavigate } from "react-router";
import useGetProfile from "../hooks/account/useGetProfile";
import useGetSettings from "../hooks/useGetSettings";
import Loader from "../ui/loader/Loader";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ChangePasswordModal from "../ui/modals/ChangePasswordModal";
import ConfirmationModal from "../ui/modals/ConfirmationModal";
import useDeleteAccount from "../hooks/account/useDeleteAccount";
import { useCookies } from "react-cookie";
import axiosInstance from "../utils/axiosInstance";
import { useQueryClient } from "@tanstack/react-query";
import { logout } from "../redux/slices/clientData";

export default function Settings() {
  const [openChangePassModal, setOpenChangePassModal] = useState();
  const [showConfirmModal, setShowConfirmModal] = useState();
  const { t } = useTranslation();
  const { data, isLoading } = useGetProfile();
  const { settings = {} } = useGetSettings();
  const { client } = useSelector((state) => state.clientData);
  const [, deleteCookie] = useCookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { deleteAccount, isPending: deleteingAccount } = useDeleteAccount();

  const handleDeleteAccount = () => {
    deleteAccount(undefined, {
      onSuccess: () => {
        deleteCookie("token");
        delete axiosInstance.defaults.headers.common["Authorization"];
        dispatch(logout());
        navigate("/");
        queryClient.clear();
      },
    });
  };

  const isUser = client?.type === "user";
  if (isLoading) return <Loader />;

  return (
    <>
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

            <button
              onClick={() => setOpenChangePassModal(true)}
              className="settings_item"
            >
              <div className="icon">
                <i className="fa-regular fa-lock"></i>
              </div>
              <span>{t("settings.changePassword")}</span>
              <i className="fa-solid fa-chevron-left arrow"></i>
            </button>

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

            <button
              onClick={() => setShowConfirmModal(true)}
              className="settings_item"
            >
              <div className="icon">
                <i className="fa-regular fa-file-lines"></i>
              </div>
              <span>{t("settings.deleteAccount")}</span>
              <i className="fa-solid fa-chevron-left arrow"></i>
            </button>
          </div>
        </div>
      </div>
      <ChangePasswordModal
        showModal={openChangePassModal}
        setShowModal={setOpenChangePassModal}
      />
      <ConfirmationModal
        showModal={showConfirmModal}
        setShowModal={setShowConfirmModal}
        header={"deleteAccount"}
        message={"areYouSure"}
        action={handleDeleteAccount}
        isPending={deleteingAccount}
      />
    </>
  );
}
