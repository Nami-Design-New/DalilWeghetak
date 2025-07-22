import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useAddFavorites() {
  const { mutate: addFavorite, isPending } = useMutation({
    mutationKey: ["add-favorite"],
    mutationFn: (id) => addFavoriteApi(id),
  });
  return { addFavorite, isPending };
}

async function addFavoriteApi(id) {
  try {
    const response = await axiosInstance.post("/user/add_to_favorite", {
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
