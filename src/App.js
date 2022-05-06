
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Pages/Blogs/Blog';
import Bannar from './Components/Pages/Home/Bannar/Bannar';
import Home from './Components/Pages/Home/Home/Home';
import Product from './Components/Pages/Home/Product/Product';
import Products from './Components/Pages/Home/Products/Products';
import ProductDetail from './Components/Pages/Home/ProductsDetail/ProductDetail';
import Story from './Components/Pages/Home/Story/Story';
import Suport from './Components/Pages/Home/Suport/Suport';
import Login from './Components/Pages/Login/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import SocialLogin from './Components/Pages/Login/SocialLogin/SocialLogin';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Loading from './Components/Shared/Loading/Loading';
import NotFound from './Components/Shared/NotFound/NotFound';

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
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/sociallogin' element={<SocialLogin></SocialLogin>}></Route>
        <Route path='/loading' element={<Loading></Loading>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/story' element={<Story></Story>}></Route>
        <Route path='/suport' element={<Suport></Suport>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
