import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../css/field.css";

export function Field({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange = () => {},
  halfWidth = false,
  error,
}) {
  return (
    <div className={`formGroup ${halfWidth ? "half" : ""}`}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="errorMsg">{error}</span>}
    </div>
  );
}

export function Password({
  label,
  name,
  placeholder,
  value,
  onChange = () => {},
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="formGroup">
      <label htmlFor={name}>{label}</label>
      <div className="passwordField">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {showPassword ? (
          <FaEyeSlash onClick={() => setShowPassword(false)} />
        ) : (
          <FaEye onClick={() => setShowPassword(true)} />
        )}
      </div>
      {error && <span className="errorMsg">{error}</span>}
    </div>
  );
}
