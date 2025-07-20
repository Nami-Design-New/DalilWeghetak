import { Dropdown } from "react-bootstrap";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import useLogout from "../../hooks/auth/useLogout";

export default function UserDropDown() {
  const { t } = useTranslation();
  const { logout } = useLogout(t);
  const { client } = useSelector((state) => state.clientData);
  const isUser = client?.type === "user";

  return (
    <Dropdown>
      <Dropdown.Toggle className="user_dropdown">
        <span>{client?.name}</span>
        <i className="fa fa-chevron-down"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu text-end">
        <Dropdown.Item as={Link} to="/notifications">
          <i className="fa-regular fa-bell"></i>
          {t("dropdown.notifications")}
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/my-bookings">
          <i className="fa-regular fa-ticket"></i>
          {t("dropdown.myBookings")}
        </Dropdown.Item>

        {/* <Dropdown.Item as={Link} to="/my-events">
          <i className="fa-solid fa-calendar-check"></i>
           {t("dropdown.myEvents")}
        </Dropdown.Item> */}

        {!isUser && (
          <Dropdown.Item as={Link} to="/my-events">
            <i className="fa-solid fa-calendar-check"></i>
            {t("dropdown.myEvents")}
          </Dropdown.Item>
        )}

        <Dropdown.Item as={Link} to="/wallet">
          <i className="fa-regular fa-wallet"></i>
          {t("dropdown.wallet")}
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
    </Dropdown>
  );
}
