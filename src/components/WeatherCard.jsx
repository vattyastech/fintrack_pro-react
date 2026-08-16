import React from "react";
import { useWeather } from "../hooks/useWeather";
import { useAuth } from "../hooks/useAuth";

const WeatherCard = () => {
  const { weather } = useWeather();
  const { loggedIn } = useAuth();

  if (!weather) {
    return (
      <div className="flex w-full items-center justify-center rounded-3xl bg-white p-8 shadow-lg">
        <p className="text-gray-500">Loading weather...</p>
      </div>
    );
  }

  const date = new Date();
  const hour = date.getHours();

  // Greeting according to current time
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  const day = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
  <div className="flex w-full flex-col gap-5 md:flex-row">

    {/* Greeting Section */}
    <div className="relative flex flex-1 flex-col justify-center overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#17152b] via-[#201a3b] to-[#111827] p-8 shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10">

        <p className="mb-3 text-sm font-medium text-purple-300">
          {day}, {formattedDate}
        </p>

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          {greeting},{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            {loggedIn?.name || "User"}
          </span>{" "}
          👋
        </h1>

        <p className="mt-4 max-w-md text-gray-400">
          Here's the current weather in{" "}
          <span className="font-semibold text-cyan-400">
            {weather.name}
          </span>
          .
        </p>

        {/* Small decorative line */}
        <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400" />

      </div>
    </div>


    {/* Weather Section */}
    <div className="relative flex-1 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#0f172a] via-[#102a43] to-[#172554] p-6 text-white shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10">

        {/* City */}
        <div className="flex items-start justify-between">

          <div>
            <h2 className="text-3xl font-bold text-white">
              {weather.name}
            </h2>

            <p className="mt-1 text-sm capitalize text-cyan-300">
              {weather.weather[0].description}
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-3 text-4xl backdrop-blur-md">
            🌤️
          </div>

        </div>


        {/* Temperature */}
        <div className="mt-6 flex items-center gap-5">

          <h1 className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-6xl font-bold text-transparent">
            {Math.round(weather.main.temp)}°
          </h1>

          <div className="border-l border-white/10 pl-5">
            <p className="text-xs text-gray-400">
              Feels like
            </p>

            <p className="text-xl font-semibold text-white">
              {Math.round(weather.main.feels_like)}°
            </p>
          </div>

        </div>


        {/* Weather Details */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

          {/* Humidity */}
          <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/10 p-3 backdrop-blur-md">
            <p className="text-xs text-cyan-300">
              💧 Humidity
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              {weather.main.humidity}%
            </p>
          </div>


          {/* Wind */}
          <div className="rounded-2xl border border-purple-400/10 bg-purple-400/10 p-3 backdrop-blur-md">
            <p className="text-xs text-purple-300">
              💨 Wind
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              {weather.wind.speed} m/s
            </p>
          </div>


          {/* Pressure */}
          <div className="rounded-2xl border border-pink-400/10 bg-pink-400/10 p-3 backdrop-blur-md">
            <p className="text-xs text-pink-300">
              🌡️ Pressure
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              {weather.main.pressure}
            </p>
          </div>


          {/* Visibility */}
          <div className="rounded-2xl border border-blue-400/10 bg-blue-400/10 p-3 backdrop-blur-md">
            <p className="text-xs text-blue-300">
              👁️ Visibility
            </p>

            <p className="mt-1 text-lg font-semibold text-white">
              {(weather.visibility / 1000).toFixed(1)} km
            </p>
          </div>

        </div>

      </div>
    </div>

  </div>
)
};
export default WeatherCard;