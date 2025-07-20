export default function NotificationLoader() {
  return (
    <div className="notification_card skeleton">
      <div className="notification_body">
        <div className="icon skeleton-img"></div>
        <div className="content">
          <h6 className="skeleton-text skeleton-title"></h6>
          <p className="skeleton-text"></p>
        </div>
      </div>
      <div className="date">
        <span className="skeleton-text" style={{ width: "60px" }}></span>
      </div>
    </div>
  );
}
