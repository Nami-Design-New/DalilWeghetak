import { Form } from "react-bootstrap";

export default function UploadImage({ label, error, value, onChange }) {
  return (
    <div className="upload_box">
      <label className={`upload_label ${error ? "is-invalid" : ""}`}>
        {value ? (
          <img src={URL.createObjectURL(value)} alt="event" />
        ) : (
          <div className="upload_placeholder">
            <i className="fa-solid fa-cloud-arrow-up"></i>
            <p>{label}</p>
            <span>اضغط لاختيار صورة</span>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => onChange(e.target.files[0])}
          hidden
        />
      </label>

      {error && (
        <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
          {error}
        </Form.Control.Feedback>
      )}
    </div>
  );
}
