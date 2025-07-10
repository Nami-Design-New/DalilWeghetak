import { Dropdown } from "react-bootstrap";
import { Link } from "react-router";

export default function UserDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="user_dropdown">
        <span>My Account</span>
        <i className="fa fa-chevron-down"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu text-end">
        <Dropdown.Item as={Link} to="/notifications">
          <i className="fa-regular fa-bell"></i>
          Notifications
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/my-bookings">
          <i className="fa-regular fa-ticket"></i>
          My Booking
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/my-events">
          <i className="fa-solid fa-calendar-check"></i>
          My Events
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/wallet">
          <i className="fa-regular fa-wallet"></i>
          My Addresses
        </Dropdown.Item>

        <Dropdown.Item as={Link} to="/signin" className="logout">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          Sign Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
