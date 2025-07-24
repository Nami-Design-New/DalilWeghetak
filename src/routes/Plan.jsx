import { useTranslation } from "react-i18next";
import useGetPlans from "../hooks/plan/useGetPlans";
import Loader from "../ui/loader/Loader";
import { Link } from "react-router";

export default function Plan() {
  const { t } = useTranslation();
  const { plans, isLoading } = useGetPlans();

  if (isLoading) return <Loader />;
  return (
    <section className="destination-details">
      <div
        className="hero-banner"
        style={{
          backgroundImage: "url('/images/plan.jpg')",
        }}
      >
        <div className="overlay">
          <div className="text-content container text-center text-white">
            <p
              className="lead"
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              {t("plan.title")}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          {plans.map((plan) => (
            <Link to={`/plan/${plan.id}`} className="col-12 p-2" key={plan.id}>
              <div className="card large-card with-pattern">
                <div className="card-content">
                  <h3 className="d-flex flex-column gap-2">
                    <span className="highlight">{plan.title}</span>{" "}
                    <span>{plan.slogan}</span>
                  </h3>
                </div>
                <div className="card-image">
                  <img
                    loading="lazy"
                    src={plan.image}
                    alt={t("statistics.imageAlt")}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
