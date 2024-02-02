import React from "react";
import "./../styles/App.css";

const App = () => {
  const weather = { temperature: 25, conditions: "Sunny" };
  return (
    <div>
      {weather.temperature > 20 ? (
        <p> Temperature: <p style={{color:"red", display:"inline"}}> {weather.temperature} </p> <br/> 
           condition: {weather.conditions}</p>
      ) : (
        <p> Temperature: <p style={{color:"blue"}}> {weather.temperature} </p> <br/> 
           condition: {weather.conditions}</p>
      )}
    </div>
  );
};

export default App;
