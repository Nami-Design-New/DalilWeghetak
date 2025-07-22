import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useBookEvent() {
  const { mutate: bookEvent, isPending } = useMutation({
    mutationKey: ["booking"],
    mutationFn: ({ event_id, quantity }) => bookEventApi(event_id, quantity),
  });

  return {
    bookEvent,
    isPending,
  };
}

async function bookEventApi(event_id, quantity) {
  try {
    const response = await axiosInstance.post("/user/book_now", {
      event_id,
      quantity,
    });

    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
