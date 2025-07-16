import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetNotifications() {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await axiosInstance.post("/get_notifications");
      if (res.status === 200) {
        return res.data.data || [];
      }
    },
  });
}
