// import { Modal } from "react-bootstrap";
// import { Link } from "react-router";
// import { useTranslation } from "react-i18next";

// export default function AccountTypeModal({ show, handleClose }) {
//   const { t } = useTranslation();

//   return (
//     <Modal show={show} onHide={handleClose} centered className="account-type-modal">
//       <Modal.Header closeButton>
//         <Modal.Title>{t("accountType.title")}</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <div className="account-type-options">
//           <Link to="/user-signup" className="type-card">
//             <div className="card-content">
//               <img src="/images/user.png" alt={t("accountType.userAlt")} />
//               <div className="text">
//                 <h5>{t("accountType.userTitle")}</h5>
//                 <p>{t("accountType.userDesc")}</p>
//               </div>
//             </div>
//           </Link>

//           <Link to="/provider-signup" className="type-card">
//             <div className="card-content">
//               <img src="/images/provider.jpg" alt={t("accountType.providerAlt")} />
//               <div className="text">
//                 <h5>{t("accountType.providerTitle")}</h5>
//                 <p>{t("accountType.providerDesc")}</p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// }
// AccountTypeModal.jsx
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function AccountTypeModal({ show, handleClose, onSelect }) {
  const { t } = useTranslation();

  const handleSelect = (type) => {
    onSelect(type); 
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="account-type-modal">
      <Modal.Header closeButton>
        <Modal.Title>{t("accountType.title")}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="account-type-options">
          <div className="type-card" onClick={() => handleSelect("user")}>
            <div className="card-content">
              <img src="/images/user.png" alt={t("accountType.userAlt")} />
              <div className="text">
                <h5>{t("accountType.userTitle")}</h5>
                <p>{t("accountType.userDesc")}</p>
              </div>
            </div>
          </div>

          <div className="type-card" onClick={() => handleSelect("service_provider")}>
            <div className="card-content">
              <img src="/images/provider.jpg" alt={t("accountType.providerAlt")} />
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
