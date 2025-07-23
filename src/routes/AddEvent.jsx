import { useForm } from "react-hook-form";

import InputField from "../ui/forms/InputField";
import SubmitButton from "../ui/forms/SubmitButton";
import TextareaField from "../ui/forms/TextareaField";
import FormSelector from "../ui/forms/ChooseField";
import CategorySelect from "../ui/forms/CategorySelect";
import { useState } from "react";
import useGetCities from "../hooks/home/useCities";
import { useTranslation } from "react-i18next";

export default function AddEvent() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const category = watch("category");
  const [selectedImage, setSelectedImage] = useState(null);
  const [audience, setAudience] = useState("");
  const [step, setStep] = useState(1);
  const { data: cities = [], isLoading: isCitiesLoading } = useGetCities();
  const cityOptions = cities.map((city) => ({
    label: city.name,
    value: city.id,
  }));

  const onSubmit = (data) => {
    console.log("Event Data:", data);

    setStep(2);
  };

  return (
    <section className="auth_section ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 p-3">
         
          </div>

          <div className="col-lg-6 d-none d-lg-block p-3">
            <div className="auth-image-wrapper">
              <img src="/images/add.jpg" alt="Saudi Travel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
