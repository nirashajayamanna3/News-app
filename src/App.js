import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;