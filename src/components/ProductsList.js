import React from 'react';
import { useState, useEffect } from 'react'
import Product from './Product'


function ProductsList(){
    const [products,setProducts] = useState([])
    useEffect(() =>{
 
     // busca en la base de datos con then, pero ahora lo hago manual
     setProducts([{
        id:'1', 
        name: 'Fernet Branca',
        price: 2000, 
        points: 3,
        image: 'fernetBranca.png',
        category: 'Bar'
         }, {
        id:'2', 
        name: 'Campari',
        price: 2000, 
        points: 3,
        image: 'campari.png',
        category: 'Bar'
             },{
        id:'3', 
        name: 'Havana Club',
        price: 2000, 
        points: 4,
        image: 'havanaClub.png',
        category: 'Bar'
        },{
        id:'4', 
        name: 'Smirnoff',
        price: 2000, 
        points: 5,
        image: 'smirnoff.png',
        category: 'Bar'
        },{
        id:'6', 
        name: 'Rabas a la Romana',
        price: 2000, 
        points: 10, 
        image: 'rabas.png',
        category: 'Cocina'
    },{
        id:'7', 
        name: 'Lomo al Champigñon con papas fritas',
        price: 2000, 
        points: 10,
        image: 'lomoAlChampignon.png',
        category: 'Cocina'
        },{
        id:'8', 
        name: 'Sandwich de lomo en pan Árabe',
        price: 2000, 
        points: 7,
        image: 'lomoArabe.png',
        category: 'Cocina'
        },{
        id:'9', 
        name: 'Absolut',
        price: '2000', 
        points: 9,
        image: 'absolut.png',
        category: 'Bar'
        },{
        id:'10', 
        name: 'Pizzeta',
        price: 2000, 
        points: 5,
        image: 'pizza.png',
        category: 'Cocina'
        },{ 
        id:'11', 
        name: 'Papas rústicas y de Bastón',
        price: 2000, 
        points: 5,
        image: 'papasRusticas.png',
        category: 'Cocina'
         }])
    },[]) 


  
    return(
        <>  
        <div className="row">
            
            {products.map( (producto, i) => {

                return <Product product={producto} key={i}/>
            
            })} 
        </div>
            </>  
    )
}

export default ProductsList;





