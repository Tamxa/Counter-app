import React, { useState } from 'react';
import Button from './Button.jsx';

function Counter(){
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        count != 0  ? setCount(count - 1) : 0;
    }
    const Reset = () => {
        setCount(0)
    }

    return (
        <div className="counter-container">
            <p>Counter</p>
            <div className="buttons-container">
                <p className="countValue">{count}</p>
                <Button name="increment" custumFunc={Increment}>+</Button>
                <Button name="decrement" custumFunc={Decrement} >-</Button>
                
            </div>
        </div>
    );
}
export default Counter