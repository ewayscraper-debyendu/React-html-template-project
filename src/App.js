import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Error from './pages/Error';


function App() {
  return (
    <>
     <div>
       <Router>
       <Header/>
       <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/about-us" element={<About/>}/>
         <Route path="/product" element={<Products/>}/>
         <Route path="/contact-us" element={<Contact/>}/>
         <Route path="*" element={<Error/>}/>
       </Routes>
       <Footer/>
       </Router>
      </div>
    </>
  );
}

export default App;
