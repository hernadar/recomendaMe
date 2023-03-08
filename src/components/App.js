import React from 'react';
import SideBar from './SideBar';

import Error404 from './Error404';
import Home from './Home';
import Footer from './Footer';
import NavBar from './NavBar';
import Register from './Register';
import Login from './Login';
import Companies from './Companies';
import Profile from './Profile';
import Company from './Company';
import CompanyRegister from './CompanyRegister';
import ProductRegister from './ProductRegister';
import { Routes, Route } from 'react-router-dom';



function App() {
  
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        
        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
          {/*<!-- Main Content -->*/}
          <div id="content">
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user'>
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login />} />
              <Route path='profile' element={<Profile />} />
            </Route>
            <Route path='/companies/'>
              <Route index element={<Companies />} />
              <Route path=':id' element={<Company />}/> 
              <Route path='register' element={<CompanyRegister />}/>
              <Route path=':id/products/register' element={<ProductRegister />}/> 
            </Route>
               <Route path='*' element={<Error404 />} />
          </Routes>  
            <Footer />
         </div >
        </div > 
      </div>
    </React.Fragment>
  );
}

export default App;
