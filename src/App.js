
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddService from './Components/Pages/AddService/AddService';
import Blog from './Components/Pages/Blogs/Blog';
import Bannar from './Components/Pages/Home/Bannar/Bannar';
import Home from './Components/Pages/Home/Home/Home';
import Product from './Components/Pages/Home/Product/Product';
import ProductDetail from './Components/Pages/Home/Product/ProductDetail/ProductDetail';
import Products from './Components/Pages/Home/Products/Products';

import Story from './Components/Pages/Home/Story/Story';
import Suport from './Components/Pages/Home/Suport/Suport';
import Login from './Components/Pages/Login/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import RequireAuth from './Components/Pages/Login/RequireAuth/RequireAuth';
import SocialLogin from './Components/Pages/Login/SocialLogin/SocialLogin';
import ManageServices from './Components/Pages/ManageServices/ManageServices';
import MyItems from './Components/Pages/MyItems/MyItems';
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
        <Route path="/product/:productId" element={<RequireAuth>
          <ProductDetail></ProductDetail>
        </RequireAuth>}></Route>




        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/bannar' element={<Bannar></Bannar>}></Route>

        <Route path='/products' element={<RequireAuth>
          <Products></Products>
        </RequireAuth>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/addservice' element={<RequireAuth>
          <AddService></AddService>
        </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth>
          <ManageServices></ManageServices>
        </RequireAuth>}></Route>
        <Route path='/myitems' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
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
