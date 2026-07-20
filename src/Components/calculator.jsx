import { useState } from "react";
function Calculator(){
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [result,setResult]=useState(0);

    const add =()=>{
        setResult(Number(num1)+Number(num2));
    }

    const subtract =()=>{
        setResult(Number(num1)-Number(num2));
    }

    const multiply =()=>{
        setResult(Number(num1)*Number(num2));
    }

    const divide =()=>{
        setResult(Number(num1)/Number(num2));
    }

    return(
        <>
        <h2>Simple Calculator</h2>
        <h3>Result: {result}</h3>

        <div>
            <input type="number" 
            placeholder="Enter Number 1" 
            value={num1} 
            onChange={(e)=>setNum1(e.target.value)}/>

            <input type="number" 
            placeholder="Enter Number 2" 
            value={num2} 
            onChange={(e)=>setNum2(e.target.value)}/>

            <button onClick={add}>Addition</button>
            <button onClick={subtract}>Subtract</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={divide}>Divide</button>  

            </div>

        </>
     )


}
export default Calculator;
