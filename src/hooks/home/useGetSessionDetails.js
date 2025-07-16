// src/hooks/home/useGetSessionDetails.js
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetSessionDetails(id) {
  return useQuery({
    queryKey: ["sessionDetails", id],
    queryFn: async () => {
      const res = await axiosInstance.post("/get_saudi_holiday_details", { id }); 
      if (res.status === 200) {
        return res.data.data; 
      }
      throw new Error("Failed to fetch session details");
    },
    enabled: !!id,
  });
}
