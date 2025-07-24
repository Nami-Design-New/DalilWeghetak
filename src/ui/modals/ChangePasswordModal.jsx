import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import InputField from "../forms/InputField";
import SubmitButton from "../forms/SubmitButton";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as yup from "yup";
import { useSelector } from "react-redux";
import useUpdateUserPassword from "../../hooks/account/useUpdateUserPassword";

export default function ChangePasswordModal({ showModal, setShowModal }) {
  const { t } = useTranslation();
  const { client } = useSelector((state) => state.clientData);

  const { updatePasswrod, isPending } = useUpdateUserPassword();

  const schema = yup.object().shape({
    password: yup.string().required(t("passwordRequired")),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], t("passwordsMustMatch"))
      .required(t("confirmPasswordRequired")),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    updatePasswrod(
      { password: data.password, phone: client?.phone, email: client?.email },
      {
        onSuccess: () => {
          toast.success(t("updatedSuccessfully"));
          setShowModal(false);
        },
      }
    );
  };

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      size="md"
      centered
    >
      <Modal.Header closeButton> {t("changePassword")} </Modal.Header>
      <Modal.Body>
        <form className="form_ui" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-12 p-2">
              <InputField
                name="password"
                label={t("password")}
                type="password"
                {...register("password")}
                error={errors.password?.message}
              />
            </div>
            <div className="col-12 p-2">
              <InputField
                name="confirmPassword"
                label={t("confirmPassword")}
                type="password"
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
              />
            </div>
            <div className="col-12 p-2">
              <SubmitButton text={t("confirm")} loading={isPending} />
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
