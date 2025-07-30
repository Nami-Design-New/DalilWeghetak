import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setClientData } from "../../redux/slices/clientData";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import axiosInstance from "../../utils/axiosInstance";

export default function useRegister({
  type = "user",
  setStep,
  code,
  setCode,
  hashedCode,
  setHashedCode,
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, setCookie] = useCookies(["token"]);

  const baseSchema = {
    name: yup.string().required(t("validation.required")).min(2).max(32),
    phone: yup
      .string()
      .required(t("validation.required"))
      .matches(/^\d+$/, t("validation.numbersOnly")),
    email: yup
      .string()
      .required(t("validation.required"))
      .email(t("validation.email")),
    password: yup
      .string()
      .required(t("validation.required"))
      .min(8, t("validation.min", { min: 8 }))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!#%*?&]{8,}$/,
        t("validation.passwordComplexity")
      ),
    terms: yup.boolean().oneOf([true], t("validation.termsRequired")),
  };

  const providerSchema = {
    activity: yup.string().required(t("validation.required")),
    bio: yup.string().required(t("validation.required")),
  };

  const schema = yup
    .object()
    .shape(
      type === "service_provider"
        ? { ...baseSchema, ...providerSchema }
        : baseSchema
    );

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues:
      type === "service_provider"
        ? {
            name: "",
            phone: "",
            email: "",
            password: "",
            activity: "",
            bio: "",
            terms: false,
          }
        : {
            name: "",
            phone: "",
            email: "",
            password: "",
            terms: false,
          },
  });

  const { getValues } = methods;

  const { mutate: canRegister, isPending: canRegisterPending } = useMutation({
    mutationFn: async () => {
      const values = getValues();
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("phone", values.phone);

      const response = await axiosInstance.post("/user/can_register", formData);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.code === 200) {
        toast.success(t("auth.registerCodeSent"));
        setHashedCode(data.data);
        setStep(2);
      } else {
        toast.error(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || error.message);
    },
  });

  const { mutate: checkCode, isPending: checkCodePending } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post("/user/check_code", {
        code,
        hashed_code: hashedCode,
      });
      return response.data;
    },
    onSuccess: (data) => {
      if (data.code === 200) {
        registerUser();
      } else {
        toast.error(data.message || t("auth.wrongCode"));
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || error.message);
    },
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

      const response = await axiosInstance.post("/user/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
    ...methods,
    canRegister,
    canRegisterPending,
    checkCode,
    isLoading: isPending || checkCodePending,
    setCode,
    code,
  };
}
