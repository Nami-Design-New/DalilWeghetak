import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useDeleteAccount() {
  const { mutate: deleteAccount, isPending } = useMutation({
    mutationKey: ["delete-account"],
    mutationFn: deleteAccountApi,
  });
  return {
    deleteAccount,
    isPending,
  };
}

async function deleteAccountApi() {
  try {
    const response = await axiosInstance.post("/user/delete_account");
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
