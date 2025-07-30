import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetUsersEvents() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user-events"],
    queryFn: getEvents,
  });

  return {
    data,
    isLoading,
    error,
  };
}

async function getEvents() {
  try {
    const requestBody = {
      is_user: true,
    };

    const response = await axiosInstance.post("/get_events", requestBody);

    if (response.status === 200) {
      return response?.data?.data;
    }

    throw new Error("Unexpected response status");
  } catch (error) {
    console.error("Fetch events failed:", error);
    throw error;
  }
}
