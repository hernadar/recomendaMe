import React from 'react';
import CompaniesList from './CompaniesList';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Company from './Company';
import CompanyRegister from './CompanyRegister'
import ProductRegister from './ProductRegister'

function Companies(){
   const [companies,setCompanies] = useState([])
   useEffect(() =>{

    // busca en la base de datos con then, pero ahora lo hago manual
    fetch('/api/companies')
        .then(response => response.json())
        .then (companies =>{
            setCompanies(companies.data)
           
        })
   },[]) 
   
    return (
        <>
   
           
          <Routes>
               <Route
                    index 
                    element ={<CompaniesList companies={companies} />}
               />
                <Route path=':companyId' element ={<Company/>} />
                <Route path='register' element={<CompanyRegister />} />
                <Route path=':companyid/products/register' element={<ProductRegister />} />
            </Routes>        

               
            
        
        </>
    )
}

export default Companies;