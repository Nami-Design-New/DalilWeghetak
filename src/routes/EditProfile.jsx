// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import { useTranslation } from "react-i18next";
// import useGetProfile from "../hooks/account/useGetProfile";
// import InputField from "../ui/forms/InputField";
// import TextareaField from "../ui/forms/TextareaField";
// import useUpdateProfile from "../hooks/account/useUpdateProfile";
// import { toast } from "sonner";
// import SubmitButton from "../ui/forms/SubmitButton";

// const schema = Yup.object().shape({
//   name: Yup.string().required(t("profile.nameRequired")),
//   email: Yup.string()
//     .email(t("profile.emailInvalid"))
//     .required(t("profile.emailRequired")),
//   phone: Yup.string().required(t("profile.phoneRequired")),
//   activity: Yup.string().required(t("profile.activityRequired")),
//   bio: Yup.string().required(t("profile.bioRequired")),
//   image: Yup.mixed()
//     .nullable()
//     .test("fileType", t("profile.imageInvalid"), (value) => {
//       if (!value) return true;
//       return ["image/jpeg", "image/png", "image/webp"].includes(value.type);
//     }),
// });

// export default function EditProfile() {
//   const { t } = useTranslation();
//   const { data } = useGetProfile();
//   const [imagePreview, setImagePreview] = useState(null);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       activity: "",
//       bio: "",
//       image: null,
//     },
//   });

//   // Set form values when profile data is loaded
//   useEffect(() => {
//     if (data) {
//       reset({
//         name: data.name || "",
//         email: data.email || "",
//         phone: data.phone || "",
//         activity: data.activity || "",
//         bio: data.bio || "",
//         image: null,
//       });

//       if (data.image) {
//         setImagePreview(data.image); // preloaded image
//       }
//     }
//   }, [data, reset]);

//   // Watch image for live preview
//   const imageFile = watch("image");
//   useEffect(() => {
//     if (imageFile instanceof File) {
//       const url = URL.createObjectURL(imageFile);
//       setImagePreview(url);
//       return () => URL.revokeObjectURL(url);
//     }
//   }, [imageFile]);

//   const { updateProfile, isPending } = useUpdateProfile();

//   const onSubmit = (formData) => {
//     updateProfile(formData, {
//       onSuccess: (data) => {
//         console.log("Profile updated:", data);
//         toast.success("  تم تعديل الحساب بنجاح ");
//       },
//       onError: (error) => {
//         console.error("Update failed:", error);
//       },
//     });
//   };

//   return (
//     <div className="d-flex p-2 justify-content-center align-items-center min-vh-100 bg-light">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="form_ui  p-4 my-5 "
//         style={{ width: "100%", maxWidth: "768px" }}
//       >
//         <div className="form_group mb-4 position-relative text-center justify-content-center">
//           <label className="position-relative d-inline-block">
//             {imagePreview ? (
//               <img
//                 src={imagePreview}
//                 alt="preview"
//                 className="rounded-circle"
//                 style={{
//                   width: "150px",
//                   height: "150px",
//                   objectFit: "cover",
//                   border: "3px solid #dee2e6",
//                 }}
//               />
//             ) : (
//               <div
//                 className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center"
//                 style={{
//                   width: "150px",
//                   height: "150px",
//                 }}
//               >
//                 <i className="fa-solid fa-user fa-3x" />
//               </div>
//             )}

//             {/* Edit icon */}
//             <div
//               className="position-absolute bg-primary text-white rounded-circle p-2"
//               style={{
//                 bottom: "0",
//                 right: "0",
//                 transform: "translate(25%, 25%)",
//                 cursor: "pointer",
//               }}
//             >
//               <i className="fa-solid fa-edit" />
//             </div>

//             {/* File input (hidden) */}
//             <input
//               type="file"
//               accept="image/*"
//               hidden
//               {...register("image")}
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (file) {
//                   setValue("image", file, { shouldValidate: true });
//                 }
//               }}
//             />
//           </label>

//           {errors.image && (
//             <div className="text-danger small mt-1">{errors.image.message}</div>
//           )}
//         </div>

//         <div className="row">
//           <div className="col-md-6 p-2">
//             <InputField
//               label="الاسم"
//               {...register("name")}
//               error={errors.name}
//             />
//           </div>
//           <div className="col-md-6 p-2">
//             <InputField
//               label="البريد الالكتروني"
//               {...register("email")}
//               error={errors.email}
//             />
//           </div>
//           <div className="col-12 p-2">
//             <InputField
//               label="الهاتف"
//               {...register("phone")}
//               error={errors.phone}
//             />
//           </div>
//           <div className="col-12 p-2">
//             <TextareaField
//               label="النشاط"
//               {...register("activity")}
//               error={errors.activity}
//             />
//           </div>
//           <div className="col-12 p-2">
//             <TextareaField
//               label="الوصف"
//               {...register("bio")}
//               error={errors.bio}
//             />
//           </div>
//           <div className="col-12 p-2">
//             <SubmitButton text="حفظ التعديلات" loading={isPending} />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import * as Yup from "yup";
import useGetProfile from "../hooks/account/useGetProfile";
import useUpdateProfile from "../hooks/account/useUpdateProfile";
import InputField from "../ui/forms/InputField";
import SubmitButton from "../ui/forms/SubmitButton";
import TextareaField from "../ui/forms/TextareaField";

export default function EditProfile() {
  const { t } = useTranslation();
  const { data } = useGetProfile();
  const [imagePreview, setImagePreview] = useState(null);
  const queryClient = useQueryClient();
  const schema = Yup.object().shape({
    name: Yup.string().required(t("profile.nameRequired")),
    email: Yup.string()
      .email(t("profile.emailInvalid"))
      .required(t("emailRequired")),
    phone: Yup.string().required(t("profile.phoneRequired")),
    activity: Yup.string().required(t("profile.activityRequired")),
    bio: Yup.string().required(t("profile.bioRequired")),
    image: Yup.mixed()
      .nullable()
      .test("fileType", t("profile.imageInvalid"), (value) => {
        if (!value) return true;
        return ["image/jpeg", "image/png", "image/webp"].includes(value.type);
      }),
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      activity: "",
      bio: "",
      image: null,
    },
  });

  useEffect(() => {
    if (data) {
      reset({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        activity: data.activity || "",
        bio: data.bio || "",
        image: null,
      });

      if (data.image) {
        setImagePreview(data.image);
      }
    }
  }, [data, reset]);

  const imageFile = watch("image");
  useEffect(() => {
    if (imageFile instanceof File) {
      const url = URL.createObjectURL(imageFile);
      setImagePreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [imageFile]);

  const { updateProfile, isPending } = useUpdateProfile();

  const onSubmit = (formData) => {
    updateProfile(formData, {
      onSuccess: () => {
        toast.success(t("profile.successMessage"));
        queryClient.invalidateQueries({ queryKey: ["profile"] });
      },
      onError: (error) => {
        console.error("Update failed:", error);
      },
    });
  };

  return (
    <div className="d-flex p-2 justify-content-center align-items-center min-vh-100 bg-light">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form_ui  p-4 my-5"
        style={{ width: "100%", maxWidth: "768px" }}
      >
        <div className="form_group mb-4 position-relative text-center justify-content-center">
          <label className="position-relative d-inline-block">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="preview"
                className="rounded-circle"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  border: "3px solid #dee2e6",
                }}
              />
            ) : (
              <div
                className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "150px",
                  height: "150px",
                }}
              >
                <i className="fa-solid fa-user fa-3x" />
              </div>
            )}

            <div
              className="position-absolute bg-primary text-white rounded-circle p-2"
              style={{
                bottom: "0",
                right: "0",
                transform: "translate(25%, 25%)",
                cursor: "pointer",
              }}
            >
              <i className="fa-solid fa-edit" />
            </div>

            <input
              type="file"
              accept="image/*"
              hidden
              {...register("image")}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setValue("image", file, { shouldValidate: true });
                }
              }}
            />
          </label>

          {errors.image && (
            <div className="text-danger small mt-1">{errors.image.message}</div>
          )}
        </div>

        <div className="row">
          <div className="col-md-6 p-2">
            <InputField
              label={t("profile.name")}
              {...register("name")}
              error={errors.name}
            />
          </div>
          <div className="col-md-6 p-2">
            <InputField
              label={t("profile.email")}
              {...register("email")}
              error={errors.email}
            />
          </div>
          <div className="col-12 p-2">
            <InputField
              label={t("profile.phone")}
              {...register("phone")}
              error={errors.phone}
            />
          </div>
          <div className="col-12 p-2">
            <TextareaField
              label={t("profile.activity")}
              {...register("activity")}
              error={errors.activity}
            />
          </div>
          <div className="col-12 p-2">
            <TextareaField
              label={t("profile.bio")}
              {...register("bio")}
              error={errors.bio}
            />
          </div>
          <div className="col-12 p-2">
            <SubmitButton text={t("profile.saveChanges")} loading={isPending} />
          </div>
        </div>
      </form>
    </div>
  );
}
