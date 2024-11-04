import { useState } from 'react'
import './ColorBox.css'

const ColorBox = () => {
    const colors = ["red", "green", "blue", "yellow", "purple"];
    const [i, setI] = useState(0);

    const handleColorClick = () => {
        if(i===colors.length-1){
            setI(0);
        }
        else {setI(i+1);}
      }

    return <div className={colors[i]} style={{ backgroundColor: colors[i] }}>
        {colors[i]}
        <button onClick={handleColorClick}> {i+1>colors.length-1 ? colors[0] : colors[i+1]} </button>
    </div>;
}

export default ColorBox;