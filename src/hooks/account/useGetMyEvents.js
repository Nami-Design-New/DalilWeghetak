import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetMyEvents() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["my-created-events"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/user/my_created_events");
        if (res.status === 200) {
          return res.data.data || {};
        }
      } catch (error) {
        console.error("Error fetching created events:", error.message);
        throw error;
      }
    },
  });
  return { isLoading, data, error };
}
