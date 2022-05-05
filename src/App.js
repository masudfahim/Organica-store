
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bannar from './Components/Pages/Home/Bannar/Bannar';
import Home from './Components/Pages/Home/Home/Home';
import Product from './Components/Pages/Home/Product/Product';
import Products from './Components/Pages/Home/Products/Products';
import ProductDetail from './Components/Pages/Home/ProductsDetail/ProductDetail';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/productdetail/:serviceId" element={<ProductDetail></ProductDetail>}></Route>




        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/bannar' element={<Bannar></Bannar>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
