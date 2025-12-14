import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";

function App() {
  // state (état, données)

  // Comportement (fonctions, effets)

  // affichage (render)
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
