import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import "./index.module.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
