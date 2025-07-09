import { Modal } from "react-bootstrap";
import { Link } from "react-router";

export default function AccountTypeModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered className="account-type-modal">
      <Modal.Header closeButton>
        <Modal.Title>اختر النوع</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="account-type-options">
          <Link to="/user-signup" className="type-card">
            <div className="card-content">
              <img src="/images/user.png" alt="المستخدم" />
              <div className="text">
                <h5>المستخدم</h5>
                <p>
                  هو الشخص الذي يستخدم التطبيق لشراء التذاكر أو الاستفادة من الخدمات المقدمة.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/provider-signup" className="type-card">
            <div className="card-content">
              <img src="/images/provider.jpg" alt="مزود الخدمة" />
              <div className="text">
                <h5>مزود الخدمة</h5>
                <p>
                  هو الكيان المسؤول عن تقديم الخدمات الموفرة داخل التطبيق.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}
