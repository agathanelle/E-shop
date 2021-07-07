import clsx from "clsx";

const defaultClasses = "bg-white border shadow-sm p2";
function Card({ className, children, isRounded }) {
  return <div className={clsx(defaultClasses, className, isRounded && "rounded")}>{children}</div>;
}

export default Card;
