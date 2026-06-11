import { Link } from "react-router-dom";

export default function TooltipButton({ to, tooltip, children, variant = "primary" }) {
  return (
    <Link className={`nexora-button ${variant}`} to={to} data-tooltip={tooltip}>
      {children}
    </Link>
  );
}
