import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/Footer';
import smartphone_banner from './components/assets/phonebanner.jpg';
import smarthome_banner from './components/assets/homebanner.jpg';
import lifestyle_banner from './components/assets/lifebanner.jpg';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/smartphones' element={<ShopCategory banner={smartphone_banner} category='smartphone'/>}/>
        <Route path='/smarthomes' element={<ShopCategory banner={smarthome_banner} category='smarthome'/>}/>
        <Route path='/lifestyles' element={<ShopCategory banner={lifestyle_banner} category='lifestyle'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
