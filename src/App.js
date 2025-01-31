import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Article from "./Pages/Article";
import Feedback from "./Pages/Feedback";
import Faq from "./Pages/Faq";
import Chetna from "./Pages/Chetna";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Component/ScrollToTop";
import Details from "./Pages/Details";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Article />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/chetna" element={<Chetna />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
