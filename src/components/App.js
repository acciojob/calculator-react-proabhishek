
import React,{useState} from "react";


const App = () => {
  let[expression, setExpression] = useState("");
   
   function handleClick(e){
     setExpression(expression + e.target.innerText);
   }

    function caluclate(){
        try{
          setExpression(eval(expression).toString());
        }catch(err){
            setExpression("Error");
        }
    }



    return (
        <div className="App">
              <input type="text"
                onChange={(e) => setExpression(e.target.value)}
                value={expression}
              />
                <div className="keypad">
                        <button onClick={()=>setExpression("")}>C</button>
                        <button onClick={handleClick}>/</button>
                        <button onClick={handleClick}>*</button>
                        <button onClick={handleClick}>-</button>
                        <button onClick={handleClick}>7</button> 
                        <button onClick={handleClick}>8</button>
                        <button onClick={handleClick}>9</button>
                        <button className="tall" onClick={handleClick}>+</button>
                        <button onClick={handleClick}>4</button>
                        <button onClick={handleClick}>5</button>
                        <button onClick={handleClick}>6</button>
                        <button onClick={handleClick}>1</button>
                        <button onClick={handleClick}>2</button>
                        <button onClick={handleClick}>3</button>
                        <button className="tall" onClick={caluclate}>=</button>
                        <button onClick={handleClick}>0</button>
                        <button className="wide" onClick={handleClick}>.</button>

                </div>
        </div>
    );
}

export default App;