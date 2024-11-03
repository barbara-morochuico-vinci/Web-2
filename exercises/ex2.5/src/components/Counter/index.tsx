import { useState } from 'react'

interface CounterProps {
    title : string,
    messageAfter10Clicks: string,
    messageWhenHover: string 
}

const Counter = ({title, messageAfter10Clicks, messageWhenHover} : CounterProps) => {
    const [count, setCount] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    return <div> 
       <h4>{title}</h4>
    <button onClick={() => setCount((count) => count + 1)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
    count is {count}
  </button>
  {isHovered ? <p>{messageWhenHover}</p> : null}
  {count >= 10 ? <p>{messageAfter10Clicks}</p> : null}
  </div>
};

export default Counter;