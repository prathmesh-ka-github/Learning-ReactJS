import React, { useState } from 'react';

function App() {
    
    const [count , setCount] = useState(5)

    function decrementCount(){
        setCount(prevCount => prevCount - 1)
        
        
    }
    function incrementCount(){
        setCount((pCount) => pCount + 1)
        setCount((pCount) => pCount + 1)
    }

    return (
        <div className="container">
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount} >+</button>
        </div>
    )
}

export default App