import { Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from './component/Header';
import { Login } from './component/Login';
import { Signup } from './component/Signup';
import { Home } from "./component/Home";
import { Contact } from "./component/Contact";
import { About } from "./component/About";
import { Services } from "./component/Services";
import { Footer } from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
