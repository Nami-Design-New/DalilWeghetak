import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetBanners() {
  const { lang } = useSelector((state) => state.settings);

  const { isLoading, data, error } = useQuery({
    queryKey: ["home-banners", lang],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/get_banners");
        if (res.status === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching banners:", error.message);
        throw error;
      }
    },
  });

  return { isLoading, data, error };
}
