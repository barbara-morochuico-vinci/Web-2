import { useState } from 'react'

interface CounterProps {
    title : string,
    messageAfter10Clicks : string
}

const Counter = ({title, messageAfter10Clicks} : CounterProps) => {
    const [count, setCount] = useState(0)

    return <div> 
       <h4>{title}</h4>
    <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  {count >= 10 ? <p>{messageAfter10Clicks}</p> : null}
  </div>
};

export default Counter;