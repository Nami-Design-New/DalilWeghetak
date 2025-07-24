import { Dropdown } from "react-bootstrap";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import useLogout from "../../hooks/auth/useLogout";

export default function UserDropDown() {
  const { t } = useTranslation();
  const { logout } = useLogout(t);
  const { client } = useSelector((state) => state.clientData);

  return (
    <Dropdown>
      <Dropdown.Toggle className="user_dropdown">
        <span>{client?.name}</span>
        <i className="fa fa-chevron-down"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu text-end">
        <Dropdown.Item as={Link} to="/settings">
          <i className="fa-regular fa-user"></i>
          {t("dropdown.myAccount")}
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/favorites">
          <i className="fa-regular fa-heart"></i>
          {t("dropdown.favorites")}
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
