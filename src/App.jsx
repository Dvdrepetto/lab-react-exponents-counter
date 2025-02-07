import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";


function App () {
  const [count, setCount] = useState(0);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  
  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count= {count} callBackToDecrement={decrement} callBackToIncrement={increment} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo count= {count}  num={Math.pow(count, 2)}/>
        <ExponentThree count= {count}  num={Math.pow(count, 3)}/>
        <ExponentFour count= {count}  num={Math.pow(count, 4)}/>
        <ExponentFive count= {count} num={Math.pow(count, 5)}/>
        <ExponentSix count= {count}  num={Math.pow(count, 6)}/>
      </div>
    </div>
  );
}

export default App;
