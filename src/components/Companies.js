import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react'

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */



/* <!-- Total awards --> */


function Companies(){
   const [companies,setCompanies] = useState([])
   useEffect(() =>{

    // busca en la base de datos con then, pero ahora lo hago manual
    setCompanies([{
        id:'1', 
        name: 'Olimpo',
        item: 'Diversión Nocturna', 
        recomendations: 21,
        image: 'olimpo.png',
        color:'primary'
        }, {
        id:'2', 
        name: 'Apeteco',
        item: 'Diversión Nocturna', 
        recomendations: 15,
        image: 'olimpo.png',
        color:'warning'
            },{
        id:'3', 
        name: 'Jocker',
        item: 'Diversión Nocturna', 
        recomendations: 11,
        image: 'olimpo.png',
        color:'danger'
        }])
   },[]) 
    
    return (
    
    <>
        
        <div className="row">
            
            {companies.map( (empresa, i) => {

                return <SmallCard company={empresa} key={i}/>
            
            })} 

        </div>
        </>
    )
}

export default Companies;