import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Update from "./components/Update/Update";
import Create from "./components/Create/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/update" element={<Update />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
