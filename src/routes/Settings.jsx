import { useState, useRef } from "react";
import { Link } from "react-router";

export default function Settings() {
  const [selectedImage, setSelectedImage] = useState("/icons/user.png");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const user = {
    name: "محمد احمد معتز",
    greeting: "مرحباً بك",
  };

  const settingsItems = [
{ title: "حجوزاتي", icon: "fa-regular fa-ticket", link: "/my-bookings" },
    { title: "فعالياتي", icon: "", link: "/my-events" },
    { title: "المحفظة", icon: "fa-regular fa-wallet", link: "/wallet" },
    { title: "تغيير كلمة المرور", icon: "fa-regular fa-lock", link: "/change-password" },
    { title: "تواصل معنا", icon: "fa-regular fa-message", link: "/contact" },
    { title: "سياسة الشروط و الأحكام", icon: "fa-regular fa-file-lines", link: "/terms" },
  ];

  return (
    <div className="settings_page ">
        <div className="container">
      <div className="user_card">
        <div className="avatar">
          <img src={selectedImage} alt={user.name} />
          <button className="edit-icon" onClick={handleEditClick}>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>

        <div className="info">
          <h6>{user.name}</h6>
          <p>{user.greeting}</p>
        </div>
      </div>

      <div className="settings_list">
        {settingsItems.map((item, index) => (
          <Link to={item.link} className="settings_item" key={index}>
            <div className="icon">
              <i className={item.icon}></i>
            </div>
            <span>{item.title}</span>
            <i className="fa-solid fa-chevron-left arrow"></i>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}
