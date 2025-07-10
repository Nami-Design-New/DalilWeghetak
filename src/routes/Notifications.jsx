import { useTranslation } from "react-i18next";

export default function Notifications() {
  const { t } = useTranslation();

  const notifications = [
    {
      id: 1,
      title: "تمت إضافة فعالية جديدة",
      body: "تم إضافة فعالية مهرجان الرياض للمفضلة لديك.",
      created_at: "اليوم 12:30 م",
    },
    {
      id: 2,
      title: "حجزك قيد الانتظار",
      body: "يرجى تأكيد الحجز الخاص بك خلال 24 ساعة.",
      created_at: "أمس 09:00 ص",
    },
    {
      id: 3,
      title: "تم تحديث الفعالية",
      body: "تم تعديل توقيت فعالية المسرح المفتوح.",
      created_at: "منذ ساعتين",
    },
  ];

  return (
    <div className="notifications h-100 mt-80">
      <div className="container">
       <h2 className="page-title mb-3">الاشعارات</h2>
      <div className="row h-100">
        {notifications.map((notification) => (
          <div className="col-12 p-2" key={notification.id}>
            <div className="notification_card">
              <div className="notification_body">
                <div className="icon">
                  <i className="fa-regular fa-bell"></i>
                </div>
                <div className="content">
                  <h6>{notification.title}</h6>
                  <p>{notification.body}</p>
                </div>
              </div>
              <div className="date">
                <i className="fa-regular fa-clock"></i> {notification.created_at}
              </div>
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="col-12 p-2">
            <div className="empty_wrap">
              <img src="/icons/bell.svg" alt="empty-box" />
              <h6>{t("empty_notifications")}</h6>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
