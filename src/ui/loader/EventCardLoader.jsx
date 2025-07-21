export default function EventCardLoader() {
  return (
    <div className="activity-card placeholder-glow p-2 ">
      <div
        className="card-img placeholder rounded-3"
        style={{ height: "200px", backgroundColor: "#e0e0e0" }}
      ></div>
      <div className="card-body p-2">
        <p className="price placeholder col-6"></p>
        <p className="meta placeholder col-8"></p>
        <h5 className="title placeholder col-7"></h5>
        <div className="actions d-flex justify-content-between mt-3">
          <span className="placeholder btn btn-secondary disabled col-6"></span>
          <span className="placeholder btn btn-outline-secondary disabled col-3"></span>
        </div>
      </div>
    </div>
  );
}
