import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const[num1, setNum1] = useState(" ");
  const[num2, setNum2] = useState(" ");
  const[ans, setAns]= useState(" ");
  // const[validate, setValidate] = useState([]);

   //using handleChange() to target values
  const handleChange = (e) => {
    //a destructured object to easily point out the "values"
  const {name, value} = e.target;
  //using parseInt to convert the value from string to number
    if(name == "num1") setNum1(parseInt(value));
    else if(name == "num2") setNum2(parseInt(value));
  };

  //using handleAction to do addition & subtraction
  const handleAction = (action) =>{
    if(action == "+") setAns(num1+num2);
    else setAns(num1-num2);

    if(action == "-") setAns(num1-num2);
    else setAns(num1+num2);
    
  };
  
  //using handleAction to do multiplication & division
   const actionTwo = (action) =>{
    if(action == "*" ) setAns(num1*num2);
    else setAns(num1/num2)
  
    if(action == "/")setAns(num1/num2);
    else setAns(num1*num2);
}

//validation


  return (
   
  <div className="App">
    <h2 id='head'>React Calculator</h2>

  <div className="inputbox">
    <form>
       <input type="text" placeholder="Num1" name="num1" value={num1} onChange={handleChange} />
       <input type="text" placeholder='Num2' name="num2" value={num2} onChange={handleChange} ></input>
    </form>
  </div>

  <div className="keys">
     
    <button onClick={()=>{handleAction("+")}} id="add">+</button>
    <button onClick={()=>{handleAction("-")}} id="subtract">-</button>
    <button onClick={()=>{actionTwo("*")}} id="mutlipy">*</button>
    <button onClick={()=>{actionTwo("/")}} id="divide">/</button>

    
      {/* for printing erros */}
      <div className="error">{}</div>
      
      <h2 id='anss'> {ans}</h2>

      {/* for printing success */}
     <div className="result">{}</div>    
  </div>  
  
  
  </div>
  );
}


export default App;
