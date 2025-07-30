import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetHighLights() {
  const [searchParams] = useSearchParams();
  const category_id = searchParams.get("category_id");

  const { data, isLoading } = useQuery({
    queryKey: ["highlights", category_id],
    queryFn: () => getHighlights(category_id),
  });

  return {
    data,
    isLoading,
  };
}

async function getHighlights(category_id) {
  try {
    const response = await axiosInstance.post("get_highlights", {
      category_id,
    });
    if (response.status === 200) {
      console.log(response.data.data);

      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
