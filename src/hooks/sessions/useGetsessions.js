import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetsessions() {
  console.log("-- sessions - hook");

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
  console.log("start ");

  try {
    const response = await axiosInstance.post("get_saudi_sessions");
    if (response.status === 200) {
      console.log(response.data.data);

      return response?.data?.data;
    }
  } catch (error) {
    return error?.response?.data?.message;
  }
}
