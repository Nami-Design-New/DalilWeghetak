import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetHighLightsDetails() {
  const { id } = useParams();
  const { data: highlightsDetails, isLoading } = useQuery({
    queryKey: ["highlight-details", id],
    queryFn: () => getHighlightDetails(id),
  });
  return { highlightsDetails, isLoading };
}

async function getHighlightDetails(id) {
  try {
    const response = await axiosInstance.post("/get_highlight_details", {
      id,
    });

    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
