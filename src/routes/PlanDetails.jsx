import useGetPalnDetails from "../hooks/plan/useGetPalnDetails";
import Loader from "../ui/loader/Loader";
import EmergencyContact from "../ui/EmergencyContact";

export default function PlanDetails() {
  const { planDetails, isLoading } = useGetPalnDetails();
  if (isLoading) return <Loader />;
  console.log(planDetails.image);

  return (
    <section className="destination-details">
      <div className="hero-banner">
        <img src={planDetails.image} alt="" />
        <div className="overlay">
          <div className="text-content container text-center text-white">
            <p
              className="lead d-flex flex-column gap-3"
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              <span style={{ color: "#0048aa" }}>{planDetails.title} </span>
              <span>{planDetails.slogan} </span>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        {planDetails.details.map((detail) => (
          <div key={detail.id} className="card-container">
            <div className="card_plan_details">
              <div className="card-image">
                <img src={detail.image} alt={detail.title} />
                <div className="gradient-overlay" />
                <div className="card-title">
                  <h3>{detail.title}</h3>
                </div>
              </div>

              <div className="card-body">
                <p className="description">{detail.description}</p>
              </div>
            </div>
          </div>
        ))}

        <EmergencyContact />
      </div>
    </section>
  );
}
