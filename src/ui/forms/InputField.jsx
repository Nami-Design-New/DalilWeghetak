import { Form } from "react-bootstrap";

export default function InputField({ label, error, icon, ...props }) {
  return (
    <div className="input-field">
      {label && (
        <label htmlFor={props?.id}>
          {icon && <i className={icon}></i> } {label} {error && <span className="hint">{error}</span>}
        </label>
      )}

      <Form.Control isInvalid={!!error} {...props} />
    </div>
  );
}
