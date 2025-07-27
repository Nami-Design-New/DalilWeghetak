import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";

export default function useGetEventDetails() {
  const { id } = useParams();
  const { lang } = useSelector((state) => state.settings);

  const { data: eventDetails, isLoading } = useQuery({
    queryKey: ["event-details", id, lang],
    queryFn: ({ queryKey }) => getEventDetails(queryKey[1]),
    enabled: !!id,
  });

  return { eventDetails, isLoading };
}

async function getEventDetails(id) {
  try {
    const response = await axiosInstance.post("get_event_details", {
      id,
    });

    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.error("Error fetching event details:", error);
    throw error;
  }
}
