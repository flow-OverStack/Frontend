import FirstPage from "./pages/FirstPage";
import Question from "./pages/Question";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Topics from "./pages/Topics";
import Authorization from "./pages/Authorization";
import Registration from "./pages/Registration";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><main><FirstPage /></main><Footer /></>} />
        <Route path="/topics" element={<><Header /><main><Topics /></main><Footer /></>} />
        <Route path="/question" element={<><Header /><main><Question /></main><Footer /></>} />
        <Route path="/authorization" element={<><Header /><main><Authorization /></main><Footer /></>} />
        <Route path="/registration" element={<><Header /><main><Registration /></main><Footer /></>} />
      </Routes>
    </BrowserRouter>
  )
};

export default Main;
