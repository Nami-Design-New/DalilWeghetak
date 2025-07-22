import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetFavorites() {
  const { data, isLoading } = useQuery({
    queryKey: ["favorites"],
    queryFn: getFavs,
  });
  return { data, isLoading };
}

async function getFavs() {
  try {
    const response = await axiosInstance.post("/user/get_favorites_events");

    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
