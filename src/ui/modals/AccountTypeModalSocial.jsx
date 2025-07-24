import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function AccountTypeModalSocial({
  showSocialModal,
  setShowSocialModal,
  handleChangeType,
}) {
  const { t } = useTranslation();
  const handleSelectType = (type) => {
    handleChangeType(type);
    setShowSocialModal(false);
  };
  return (
    <Modal
      show={showSocialModal}
      onHide={() => setShowSocialModal(false)}
      centered
      className="account-type-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>{t("accountType.title")}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="account-type-options">
          <div className="type-card" onClick={() => handleSelectType("user")}>
            <div className="card-content">
              <img src="/images/user.png" alt={t("accountType.userAlt")} />
              <div className="text">
                <h5>{t("accountType.userTitle")}</h5>
                <p>{t("accountType.userDesc")}</p>
              </div>
            </div>
          </div>

          <div
            className="type-card"
            onClick={() => handleSelectType("service_provider")}
          >
            <div className="card-content">
              <img
                src="/images/provider.jpg"
                alt={t("accountType.providerAlt")}
              />
              <div className="text">
                <h5>{t("accountType.providerTitle")}</h5>
                <p>{t("accountType.providerDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
