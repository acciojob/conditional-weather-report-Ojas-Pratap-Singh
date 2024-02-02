import React from "react";
import "./../styles/App.css";

const App = () => {
  const weather = { temperature: 25, conditions: "Sunny" };
  return (
    <div>
      {weather.temperature > 20 ? (
        <span> Temperature: <span style={{color:"red"}}> {weather.temperature} </span> <br/> 
           condition: {weather.conditions}</span>
      ) : (
        <span> Temperature: <span style={{color:"blue"}}> {weather.temperature} </span> <br/> 
           condition: {weather.conditions}</span>
      )}
    </div>
  );
};

export default App;
