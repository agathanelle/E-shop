import clsx from "clsx";
import { Link } from "react-router-dom";

const initialClasses = "p-2 font-semibold text-xl hover:text-white";

function NavItem({ content, route, className }) {
  return (
    <li className={clsx(initialClasses, className)}>
      <Link to={route}>{content}</Link>
    </li>
  );
}

export default NavItem;
