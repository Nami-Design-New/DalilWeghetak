import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../../redux/slices/chargeModal";
import InputField from "./../forms/InputField";

const ChargeModal = () => {
  const { t } = useTranslation();
  const [chargeValue, setChargeValue] = useState("");
  const [cookies] = useCookies(["token"]);
  const token = cookies?.token;
  const dispatch = useDispatch();

  const show = useSelector((state) => state.chargeModal.show);
  const cartTotalPrice = useSelector((state) => state.chargeModal.totalPrice);

  return (
    <Modal show={show} onHide={() => dispatch(setShow(false))} centered>
      <Modal.Header className="pb-0" closeButton />
      <Modal.Body className="pay_modal">
        {cartTotalPrice && (
          <h3 className="text-center">
            {t("bookingModal.insufficientFunds")}{" "}
            <span>
              {cartTotalPrice}
              <i className="fa-solid fa-dollar-sign"></i>
            </span>
          </h3>
        )}

        <form className="form_ui">
          <InputField
            type="number"
            id="chargeValue"
            name="chargeValue"
            placeholder={"00"}
            value={chargeValue}
            label={t("bookingModal.enterChargeValue")}
            onChange={(e) => setChargeValue(e.target.value)}
          />
        </form>

        <div className="d-flex justify-content-end gap-3 mt-4">
          <button onClick={() => dispatch(setShow(false)) } className="cancel-btn">
            {t("cancel")}
          </button>
          <Link
            className="order-now text-center"
            to={
              chargeValue === 0 || chargeValue === ""
                ? ""
                : `https://api.dalilwejhtak.com.sa/payment/${chargeValue}/wallet?Authorization=${token}&Redirect_url=${window.location.href}`
            }
          >
            {t("bookingModal.chargeWallet")}
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ChargeModal;
