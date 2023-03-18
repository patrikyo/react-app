import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="tayo" element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
