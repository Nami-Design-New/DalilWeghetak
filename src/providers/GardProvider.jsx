import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/auth/useAuth";
import Loader from "../ui/loader/Loader";

function GardProvider({ children }) {
  const navigate = useNavigate();
  const { loading, isAuthed } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthed) {
      navigate("/signin");
    }
  }, [isAuthed, loading, navigate]);

  if (loading) {
    return <Loader />;
  }

  return <>{isAuthed ? children : null}</>;
}

export default GardProvider;
