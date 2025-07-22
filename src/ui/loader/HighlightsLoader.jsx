export function HighlightsLoader() {
  return (
    <div className="experience-card">
      <div className="placeholder-glow">
        <div
          className="placeholder w-100"
          style={{ height: "180px", borderRadius: "0.5rem" }}
        ></div>
      </div>
      <div className="card-content mt-3">
        <div className="placeholder-glow">
          <span className="placeholder col-8 mb-2 d-block"></span>
        </div>
        <div className="placeholder-glow">
          <span className="placeholder col-4 d-block mb-3"></span>
        </div>
        <div className="placeholder-glow">
          <span className="placeholder col-6 btn btn-secondary disabled"></span>
        </div>
      </div>
    </div>
  );
}
