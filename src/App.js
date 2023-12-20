import logo from "./logo.svg";
import "./App.css";
import ManageNumbers from "./components/ManageNumbers";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/Home.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
