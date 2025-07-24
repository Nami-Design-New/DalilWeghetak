import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetPalnDetails() {
  const { id } = useParams();

  const { data: planDetails, isLoading } = useQuery({
    queryKey: ["plan-details", id],
    queryFn: () => getPlanDetails(id),
  });

  return {
    planDetails,
    isLoading,
  };
}

async function getPlanDetails(id) {
  try {
    const response = await axiosInstance.post("get_about_app_details", { id });
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
