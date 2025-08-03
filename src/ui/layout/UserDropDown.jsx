import { Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useQueryClient } from "@tanstack/react-query";
import useLogout from "../../hooks/auth/useLogout";
import ChangePasswordModal from "../modals/ChangePasswordModal";
import ConfirmationModal from "../modals/ConfirmationModal";
import useDeleteAccount from "../../hooks/account/useDeleteAccount";
import axiosInstance from "../../utils/axiosInstance";
import EditProfileModal from "../modals/EditProfileModal";

export default function UserDropDown() {
  const { t } = useTranslation();
  const { logout } = useLogout(t);
  const [, deleteCookie] = useCookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { client } = useSelector((state) => state.clientData);
  const [showConfirmModal, setShowConfirmModal] = useState();
  const [openChangePassModal, setOpenChangePassModal] = useState();
  const [showEditModal, setShowEditModal] = useState(false);

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

  return (
    <Dropdown>
      <Dropdown.Toggle className="user_dropdown">
        <div className="img">
          <img src={client?.image} alt="avatar" />
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu text-end">
        <Dropdown.Item as={Button} onClick={() => setShowEditModal(true)}>
          <i className="fa-regular fa-user-edit"></i>
          {t("dropdown.editProfile")}
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/favorites">
          <i className="fa-regular fa-heart"></i>
          {t("dropdown.favorites")}
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/my-bookings">
          <i className="fa-regular fa-ticket"></i>
          {t("settings.myBookings")}
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/my-events">
          <i className="fa-regular fa-calendar-check"></i>
          {t("settings.myEvents")}
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/wallet">
          <i className="fa-regular fa-wallet"></i>
          {t("settings.wallet")}
        </Dropdown.Item>

        <Dropdown.Item
          as={"div"}
          style={{ cursor: "pointer" }}
          onClick={() => setOpenChangePassModal(true)}
        >
          <i className="fa-regular fa-lock"></i>
          {t("settings.changePassword")}
        </Dropdown.Item>

        <Dropdown.Item
          as={"div"}
          style={{ cursor: "pointer" }}
          onClick={() => setShowConfirmModal(true)}
        >
          <i className="fa-regular fa-trash"></i>
          {t("settings.deleteAccount")}
        </Dropdown.Item>

        <Dropdown.Item
          as={Link}
          to="/signin"
          className="logout"
          onClick={logout}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          {t("dropdown.signOut")}
        </Dropdown.Item>
      </Dropdown.Menu>

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
      <EditProfileModal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
      />
    </Dropdown>
  );
}
