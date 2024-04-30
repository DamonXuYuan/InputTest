import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import TradingView from "./pages/TradingView";

import "./index.module.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tradingView" element={<TradingView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
