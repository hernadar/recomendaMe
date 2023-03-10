import React from 'react';
import Layout from './Layout';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Companies from './Companies';
import Profile from './Profile';
import { Routes, Route } from 'react-router-dom';




function App() {

  return (
  
    
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='companies/*'element={<Companies />} />
        <Route path='users'>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='profile' element={<Profile />} />
          </Route>
        </Route>
        
        

       
        {/*<Route path='*' element={<Error404 />} /> */}
        
       
        
        

      </Routes>

 
   

       


      );
}

export default App;
