import { useTranslation } from "react-i18next";
import useGetNotifications from "../hooks/useGetNotifications";
import NotificationLoader from "../ui/loader/NotificationLoader";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Notifications() {
  const { t } = useTranslation();

  const { data: notifications = [], isLoading, isError } = useGetNotifications(); 

  return (
    <div className="notifications h-100 mt-80">
      <div className="container">
        <h2 className="page-title mb-3">{t("dropdown.notifications")}</h2>

        {isLoading && (
          <div className="row">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="col-12 p-2" key={index}>
                <NotificationLoader />
              </div>
            ))}
          </div>
        )}

        {!isLoading && (
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
                      <p>{notification.description}</p>
                    </div>
                  </div>
                  <div className="date">
                    <i className="fa-regular fa-clock"></i>{" "}
                    {dayjs(notification.created_at).fromNow()}
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

            {isError && (
              <div className="col-12 p-2">
                <div className="text-danger text-center">
                  {t("error_occurred")}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
