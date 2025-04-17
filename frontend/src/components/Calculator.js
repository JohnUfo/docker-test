import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [operation, setOperation] = useState('add');

    const calculate = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/calculate/${operation}?a=${num1}&b=${num2}`);
            const data = await response.json();
            setResult(data);
        } catch (error) {
            setResult('Error: ' + error.message);
        }
    };

    return (
        <div className="calculator">
            <h1>React Calculator</h1>
            <div className="input-group">
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="First number"
                />
                <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="multiply">×</option>
                    <option value="divide">÷</option>
                </select>
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Second number"
                />
                <button onClick={calculate}>=</button>
            </div>
            <div className="result">Result: {result}</div>
        </div>
    );
}

export default Calculator;