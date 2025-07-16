import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../ui/layout/Header";
import Footer from "../ui/layout/Footer";
import ResponsiveNav from "../ui/layout/ResponsiveNav";
import Loader from "../ui/loader/Loader";

export default function RootLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ResponsiveNav />
    </>
  );
}
