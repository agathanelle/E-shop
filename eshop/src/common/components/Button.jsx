import clsx from "clsx";
import { Link } from "react-router-dom";

const typeClassMap = {
  default: "text-red-900 hover:bg-gray-200",
  primary: "text-white bg-red-800 hover:bg-red-900",
};
const initialClasses = "p-1 focus:outline-none rounded";
const disabledClasses = "bg-gray-200 text-gray-400 cursor-default";

function Button({ type = "default", className, children, to, disabled, onClick }) {
  const mergedClasses = clsx(initialClasses, disabled ? disabledClasses : typeClassMap[type], className);
  if (to) {
    return (
      <Link to={to} className={mergedClasses} disabled={disabled} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button className={mergedClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
