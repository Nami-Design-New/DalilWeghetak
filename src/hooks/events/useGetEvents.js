import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetEvents(type = "event") {
  const [searchParams] = useSearchParams();

  const rawCategories = searchParams.get("categories");
  const rawCity = searchParams.get("city");
  const search = searchParams.get("search");
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  const categories_id = rawCategories
    ? rawCategories.split("-").map(Number)
    : null;

  const city_id = rawCity ? Number(rawCity) : null;

  const queryKey = [type, categories_id, city_id, search, from, to];

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () =>
      getEvents({
        type,
        categories_id,
        city_id,
        search,
        from,
        to,
      }),
    enabled: !!type,
  });

  return {
    data,
    isLoading,
    error,
  };
}

async function getEvents({ type, categories_id, city_id, search, from, to }) {
  try {
    const requestBody = {
      type,
      ...(categories_id?.length ? { categories_id } : {}),
      ...(city_id ? { city_id } : {}),
      ...(search ? { search } : {}),
      ...(from ? { from } : {}),
      ...(to ? { to } : {}),
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
