import './App.css';
import './components/Farm.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/signup/signup';
import Login from './components/login/login';
import { About } from './components/About/about';
import { Home } from './components/Home/home';
import { Product } from './components/product/product';
import { Adminpage } from './components/admin/adminpage';
import { Viewusers } from './components/admin/viewusers';
import { Adupdate } from './components/admin/adupdate';
import { Productsinsertpage } from './components/productsadmin/productsinsertpage';
import { Productviewpage } from './components/productsadmin/productviewpage';
import { Productupdatepage } from './components/productsadmin/productupdatepage';
import { Userpage } from './components/user/userpage';
import { Contact } from './components/Contact/contact';


function App() {
  return (
   <>  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/adminpages' element={<Adminpage/>}/>      
      <Route path='/viewuser' element={<Viewusers/>}/>      
      <Route path='/update/:id' element={<Adupdate/>}/>      
      <Route path='/productinsert' element={<Productsinsertpage/>}/>      
      <Route path='/viewproduct' element={<Productviewpage/>}/>      
      <Route path='/updateproduct/:id' element={<Productupdatepage/>}/>      
      <Route path='/userpage/:id' element={<Userpage/>}/>      

    </Routes>
  </BrowserRouter>
  {/* <Userpage/> */}
   </>
  );
}

export default App;
