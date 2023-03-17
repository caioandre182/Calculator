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
        // limpa os campos number1 e number2
        setNumber1('');
        setNumber2('');
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
        // limpa os campos number1 e number2
        setNumber1('');
        setNumber2('');
      };
      
    return (
        <div class="row">
            <div>
                <label class="label">
                    Campo A:
                </label>
                <input type="number" class="input" value={number1} onChange={handleNumber1Change} />
            </div>
            
            <div>
                <label class="label">
                    Campo B:
                </label>
                <input type="number" class="input" value={number2} onChange={handleNumber2Change} />
            </div>
            

            <div>
                <label class="label-result">{result}</label>
            </div>
          
            <div>
                <button class="btn1" onClick={handleSum}>Somar</button>
                <button class="btn2" onClick={handleSubtract}>Subtrair</button>
            </div>

        </div>
      );
};

export default Calculator;



