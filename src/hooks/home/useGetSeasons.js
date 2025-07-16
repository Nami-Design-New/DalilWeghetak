// src/hooks/useGetSaudiSeasons.js
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetSeasons() {
  return useQuery({
    queryKey: ["saudiSeasons"],
    queryFn: async () => {
      const res = await axiosInstance.post("/get_saudi_holidays");
      if (res.status === 200) {
        return res.data.data || [];
      }
    },
  });
}
