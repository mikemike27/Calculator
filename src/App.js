import { useState } from 'react';
import './App.css';

function App() {

  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [result, setResult] = useState(0)

  function addition(){

    setResult(Number(num1) + Number(num2))

    //console.log(result);

  }

  function subtraction(){

    setResult(Number(num1) - Number(num2))

    //console.log(result);

  }

  function multiplication(){

    setResult(Number(num1) * Number(num2))

    //console.log(result);

  }

  function division(){

    setResult(Number(num1) / Number(num2))

    //console.log(result);

  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <p>
        <input type='text' placeholder='Enter a number' value={num1} onChange={e=>setNum1(e.target.value)} />
      </p>
      <p>
        <input type='text' placeholder='Enter a number' value={num2} onChange={e=>setNum2(e.target.value)} />
      </p>
      <p>
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={division}>/</button>
      </p>
      <input type='text' placeholder='Result' value={result}/>
    </div>
  );
}

export default App;

//calculator input 2 num input box
//button + - * /
//set value to a new input box

// A registration form that has name, surname, gender, age. The gender would be a radiobox.
// There will be a 
// If gender is male, show the user activities dropdown that has values swimming and cycling
// If the gender is female, then show the dropdown with values dancing and swimming.
// On submit, print the information on console.
// On submission if the age is greater than 18, show them a list of alcoholic beverages (simple list with dummy items).