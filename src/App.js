import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import Footer from './component/footer';
import AboutUs from './component/aboutUs';
import Header from './component/header';
import AllProduct from './component/allProduct';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here as needed */}
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/all-product' element={<AllProduct />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
