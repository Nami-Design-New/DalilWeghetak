import Activities from "../components/home/activities/Activities";
import Destinations from "../components/home/Destinations";
import JeddahEvents from "../components/home/EventsSection";
import Hero from "../components/home/Hero";
import Holidays from "../components/home/Holidays";
import Seasons from "../components/home/Seasons";
import Statistics from "../components/home/statistics";

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <Activities />
      <JeddahEvents />
      <Seasons />
      <Statistics />
      <Holidays />
    </>
  );
}
