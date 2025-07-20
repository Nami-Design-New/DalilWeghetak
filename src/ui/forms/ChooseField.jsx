import { Form } from "react-bootstrap";

export default function FormSelector({ options, error, label, ...props }) {
  return (
    <div className="form_select">
      {label && <label htmlFor={props?.id}>{label}</label>}
      
      <Form.Select isInvalid={!!error} {...props}>
        <option value=""></option>
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>

      {error && (
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </div>
  );
}
