import {useState, useEffect} from 'react';
const dotsInterval = 500;
function useLoadingDots()
{
    const [dot, setDot] = useState("");
    useEffect(() => {
      const interval = setInterval(() => {
        setDot((prev) => (prev.length >= 3 ? "" : prev + "."));
      }, dotsInterval);
      return () => clearInterval(interval);
    }, []);

    return dot;
}

export default useLoadingDots;