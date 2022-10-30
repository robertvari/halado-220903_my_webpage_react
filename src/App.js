import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>

          <Routes>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            
            <Route path="/" element={<Home/>}/>
          </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
