import { useParams } from "react-router";

import useGetCities from "../hooks/home/useCities";
import DestinationsEvents from "../ui/destinations/DestinationsEvents";
import DestinationsActivities from "../ui/destinations/DestinationsActivities";
import HighLightActivities from "../ui/destinations/HighLightActivities";

export default function DestinationDetails() {
  const { id } = useParams();
  const { data: cities = [] } = useGetCities();
  const city = cities.find((c) => Number(c.id) === Number(id));

  if (!city) {
    return (
      <div className="container py-5 text-center">
        <h3>عذرًا، لم يتم العثور على المدينة</h3>
      </div>
    );
  }

  return (
    <section className="destination-details">
      <div
        className="hero-banner"
        style={{
          backgroundImage: `url(${city?.image})`,
        }}
      >
        <div className="overlay">
          <div className="text-content container text-center text-white">
            <h1>{city?.name}</h1>
            <p className="lead">مرحبًا بك في مدينة {city?.name} الساحرة</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <DestinationsActivities city={city} />

        <DestinationsEvents city={city} />

        <HighLightActivities city={city} />
      </div>
    </section>
  );
}
