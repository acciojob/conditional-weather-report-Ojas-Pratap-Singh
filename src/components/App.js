import React from "react";
import "./../styles/App.css";

const App = () => {
  const weather = { temperature: 25, conditions: "Sunny" };
  return (
    <div>
      {weather.temperature > 20 ? (
        <p> Temperature: <span style={{color:"red", display:"inline"}}> {weather.temperature} </span>
           condition: {weather.conditions}</p>
      ) : (
        <p> Temperature: <span style={{color:"blue", display:"inline"}}> {weather.temperature} </span>
           condition: {weather.conditions}</p>
      )}
    </div>
  );
};

export default App;
