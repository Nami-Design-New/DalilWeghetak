export default function CheckField({ id, label, checked, onChange }) {
  return (
    <div className="form-check custom_check_field">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
