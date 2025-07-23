import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetsessions() {
  const { data: sessions, isLoading } = useQuery({
    queryKey: ["sessions"],
    queryFn: getSessions,
  });

  return {
    sessions,
    isLoading,
  };
}

async function getSessions() {
  try {
    const response = await axiosInstance.post("get_saudi_sessions");
    if (response.status === 200) {
      return response?.data?.data;
    }
  } catch (error) {
    return error?.response?.data?.message;
  }
}
