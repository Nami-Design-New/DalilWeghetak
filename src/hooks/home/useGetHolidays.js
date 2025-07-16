// src/hooks/useGetSaudiHolidays.js
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetHolidays() {
  return useQuery({
    queryKey: ["saudiHolidays"],
    queryFn: async () => {
      const res = await axiosInstance.post("/get_saudi_sessions");
      if (res.status === 200) {
        return res.data.data || [];
      }
    },
  });
}
