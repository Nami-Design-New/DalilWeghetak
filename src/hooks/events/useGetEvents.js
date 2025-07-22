import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetEvents(type = "event") {
  const [searchParams] = useSearchParams();

  const { lang } = useSelector((state) => state.settings);

  const rawCategories = searchParams.get("categories_id");
  const categories_id = rawCategories
    ? rawCategories.split("-").map(Number)
    : null;

  const { data, isLoading, error } = useQuery({
    queryKey: [type, categories_id, lang],
    queryFn: () => getEvents(type, categories_id),
    enabled: !!type,
  });

  return {
    data,
    isLoading,
    error,
  };
}

async function getEvents(type, categories_id) {
  try {
    const requestBody = {
      type,
      ...(categories_id && categories_id.length > 0 && { categories_id }),
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
