import Button from "./Button";

const buttonClass = "rounded-full transition h-6 w-6 items-center justify-center bg-gray-200 transform scale-125 duration-200 hover:-translate-y-0.5 active:translate-y-0.5";

function Counter({ className, count, onIncrement, onDecrement, onInputChange, onEmptyChange }) {
  return (
    <div className={className}>
      <Button className={buttonClass} onClick={onDecrement}>
        -
      </Button>
      <input className="rounded-md w-20 m-1 text-center" type="number" value={count} onChange={onInputChange} onBlur={onEmptyChange} inputMode="numeric" />
      <Button className={buttonClass} onClick={onIncrement}>
        +
      </Button>
    </div>
  );
}

export default Counter;
