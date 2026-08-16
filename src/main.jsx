import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRoute from "./routes/AppRoute.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { ToastContainer } from "react-toastify";
import { WeatherProvider } from "./context/weatherContext.jsx";
import { TransectionProvider } from "./context/transectionContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <TransectionProvider>
      <WeatherProvider>
        <AppRoute />
        <ToastContainer />
      </WeatherProvider>
    </TransectionProvider>
  </AuthProvider>,
);
