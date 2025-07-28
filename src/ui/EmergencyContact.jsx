import { useState } from "react";
import { useTranslation } from "react-i18next";

const emergencyOptions = [
  { nameKey: "kingdomEmergency", value: "112", labelKey: "kingdomEmergency" },
  { nameKey: "civilDefense", value: "998", labelKey: "civilDefense" },
  { nameKey: "ambulance", value: "997", labelKey: "ambulance" },
  { nameKey: "najdah", value: "999", labelKey: "najdah" },
];

export default function EmergencyContact() {
  const { t } = useTranslation();
  const [selectedNumber, setSelectedNumber] = useState("911");

  const handleChange = (e) => {
    setSelectedNumber(e.target.value);
  };

  return (
    <div className="emergency-contact">
      <p className="title">{t("emergencyNumbers")}</p>

      <div className="select-group">
        <label className="label">{t("selectType")}</label>
        <select className="select" onChange={handleChange}>
          <option value="">{t("selectType")}</option>
          {emergencyOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {t(option.labelKey)}
            </option>
          ))}
        </select>
      </div>

      {selectedNumber && (
        <p className="number-display">
          <span className="label">{t("number")}:</span>{" "}
          <span className="number">{selectedNumber}</span>
        </p>
      )}

      {selectedNumber && (
        <a href={`tel:${selectedNumber}`} className="call-button">
          {t("callNow")}
        </a>
      )}
    </div>
  );
}
