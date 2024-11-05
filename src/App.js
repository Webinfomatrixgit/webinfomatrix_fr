import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import Footer from './component/footer';
import AboutUs from './component/aboutUs';
import Header from './component/header';
import AllProduct from './component/allProduct';
import RegistrationForm from './component/registration';
import LoginForm from './component/login';
import Dashboard from './component/admin/dashboard';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path='/dashboard' element = {<Dashboard/>} />
          {/* Add other routes here as needed */}
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/all-product' element={<AllProduct />} />
          <Route path='/registration' element={<RegistrationForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
