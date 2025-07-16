import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function BookTicketModal({ show, handleClose, price }) {
  const [count, setCount] = useState(1);
  const { t } = useTranslation();

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const total = count * price;

  return (
    <Modal show={show} onHide={handleClose} centered className="book-ticket-modal">
      <Modal.Header closeButton>
        <Modal.Title>{t("bookingModal.title")}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="modal-content-wrapper">
          <div className="ticket-counter">
            <div className="ticket-info">
              <h6 className="label">{t("bookingModal.peopleLabel")}</h6>
              <h4 className="count">{count}</h4>
            </div>
            <div className="counter-controls">
              <Button variant="outline-dark" onClick={handleDecrease} className="minus-btn">-</Button>
              <span className="count-display">{count}</span>
              <Button variant="outline-dark" onClick={handleIncrease} className="plus-btn">+</Button>
            </div>
          </div>

          <div className="price-info">
            <p className="ticket-label">{t("bookingModal.ticketPriceLabel")}</p>
            <h5 className="ticket-price">{price} {t("bookingModal.currency")}</h5>
            <div className="total-box">
              <h6 className="text-muted">{t("bookingModal.totalLabel")}</h6>
              <h4 className="total-price">{total} {t("bookingModal.currency")}</h4>
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t("bookingModal.cancel")}
        </Button>
        <Button variant="primary">
          {t("bookingModal.confirm")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
