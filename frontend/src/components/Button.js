import { FaSpinner } from "react-icons/fa";

export default function Button({
  type = "button",
  title,
  outline = false,
  onClick = () => {},
  loading,
  text,
  children,
  full = false,
  disabled = false,
  customStyle,
}) {
  const btnClassNames = [
    "btnPrimary",
    outline ? "outline" : "",
    full ? "full" : "",
    disabled ? "disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      title={title}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        onClick(e);
      }}
      className={btnClassNames}
      style={{ ...customStyle }}
    >
      {loading ? (
        <>
          <FaSpinner size="16" className="buttonSpinner" />
          <span style={{ paddingLeft: "0.5rem" }}>Loading...</span>
        </>
      ) : (
        text || children
      )}
    </button>
  );
}
