import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar'
import Projects from './components/Home/Projects';
import Compare from './components/Home/Compare';
import Footer from './components/Footer';
import Feedback from './components/Home/Feedback';
import Contact from './components/Contact';
import { ContactFormProvider } from './components/ContactFormProvider';
import Congo from './components/Congo';


function App() {



  return (

    <Router>
      <ContactFormProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Compare" element={<Compare />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Feedback" element={<Feedback />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route path="/congo"element={<Congo/>} />
        </Routes>
        <Footer />
      </ContactFormProvider>
    </Router>
  );
}

export default App;
