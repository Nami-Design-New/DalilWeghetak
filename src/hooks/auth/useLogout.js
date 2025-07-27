import { useQueryClient } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setClientData } from "../../redux/slices/clientData";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import axiosInstance from "../../utils/axiosInstance";

export default function useLogout(t) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [cookies, , removeCookie] = useCookies(["token"]);

  const logout = async () => {
    try {
      const response = await axiosInstance.post(
        "user/logout",
        {
          token: cookies.token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.code === 200) {
        dispatch(setClientData({}));
        removeCookie("token", { path: "/" });
        delete axiosInstance.defaults.headers.common["Authorization"];
        queryClient.invalidateQueries();
        queryClient.removeQueries();
        navigate("/signin");
        toast.success(t("auth.logout_success"));
      }
    } catch (error) {
      console.error(
        "Error logging out:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data?.message || t("auth.logout_failed"));
      throw error;
    }
  };

  return {
    logout,
  };
}
