import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import axiosInstance from "../../utils/axiosInstance";

export default function useAddEventForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title_ar: yup.string().required(t("addEventForm.titleArRequired")),
    title_en: yup.string().required(t("addEventForm.titleEnRequired")),

    is_free: yup.boolean().required(),

    price: yup
      .number()
      .nullable()
      .transform((_, val) => (val === "" ? null : Number(val)))
      .when("is_free", {
        is: false,
        then: (schema) =>
          schema
            .typeError(t("addEventForm.priceMustBeNumber"))
            .min(0, t("addEventForm.priceMin"))
            .required(t("addEventForm.priceRequired")),
        otherwise: (schema) => schema.notRequired(),
      }),

    city_id: yup.string().required(t("addEventForm.cityIdRequired")),

    lat: yup
      .number()
      .typeError(t("addEventForm.locationRequired"))
      .required(t("addEventForm.locationRequired")),

    lng: yup
      .number()
      .typeError(t("addEventForm.locationRequired"))
      .required(t("addEventForm.locationRequired")),

    description_ar: yup
      .string()
      .required(t("addEventForm.descriptionArRequired")),
    description_en: yup
      .string()
      .required(t("addEventForm.descriptionEnRequired")),

    image: yup
      .mixed()
      .required(t("addEventForm.imageRequired"))
      .test("fileType", t("addEventForm.imageFormat"), (value) => {
        if (!value || typeof value === "string") return false;
        return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
      }),

    from_date: yup
      .date()
      .typeError(t("addEventForm.invalidFromDate"))
      .required(t("addEventForm.fromDateRequired")),

    to_date: yup
      .date()
      .typeError(t("addEventForm.invalidToDate"))
      .min(yup.ref("from_date"), t("addEventForm.toDateAfterFromDate"))
      .required(t("addEventForm.toDateRequired")),

    from_time: yup.string().required(t("addEventForm.fromTimeRequired")),
    to_time: yup.string().required(t("addEventForm.toTimeRequired")),

    audience: yup
      .string()
      .oneOf(["all", "female", "male", "adult", "age"])
      .required(t("addEventForm.audienceRequired")),

    from_age: yup.number().nullable(),
    to_age: yup.number().nullable(),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      title_ar: "",
      title_en: "",
      price: "",
      city_id: "",
      lat: "",
      lng: "",
      description_ar: "",
      description_en: "",
      image: null,
      from_date: "",
      to_date: "",
      from_time: "",
      to_time: "",
      audience: "all",
      from_age: null,
      to_age: null,
      categories: [],
      is_free: true,
    },
  });

  const triggerStep = async (step) => {
    if (step === 1) {
      return await methods.trigger([
        "title_ar",
        "title_en",
        "price",
        "city_id",
        "lat",
        "lng",
        "description_ar",
        "description_en",
        "image",
      ]);
    }
    return await methods.trigger();
  };
  const { mutate: addEventMutation, isPending } = useMutation({
    mutationFn: async (data) => {
      const { is_free, ...filteredData } = data;
      
      const response = await axiosInstance.post(
        "/user/create_event",
        filteredData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.code === 200) {
        navigate("/my-events");
        toast.success(t("addEventForm.eventAdded"));
      } else {
        toast.error(t("addEventForm.somethingWentWrong"));
      }
    },

    onError: (error) => {
      toast.error(error.message || t("auth.somethingWentWrong"));
    },
  });

  return { methods, triggerStep, FormProvider, addEventMutation, isPending };
}
