import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { setClientData, setUserType } from "../../redux/slices/clientData";
import axiosInstance from "../../utils/axiosInstance";
import useGetProfile from "../account/useGetProfile";

export default function useAuth() {
  const dispatch = useDispatch();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const { token } = cookies;

  useEffect(() => {
    if (token) {
      axiosInstance.defaults.headers.common["Authorization"] = token;
    } else {
      delete axiosInstance.defaults.headers.common["Authorization"];
      removeCookie("token", { path: "/" });
    }
  }, [token, removeCookie]);

  const { data: profile, isLoading, error } = useGetProfile(!!token);

  useEffect(() => {
    if (profile) {
      dispatch(setClientData(profile));
      dispatch(setUserType(profile?.type));
    }
  }, [profile, dispatch]);

  return {
    loading: isLoading,
    isAuthed: !!profile && !error,
  };
}
