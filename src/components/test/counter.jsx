import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count+1)
    console.log(count)
  }
  function dec() {
    setCount(count-1)
    console.log(count)
  }

  return ( 
    <div>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <h1>{count}</h1>
    </div>
   );
}
 
export default Counter;
