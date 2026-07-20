import { useState } from "react";
function Counter(){
    const[Count,setCount]=useState(0);
    return(
        <h1>
            <h1>This is the Counter Example</h1>
            <h2>Count{Count}</h2>
            <div><button onClick={()=>setCount(Count+1)}>Increment</button></div>
        </h1>
    );
}
export default Counter;