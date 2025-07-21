import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetHolidays() {
  return useQuery({
    queryKey: ["holiays"],
    queryFn: async () => {
      const res = await axiosInstance.post("/get_saudi_holidays");
      if (res.status === 200) {
        return res.data.data || [];
      }
    },
  });
}
