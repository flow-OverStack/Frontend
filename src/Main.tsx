import FirstPage from "./pages/FirstPage";
import Question from "./pages/Question";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Topics from "./pages/Topics";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><FirstPage /><Footer /></>} />
        <Route path="/topics" element={<><Header /><Topics /><Footer /></>} />
        <Route path="/question" element={<><Header /><Question /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  )
};

export default Main;
