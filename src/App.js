import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Change BrowserRouter to HashRouter
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
    <Router>
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
    </Router>
  );
}

export default App;
