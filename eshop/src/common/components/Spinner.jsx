import { ReactComponent as SpinIcon } from "../assets/spin.svg";
import useLoadingDots from "../hooks/useLoadingDots";

function Spinner({ text = "Loading" }) {
  const dot = useLoadingDots();
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <SpinIcon />
      <div className="flex mt-1 font-semibold">
        <span>{text}</span>
        <span className="w-3">{dot}</span>
      </div>
    </div>
  );
}

export default Spinner;
