
import Activities from "../components/home/Activities";
import Destinations from "../components/home/Destinations";
import JeddahEvents from "../components/home/Events_section";
import Hero from "../components/home/Hero";
import Holidays from "../components/home/Holidays";
import Seasons from "../components/home/Seasons";

export default function Home() {
  return (
    <>
      <Hero />
    <Destinations/>
    <Activities/>
    <JeddahEvents />
    <Seasons/>
    <Holidays/>
    </>
  );
}
