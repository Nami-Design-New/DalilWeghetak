import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import * as yup from "yup";
import axiosInstance from "../../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { setClientData } from "../../redux/slices/clientData";

export default function useRegister(t, type = "user") {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(["token"]);
const dispatch = useDispatch();

  const baseSchema = {
    name: yup.string().required(t("validation.required")).min(2).max(32),
    phone: yup.string().required(t("validation.required")).matches(/^\d+$/, t("validation.numbersOnly")),
    email: yup.string().required(t("validation.required")).email(t("validation.email")),
    password: yup.string().required(t("validation.required")).min(6),
  };

  const providerSchema = {
    activity: yup.string().required(t("validation.required")),
    bio: yup.string().required(t("validation.required")),
  };

  const schema = yup.object().shape(
    type === "service_provider" ? { ...baseSchema, ...providerSchema } : baseSchema
  );

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues:
      type === "service_provider"
        ? { name: "", phone: "", email: "", password: "", activity: "", bio: "" }
        : { name: "", phone: "", email: "", password: "" },
  });

  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: async () => {
      const values = getValues();
      const formData = new FormData();

      for (const [key, value] of Object.entries({ ...values, type })) {
        if (key !== "terms") {
          formData.append(key, value);
        }
      }

      const imageFile = watch("image");
      if (Array.isArray(imageFile) && imageFile.length > 0 && imageFile[0] instanceof File) {
        formData.append("image", imageFile[0]);
      }

      const response = await axiosInstance.post("/user/register", formData);
      return response.data;
    },

  onSuccess: (data) => {
  toast.success(t("auth.registerSuccess"));

  setCookie("token", data.data?.token, {
    path: "/",
    secure: true,
    sameSite: "Strict",
  });

  dispatch(setClientData(data.data)); 

  navigate("/");
},

    onError: (error) => {
      toast.error(error.response?.data?.message || error.message);
    },
  });

  return {
    register,
    handleSubmit,
    errors,
    watch,
    isLoading: isPending,
    registerUser,
  };
}
