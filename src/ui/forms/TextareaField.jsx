import { forwardRef } from "react";
import { Form } from "react-bootstrap";

const TextareaField = forwardRef(
  ({ label, hint, error, rows = 4, ...props }, ref) => {
    return (
      <div className="input-field">
        {label && (
          <Form.Label htmlFor={props?.id} className="input-label">
            {label} {hint && <span className="hint">{hint}</span>}
          </Form.Label>
        )}

        <div className="input-wrapper">
          <Form.Control
            as="textarea"
            rows={rows}
            isInvalid={!!error}
            ref={ref}
            {...props}
          />
          {error && (
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          )}
        </div>
      </div>
    );
  }
);

TextareaField.displayName = "TextareaField";

export default TextareaField;
