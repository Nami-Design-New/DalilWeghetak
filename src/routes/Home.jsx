
import Activities from "../components/home/Activities";
import Destinations from "../components/home/Destinations";
import JeddahEvents from "../components/home/Events_section";
import Hero from "../components/home/Hero";
import Holidays from "../components/home/Holidays";
import Seasons from "../components/home/Seasons";
import Statistics from "../components/home/Statistics";

export default function Home() {
  return (
    <>
      <Hero />
    <Destinations/>
    <Activities/>
    <JeddahEvents />
    <Seasons/>
   <Statistics />
    <Holidays/>
    </>
  );
}
