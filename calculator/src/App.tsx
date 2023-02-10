import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/CreatButton";
import * as math from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const lastClicked = useRef<any>();
  const [isOperator, setOperator] = useState(false);
  const operators = "/*+-";

  function addToInput(val: any) {
    if (val !== "=" && (!isOperator || !isNaN(val))) {
      console.log(operators.includes(val));
      console.log(operators.includes(lastClicked.current));
      const newInput = input + val;
      setInput(newInput);
      if (operators.includes(val)) {
        setOperator(true);
      }
    } else if (val === "=") {
      // math.eval(input)
      if (input.endsWith("/0")) {
        alert("you can't divide by 0");
      } else {
        setInput(math.evaluate(input));
        setOperator(false);
      }
    }
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={input}></Input>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={addToInput}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton
            handleClear={() => {
              setInput("");
              setOperator(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
