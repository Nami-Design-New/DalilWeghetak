export default function HolidayLoader() {
  return (
    <div className="holiday-card">
      <div className="holiday-image-wrapper mb-3">
        <div className="placeholder-glow">
          <div className="placeholder w-100" style={{ height: "200px" }}></div>
        </div>
      </div>

      <div className="holiday-info">
        <div className="placeholder-glow mb-2">
          <span className="placeholder col-6"></span>
        </div>
        <div className="placeholder-glow mb-2">
          <span className="placeholder col-4 me-2"></span>
          <span className="placeholder col-4"></span>
        </div>
        <div className="placeholder-glow">
          <span className="placeholder col-12 mb-1"></span>
          <span className="placeholder col-10 mb-1"></span>
          <span className="placeholder col-8"></span>
        </div>
      </div>
    </div>
  );
}
