import { useContext, useEffect } from "react";
import { Weather } from "../context/weatherContext";
import axios from "axios";

export const useWeather = () => {
  const { weather, setWeather } = useContext(Weather);
  const API_KEY = "901e8216578a6fd6612f083381295d44";

  const featherWeather = async (lat,lon) => {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const res = await axios.get(api);
    return setWeather(res.data);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        featherWeather(lat,lon);
      },
      (error) => {
        console.error(error);
      },
    );
  }, []);

  return {
    weather,
  };
};
