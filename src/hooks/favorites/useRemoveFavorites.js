import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useRemoveFavorites() {
  const { mutate: removeFavorite, isPending } = useMutation({
    mutationKey: ["remove-favorite"],
    mutationFn: (id) => removeFavoriteApi(id),
  });
  return { removeFavorite, isPending };
}

async function removeFavoriteApi(id) {
  try {
    const response = await axiosInstance.post("/user/remove_from_favorite", {
      event_id: id,
    });
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
