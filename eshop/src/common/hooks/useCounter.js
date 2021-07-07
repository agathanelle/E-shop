import { useState } from "react";

function useCounter()
{
    const [count, setCount] = useState(1);
    
  function onIncrement() {
    if (count === "") setCount(1);
    else setCount((prevCount) => prevCount + 1);
  }

  function onDecrement() {
    if (count === 1 || count === "") setCount(1);
    else setCount((prevCount) => prevCount - 1);
  }
  function onInputChange(event) {
    const value = event.target.valueAsNumber;
    const newValue = value === "" ? "" : parseInt(value);

    setCount(newValue);
  }

  function onEmptyChange(event) {
    const value = event.target.valueAsNumber;
    if (!value) setCount(1);
  }

    return{
        count,
        onIncrement,
        onDecrement,
        onInputChange,
        onEmptyChange
    }
}

export default useCounter;