import { createContext, useState } from "react";

export const Weather = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  console.log(weather);
  return (
    <Weather.Provider value={{ weather, setWeather }}>
      {children}
    </Weather.Provider>
  );
};
