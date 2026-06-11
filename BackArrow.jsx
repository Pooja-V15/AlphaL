import { useNavigate } from "react-router-dom";

export default function BackArrow({ className = "", onClick, label = "Go back" }) {
  const navigate = useNavigate();

  function goBack() {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/home", { replace: true });
  }

  return (
    <button
      className={`top-back-arrow ${className}`.trim()}
      type="button"
      aria-label={label}
      onClick={onClick || goBack}
    >
      ←
    </button>
  );
}
