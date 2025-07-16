// src/hooks/useGetEvents.js
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosInstance.post("/get_events");
      if (res.status === 200) {
        return res.data.data || [];
      } else {
        throw new Error("Failed to fetch events");
      }
    },
  });
}
