import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetSettings() {
  const { data: settings, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { settings, isLoading };
}

async function getSettings() {
  try {
    const response = await axiosInstance.get("/get_settings");
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
