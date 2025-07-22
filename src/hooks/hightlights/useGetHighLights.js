import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetHighLights() {
  const { data, isLoading } = useQuery({
    queryKey: ["highlights"],
    queryFn: getHighlights,
  });

  return {
    data,
    isLoading,
  };
}

async function getHighlights() {
  try {
    const response = await axiosInstance.post("get_highlights");
    if (response.status === 200) {
      console.log(response.data.data);

      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
