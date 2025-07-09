import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "../ui/layout/Header";
import Footer from "../ui/layout/Footer";
import ResponsiveNav from "../ui/layout/ResponsiveNav";

export default function RootLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
