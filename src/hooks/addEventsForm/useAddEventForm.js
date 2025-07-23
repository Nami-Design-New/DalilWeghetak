import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

const getSchema = (t) =>
  yup.object().shape({
    title_ar: yup.string().required(t("eventForm.titleArRequired")),
    title_en: yup.string().required(t("eventForm.titleEnRequired")),

    price: yup
      .number()
      .typeError(t("eventForm.priceMustBeNumber"))
      .min(0, t("eventForm.priceMin"))
      .required(t("eventForm.priceRequired")),

    from_date: yup
      .date()
      .typeError(t("eventForm.invalidFromDate"))
      .required(t("eventForm.fromDateRequired")),

    to_date: yup
      .date()
      .typeError(t("eventForm.invalidToDate"))
      .min(yup.ref("from_date"), t("eventForm.toDateAfterFromDate"))
      .required(t("eventForm.toDateRequired")),

    from_time: yup.string().required(t("eventForm.fromTimeRequired")),
    to_time: yup.string().required(t("eventForm.toTimeRequired")),

    lat: yup
      .number()
      .typeError(t("eventForm.invalidLatitude"))
      .required(t("eventForm.latitudeRequired")),

    lng: yup
      .number()
      .typeError(t("eventForm.invalidLongitude"))
      .required(t("eventForm.longitudeRequired")),

    audience: yup
      .string()
      .oneOf(
        ["all", "female", "male", "adult", "age"],
        t("eventForm.invalidAudience")
      )
      .required(t("eventForm.audienceRequired")),

    description_ar: yup.string().required(t("eventForm.descriptionArRequired")),
    description_en: yup.string().required(t("eventForm.descriptionEnRequired")),

    city_id: yup
      .number()
      .typeError(t("eventForm.cityIdMustBeNumber"))
      .required(t("eventForm.cityIdRequired")),

    image: yup
      .mixed()
      .required(t("eventForm.imageRequired"))
      .test("fileType", t("eventForm.imageFormat"), (value) => {
        if (!value || typeof value === "string") return false;
        return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
      }),
  });

export default function useAddEventForm() {
  const { t } = useTranslation();
  const methods = useForm({
    resolver: yupResolver(getSchema(t)),
    defaultValues: {},
    mode: "onSubmit",
  });

  return methods;
}
