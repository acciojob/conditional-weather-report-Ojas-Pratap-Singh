import React from "react";
import "./../styles/App.css";

const App = () => {
  const weather = { temperature: 25, conditions: "Sunny" };
  return (
    <div>
      {weather.temperature > 20 ? (
        <p style={{ color: "red" }}>
          {weather.temperature} <br /> {weather.conditions}
        </p>
      ) : (
        <p style={{ color: "blue" }}>
          {weather.temperature} <br /> {weather.conditions}
        </p>
      )}
    </div>
  );
};

export default App;
