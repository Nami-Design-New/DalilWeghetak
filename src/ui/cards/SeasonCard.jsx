
import { useNavigate } from "react-router";

export default function SeasonCard({ season }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/session/${season.id}`);
  };

  return (
    <div className="season-card text-center" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img src={season.image} alt={season.title} className="season-img" />
      <div className="season-info">
        <p className="season-date">
          {season.startDate} - {season.endDate}
        </p>
        <h5 className="season-title">{season.title}</h5>
      </div>
    </div>
  );
}
