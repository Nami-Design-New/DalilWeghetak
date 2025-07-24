import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetPlans() {
  const { data: plans, isLoading } = useQuery({
    queryKey: ["plans"],
    queryFn: getPlans,
  });
  return { plans, isLoading };
}

async function getPlans() {
  try {
    const response = await axiosInstance.get("get_about_app");
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
