import React, { useState, useEffect } from 'react';

type CounterProps = {
    counter: number;
}

const Counter: React.FC<CounterProps> = ({counter}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const incrementInterval = setInterval(() => {
      if (count < counter) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(incrementInterval);
      }
    }, 1);

    return () => {
      clearInterval(incrementInterval);
    };
  }, [count]);

  return (
    <span className="text-[#19417f] text-[28px] font-extrabold">{count}</span>
  );
};

export default Counter;
