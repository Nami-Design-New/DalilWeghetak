import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useUpdateUserPassword() {
  const { mutate: updatePasswrod, isPending } = useMutation({
    mutationKey: ["update-password"],
    mutationFn: updatePasswrodApi,
  });
  return {
    updatePasswrod,
    isPending,
  };
}

const updatePasswrodApi = async (formData) => {
  try {
    const response = await axiosInstance.post("/user/update_profile", formData);
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
