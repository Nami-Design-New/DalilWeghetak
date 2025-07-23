import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export default function useUpdateProfile() {
  const { mutate: updateProfile, isPending } = useMutation({
    mutationKey: ["update-profile"],
    mutationFn: updateProfileApi,
  });
  return {
    updateProfile,
    isPending,
  };
}

const updateProfileApi = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const data = new FormData();
  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("activity", formData.activity);
  data.append("bio", formData.bio);
  if (formData.image) {
    data.append("image", formData.image);
  }

  const response = await axiosInstance.post(
    "/user/update_profile",
    data,
    config
  );
  return response.data;
};
