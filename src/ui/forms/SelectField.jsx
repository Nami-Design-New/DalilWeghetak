import { Form } from "react-bootstrap";

export default function SelectField({
  label,
  options,
  error,
  icon,
  defaultSelect,
  ...props
}) {
  return (
    <div className="input-field">
      {label && (
        <label htmlFor={props?.id}>
          {icon && <i className={icon}></i>} {label}{" "}
          {error && <span className="hint">{error}</span>}
        </label>
      )}

      <Form.Select isInvalid={!!props?.error} {...props}>
        <option value="" disabled>
          {defaultSelect}
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
