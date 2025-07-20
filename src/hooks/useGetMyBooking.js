import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetMyBooking(type = "current") {
  return useQuery({
    queryKey: ["myBookings", type],
    queryFn: async () => {
      const res = await axiosInstance.post(`/user/my_events?type=${type}`);
      if (res.status === 200) {
        return res.data.data || [];
      }
    },
  });
}


