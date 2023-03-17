import React, { useState } from "react";

const Calculator = ( ) => {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [result, setResult] = useState("");

    const handleNumber1Change = (event) => {
        setNumber1(event.target.value)
    };
    
    const handleNumber2Change = (event) => {
        setNumber2(event.target.value);
    };


    const handleSum = async () => {
        const response = await fetch('http://localhost:8080/calc/add', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ number1, number2 })
        });
        const result = await response.text();
        setResult(result);
      };
      
      const handleSubtract = async () => {
        const response = await fetch('http://localhost:8080/calc/sub', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ number1, number2 })
        });
        const result = await response.text();
        setResult(result);
      };
      
    return (
        <div>
          <label>
            Número 1:
            <input type="number" value={number1} onChange={handleNumber1Change} />
          </label>
          <label>
            Número 2:
            <input type="number" value={number2} onChange={handleNumber2Change} />
          </label>
          <button onClick={handleSum}>Somar</button>
          <button onClick={handleSubtract}>Subtrair</button>
          <label>Resultado: {result}</label>
        </div>
      );
};

export default Calculator;



