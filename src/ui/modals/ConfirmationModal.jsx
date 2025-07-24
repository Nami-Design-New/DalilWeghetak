import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function ConfirmationModal({
  showModal,
  setShowModal,
  header,
  message,
  isPending,
  action,
}) {
  const { t } = useTranslation();
  return (
    <Modal centered show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton> {t(header)} </Modal.Header>
      <Modal.Body>
        <p className="text-center"> {t(message)} </p>
        <div className="d-flex align-items-center gap-3">
          <Button
            variant="danger"
            style={{ width: "100%", borderRadius: "12px" }}
            onClick={action}
          >
            {isPending && (
              <i className="fa-regular fa-circle-notch fa-spin"></i>
            )}
            {t("confirm")}
          </Button>
          <Button
            variant="outline-dark"
            style={{ width: "100%", borderRadius: "12px" }}
            onClick={() => setShowModal(false)}
          >
            {t("cancel")}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
