import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import useAuth from "../hooks/auth/useAuth";
import Footer from "../ui/layout/Footer";
import Header from "../ui/layout/Header";
import ResponsiveNav from "../ui/layout/ResponsiveNav";
import Loader from "../ui/loader/Loader";
import ChargeModal from "../ui/modals/ChargeModal";

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { loading } = useAuth();

  if (loading) return <Loader />;
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ResponsiveNav />

      <ChargeModal />
    </>
  );
}
