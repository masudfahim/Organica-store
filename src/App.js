
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bannar from './Components/Pages/Home/Bannar/Bannar';
import Home from './Components/Pages/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/bannar' element={<Bannar></Bannar>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
