import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import useBookEvent from "../../hooks/events/useBookEvent";
import useAuth from "../../hooks/auth/useAuth";

export default function BookTicketModal({ show, handleClose, price, eventId }) {
  const [quantity, setQuantity] = useState(1);
  const { t } = useTranslation();
  const { isAuthed } = useAuth();
  const navigate = useNavigate();

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const { bookEvent, isPending } = useBookEvent();

  const total = quantity * price;

  const handleBookEvent = () => {
    if (!isAuthed) {
      navigate("/signin");
      return;
    }
    bookEvent(
      { event_id: eventId, quantity },
      {
        onSuccess: () => {
          toast.success(t("addEvent.bookConfirm"));
          handleClose();
          navigate("/my-bookings");
        },
        onError: (error) => {
          toast.error(error.response?.data?.message || t("auth.somethingWentWrong"));
        },
        onSettled: () => {},
      }
    );
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="book-ticket-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{t("bookingModal.title")}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="modal-content-wrapper">
          <div className="ticket-counter">
            <div className="ticket-info">
              <h6 className="label">{t("bookingModal.peopleLabel")}</h6>
              <h4 className="count">{quantity}</h4>
            </div>
            <div className="counter-controls">
              <Button
                variant="outline-dark"
                onClick={handleDecrease}
                className="minus-btn"
              >
                -
              </Button>
              <span className="count-display">{quantity}</span>
              <Button
                variant="outline-dark"
                onClick={handleIncrease}
                className="plus-btn"
              >
                +
              </Button>
            </div>
          </div>

          <div className="price-info">
            <p className="ticket-label">{t("bookingModal.ticketPriceLabel")}</p>
            <h5 className="ticket-price">
              {price} {t("bookingModal.currency")}
            </h5>
            <div className="total-box">
              <h6 className="text-muted">{t("bookingModal.totalLabel")}</h6>
              <h4 className="total-price">
                {total} {t("bookingModal.currency")}
              </h4>
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t("bookingModal.cancel")}
        </Button>
        <Button
          variant="primary"
          className="d-flex align-items-center gap-2 justify-content-center"
          onClick={handleBookEvent}
        >
          {isPending && <i className="fas fa-spinner fa-spin btn__spinner" />}
          {t("bookingModal.confirm")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
