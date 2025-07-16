import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetProfile(enabeled = true) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/user/get_profile");
        if (res.status === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching profile:", error.message);
        throw error;
      }
    },
    enabled: enabeled,
  });
  return { isLoading, data, error };
}
