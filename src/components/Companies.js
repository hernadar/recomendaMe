import React from 'react';
import CompaniesList from './CompaniesList';
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';


function Companies() {
    const [companies, setCompanies] = useState([])
    useEffect(() => {

        // busca en la base de datos con then, pero ahora lo hago manual
        fetch('/api/companies')
            .then(response => response.json())
            .then(companies => {
                setCompanies(companies.data)

            })
    }, [])

   
    return (
        <>
            <div className='container'>
                <div className="row">
               
                        {companies.map((company, i) => {

                            return (
                                
                                <NavLink to={`/companies/${company.id}`}>

                                    <CompaniesList key={i} company={company} />
                                </NavLink>)
                                
                        })}
                    
                    </div>
                </div>
            

        </>
    )
}

export default Companies;