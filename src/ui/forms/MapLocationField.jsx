import { useTranslation } from "react-i18next";

export default function MapLocationField({ label, name, setShowModal, error }) {
  const { t } = useTranslation();
  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  return (
    <div className="input-field">
      <label>
        {label} <span>{error}</span>
      </label>
      <div className="searchMapGroup" onClick={handleShowModal}>
        <span>{name || t("addEventForm.selectEventLocationOnMap")}</span>
        <button onClick={handleShowModal} />
      </div>
    </div>
  );
}
