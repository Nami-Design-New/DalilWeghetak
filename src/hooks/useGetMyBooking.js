import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosInstance";

export default function useGetMyBooking(type = "current") {
  console.log(type);
  const { data: myBookings, isLoading } = useQuery({
    queryKey: ["myBookings", type],
    queryFn: () => getMyBookings(type),
  });

  return {
    myBookings,
    isLoading,
  };
}

async function getMyBookings(type) {
  try {
    const response = await axiosInstance.post(`/user/my_events?type=${type}`);

    if (response.status === 200) {
      console.log(response.data.data);

      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
