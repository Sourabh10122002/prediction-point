import { useState } from 'react';
import './App.css';
import Points from './components/Points/Points';
import Radio from './components/Radio/Radio';
import RandomGenerator from './components/RandomGenerator/RandomGenerator';
import SelectAmount from './components/SelectAmount/SelectAmount';

function App() {
  const [points, setPoints] = useState(5000);
  const [selectedRadioValue, setSelectedRadioValue,] = useState('');
  const [amount, setAmount] = useState(100);
  const [num, setnum] = useState(0);

  function handleGenerateRandom() {
    const dataNum = Math.floor(Math.random() * 10)
    setnum(dataNum);

    let newPoints = points;

    if (selectedRadioValue === '' && amount === '') {
      window.alert("Please select amount");
    }

    if (selectedRadioValue === "option1") {
      if (dataNum < 5) {
        newPoints = newPoints + amount
      } else {
        newPoints = newPoints - amount
      }
    } else if (selectedRadioValue === "option3") {
      if (dataNum < 5) {
        newPoints = newPoints - amount
      } else {
        newPoints = newPoints + amount
      }
    } else if (selectedRadioValue === "option2") {
      if (dataNum === 5) {
        newPoints = newPoints + (amount * 5)
      } else {
        newPoints = newPoints - amount
      }
    }

    setPoints(newPoints)
  }

  return (
    <div className="App">
      <Points points={points} setPoints={setPoints} />
      <RandomGenerator num={num} setnum={setnum} handleGenerateRandom={handleGenerateRandom} />
      <Radio selectedRadioValue={selectedRadioValue} setSelectedRadioValue={setSelectedRadioValue} />
      <SelectAmount amount={amount} setAmount={setAmount} />
    </div>
  );
}

export default App;
